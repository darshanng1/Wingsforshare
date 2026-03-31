import express from "express";
import { createServer as createViteServer } from "vite";
import path from "path";
import nodemailer from "nodemailer";
import Database from "better-sqlite3";
import dotenv from "dotenv";

dotenv.config();

const db = new Database("leads.db");
db.exec(`
  CREATE TABLE IF NOT EXISTS contact_leads (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL,
    email TEXT NOT NULL,
    phone TEXT NOT NULL,
    service TEXT,
    message TEXT,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP
  )
`);

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
      // 1. Save to Database (SQLite)
      const stmt = db.prepare("INSERT INTO contact_leads (name, email, phone, service, message) VALUES (?, ?, ?, ?, ?)");
      stmt.run(name, email, phone, service, message);

      // 2. Send Email via Nodemailer
      const transporter = nodemailer.createTransport({
        host: process.env.SMTP_HOST,
        port: Number(process.env.SMTP_PORT),
        secure: process.env.SMTP_SECURE === "true",
        auth: {
          user: process.env.SMTP_USER,
          pass: process.env.SMTP_PASS,
        },
      });

      const mailOptions = {
        from: `"WingsForShare Website" <${process.env.SMTP_USER}>`,
        to: "info@wingsforshare.com",
        subject: `New Contact Inquiry from ${name}`,
        text: `
          New inquiry received:
          
          Name: ${name}
          Email: ${email}
          Phone: ${phone}
          Service: ${service || "Not specified"}
          Message: ${message || "No message provided"}
        `,
        html: `
          <div style="font-family: sans-serif; padding: 20px; border: 1px solid #eee; border-radius: 10px;">
            <h2 style="color: #5e3fe0;">New Inquiry Received</h2>
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Phone:</strong> ${phone}</p>
            <p><strong>Service:</strong> ${service || "Not specified"}</p>
            <p><strong>Message:</strong></p>
            <div style="background: #f9f9f9; padding: 15px; border-radius: 5px;">
              ${message || "No message provided"}
            </div>
            <hr style="border: 0; border-top: 1px solid #eee; margin: 20px 0;" />
            <p style="font-size: 12px; color: #888;">This email was sent from the WingsForShare contact form.</p>
          </div>
        `,
      };

      // Only attempt to send if credentials are provided
      if (process.env.SMTP_USER && process.env.SMTP_PASS) {
        await transporter.sendMail(mailOptions);
      } else {
        console.warn("SMTP credentials missing. Email not sent, but lead saved to DB.");
      }

      res.json({ success: true, message: "Message sent successfully!" });
    } catch (error) {
      console.error("Error processing contact form:", error);
      res.status(500).json({ success: false, message: "Internal server error." });
    }
  });

  // Vite middleware for development
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), "dist");
    app.use(express.static(distPath));
    app.get("*", (req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

startServer();
