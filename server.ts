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
  const app = express();
  const PORT = 3000;

  app.use(express.json());

  // API Route for Contact Form
  app.post("/api/contact", async (req, res) => {
    const { name, email, phone, service, message } = req.body;

    // Basic validation
    if (!name || !email || !phone) {
      return res.status(400).json({ success: false, message: "Missing required fields." });
    }

    try {
      // 1. Save to JSON file
      const data = fs.readFileSync(LEADS_FILE, "utf-8");
      const leads = JSON.parse(data);
      
      const newLead = {
        id: Date.now(),
        name,
        email,
        phone,
        service,
        message,
        created_at: new Date().toISOString()
      };
      
      leads.push(newLead);
      fs.writeFileSync(LEADS_FILE, JSON.stringify(leads, null, 2));

      // SMTP logic removed as per request to remove environment variables.
      console.log(`Lead saved: ${name} (${email})`);

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
    app.use(express.static(distPath, {
      index: false, // Don't serve index.html from here, we handle it below
    }));

    // Handle SPA routing, but exclude static assets from falling back to index.html
    app.get("*", (req, res) => {
      // If the request looks like a static asset but wasn't found by express.static, return 404
      if (req.path.match(/\.(png|jpg|jpeg|svg|gif|webp|css|js|woff2?|ttf|eot|ico)$/)) {
        return res.status(404).send("Asset not found");
      }
      res.sendFile(path.join(distPath, "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

startServer();
