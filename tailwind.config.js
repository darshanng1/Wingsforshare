/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        bg: "var(--bg)",
        "text-primary": "var(--text-primary)",
        "text-secondary": "var(--text-secondary)",
        "card-bg": "var(--card-bg)",
        "card-border": "var(--card-border)",
        accent: "#10b981",
      },
      fontFamily: {
        sans: ["Inter", "ui-sans-serif", "system-ui"],
        display: ["Space Grotesk", "ui-sans-serif", "system-ui"],
      },
    },
  },
  plugins: [],
};