import react from '@vitejs/plugin-react';
import path from 'path';
import { defineConfig } from 'vite';
import tailwindcss from '@tailwindcss/vite'; // 👈 ADD THIS

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(), // 👈 ADD THIS
  ],

  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      '@components': path.resolve(__dirname, './src/components'),
    },
  },

  server: {
    hmr: false,
  },

  build: {
    reportCompressedSize: false,
    chunkSizeWarningLimit: 1000,
  },
});