import express from "express";
import { createServer as createViteServer } from "vite";
import path from "path";
import Database from "better-sqlite3";

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

      // SMTP logic removed as per request to remove environment variables.
      console.log(`Lead saved: ${name} (${email})`);

      res.json({ success: true, message: "Message sent successfully!" });
    } catch (error) {
      console.error("Error processing contact form:", error);
      res.status(500).json({ success: false, message: "Internal server error." });
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
