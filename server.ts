import express from "express";
import { createServer as createViteServer } from "vite";
import path from "path";

async function startServer() {
  const app = express();
  const PORT = 3000;

  app.use(express.json());

  // ✅ CONTACT API (no database for now)
  app.post("/api/contact", async (req, res) => {
    const { name, email, phone, service, message } = req.body;

    if (!name || !email || !phone) {
      return res.status(400).json({
        success: false,
        message: "Missing required fields",
      });
    }

    // 👉 For now just log (you can connect Firebase later)
    console.log("📩 New Lead Received:");
    console.log({
      name,
      email,
      phone,
      service,
      message,
    });

    return res.json({
      success: true,
      message: "Form submitted successfully",
    });
  });

  const isProd = process.env.NODE_ENV === "production";

  if (!isProd) {
    // ✅ DEV MODE (Vite middleware)
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });

    app.use(vite.middlewares);
  } else {
    // ✅ PRODUCTION MODE

    const distPath = path.join(process.cwd(), "dist");
    const publicPath = path.join(process.cwd(), "public");

    // 🔥 Serve public assets (logo etc.)
    app.use(express.static(publicPath));

    // 🔥 Serve built frontend
    app.use(express.static(distPath, { index: false }));

    // 🔥 SPA fallback
    app.get("*", (req, res) => {
      if (
        req.path.match(
          /\.(png|jpg|jpeg|svg|gif|webp|css|js|woff2?|ttf|eot|ico)$/
        )
      ) {
        return res.status(404).send("Asset not found");
      }

      res.sendFile(path.join(distPath, "index.html"));
    });
  }

  app.listen(PORT, () => {
    console.log(`🚀 Server running on http://localhost:${PORT}`);
  });
}

startServer();