import react from '@vitejs/plugin-react';
import path from 'path';
import { defineConfig } from 'vite';

export default defineConfig({
  plugins: [react()],

  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      '@components': path.resolve(__dirname, './src/components'),
    },
  },

  server: {
    hmr: false,
  },

  // 🔥 Fix build freeze + stability
  build: {
    reportCompressedSize: false,
    chunkSizeWarningLimit: 1000,
  },
});
