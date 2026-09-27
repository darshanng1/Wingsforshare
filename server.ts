import express from "express";
import { createServer as createViteServer } from "vite";
import path from "path";
import multer from "multer";
import fs from "fs";

const LEADS_FILE = path.join(process.cwd(), "leads.json");

// Initialize JSON leads file if it doesn't exist
if (!fs.existsSync(LEADS_FILE)) {
  fs.writeFileSync(LEADS_FILE, JSON.stringify([], null, 2));
}

const upload = multer({
  storage: multer.diskStorage({
    destination: (req, file, cb) => {
      const dir = path.join(process.cwd(), "public", "logos");
      if (!fs.existsSync(dir)) {
        fs.mkdirSync(dir, { recursive: true });
      }
      cb(null, dir);
    },
    filename: (req, file, cb) => {
      const type = req.body.type || "light";
      cb(null, `logo-${type}.png`);
    },
  }),
  fileFilter: (req, file, cb) => {
    if (file.mimetype.startsWith("image/")) {
      cb(null, true);
    } else {
      cb(new Error("Only images are allowed"));
    }
  },
});

async function startServer() {
  // Load .env if present (optional — keeps SMTP secrets out of the repo)
  try {
    const dotenv: any = await import("dotenv");
    (dotenv.default || dotenv).config();
  } catch {
    /* dotenv not installed — rely on real environment variables */
  }

  const app = express();
  const PORT = 3000;

  app.use(express.json());

  // Serve static files from public or dist/logos
  const publicPath = path.resolve(process.cwd(), "public");
  const distPath = path.resolve(process.cwd(), "dist");
  
  // Explicit route for logos to prevent 404s
  // Check public first (for uploads), then dist (for bundled assets)
  app.use('/logos', express.static(path.join(publicPath, 'logos'), {
    maxAge: '0',
    etag: false,
    setHeaders: (res) => {
      res.set('Cache-Control', 'no-store, no-cache, must-revalidate, proxy-revalidate');
    }
  }));
  
  app.use('/logos', express.static(path.join(distPath, 'logos'), {
    maxAge: '0',
    etag: false
  }));

  app.use(express.static(publicPath));

  // API Route for Contact Form
  // Required: name + email. Phone is optional.
  // Enquiries are always saved to leads.json and, when SMTP is configured,
  // emailed to MAIL_TO (defaults to info@wingsforshare.com).
  app.post("/api/contact", async (req, res) => {
    const { name, email, phone, service, message } = req.body;

    if (!name || !email) {
      return res.status(400).json({ success: false, message: "Name and email are required." });
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(String(email))) {
      return res.status(400).json({ success: false, message: "Please provide a valid email address." });
    }

    try {
      // 1. Save to JSON file (backup, never lose a lead)
      const data = fs.readFileSync(LEADS_FILE, "utf-8");
      const leads = JSON.parse(data);

      const newLead = {
        id: Date.now(),
        name,
        email,
        phone: phone || "",
        service: service || "",
        message: message || "",
        created_at: new Date().toISOString()
      };

      leads.push(newLead);
      fs.writeFileSync(LEADS_FILE, JSON.stringify(leads, null, 2));

      // 2. Email the enquiry to info@wingsforshare.com
      const MAIL_TO = process.env.MAIL_TO || "info@wingsforshare.com";
      if (process.env.SMTP_HOST && process.env.SMTP_USER && process.env.SMTP_PASS) {
        try {
          const nodemailer: any = await import("nodemailer");
          const transporter = (nodemailer.default || nodemailer).createTransport({
            host: process.env.SMTP_HOST,
            port: Number(process.env.SMTP_PORT || 465),
            secure: Number(process.env.SMTP_PORT || 465) === 465,
            auth: { user: process.env.SMTP_USER, pass: process.env.SMTP_PASS },
          });
          await transporter.sendMail({
            from: `"WingsForShare Enquiry" <${process.env.SMTP_USER}>`,
            to: MAIL_TO,
            replyTo: email,
            subject: `New enquiry (${service || "General"}) — ${name}`,
            text:
              `New enquiry from wingsforshare.com\n\n` +
              `Name: ${name}\nEmail: ${email}\nPhone: ${phone || "-"}\nService: ${service || "-"}\n\n` +
              `${message || "(no message)"}`,
          });
          console.log(`Enquiry emailed to ${MAIL_TO}: ${name} (${email})`);
        } catch (mailErr) {
          console.error("Enquiry email failed (lead still saved to leads.json):", mailErr);
        }
      } else {
        console.log("SMTP not configured — enquiry saved to leads.json only.");
      }

      res.json({ success: true, message: "Message sent successfully!" });
    } catch (error) {
      console.error("Error processing contact form:", error);
      res.status(500).json({ success: false, message: "Internal server error." });
    }
  });

  // API Route for Logo Upload
  app.post("/api/admin/upload-logo", upload.single("logo"), (req, res) => {
    try {
      if (!req.file) {
        return res.status(400).json({ success: false, message: "No file uploaded." });
      }
      console.log(`Logo uploaded: ${req.file.filename} to ${req.file.path}`);
      res.json({ success: true, message: "Logo updated successfully!" });
    } catch (error) {
      console.error("Error uploading logo:", error);
      res.status(500).json({ success: false, message: "Failed to upload logo." });
    }
  });

  // Vite middleware for development
  const isProd = process.env.NODE_ENV === "production";
  
  if (!isProd) {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), "dist");
    
    // Serve static files from dist
    // Convenience redirects (so /sitemap and /robots don't 404)
    app.get("/sitemap", (_req, res) => res.redirect(301, "/sitemap.xml"));
    app.get("/robots", (_req, res) => res.redirect(301, "/robots.txt"));

    app.use(express.static(distPath, {
      index: false,
      redirect: false,
    }));

    // Handle SPA routing
    const KNOWN_ROUTES: RegExp[] = [
      /^\/$/,
      /^\/services\/?$/,
      /^\/services\/[a-z0-9-]+\/?$/,
      /^\/portfolio\/?$/,
      /^\/blog\/?$/,
      /^\/blog\/[a-z0-9-]+\/?$/,
      /^\/contact\/?$/,
      /^\/start-project\/?$/,
      /^\/product\/[a-z0-9-]+\/?$/,
      /^\/architect\/?$/,
      /^\/seo\/?$/,
      /^\/login\/?$/,
      /^\/dashboard\/?$/,
      /^\/setup-logos\/?$/,
    ];

    app.get("*", (req, res) => {
      // If the request looks like a static asset but wasn't found by express.static, return 404
      if (req.path.match(/\.(png|jpg|jpeg|svg|gif|webp|css|js|woff2?|ttf|eot|ico)$/)) {
        return res.status(404).send("Asset not found");
      }
      // Serve a prerendered per-route HTML file when one exists (per-page meta for crawlers)
      const clean = req.path.replace(/\/+$/, "");
      const pre = clean ? path.join(distPath, clean, "index.html") : "";
      if (pre && fs.existsSync(pre)) {
        return res.status(200).sendFile(pre);
      }
      // Known SPA route -> 200; anything else -> real 404 (avoids Google soft-404s)
      const isKnown = KNOWN_ROUTES.some((r) => r.test(req.path));
      res.status(isKnown ? 200 : 404).sendFile(path.join(distPath, "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

startServer();
