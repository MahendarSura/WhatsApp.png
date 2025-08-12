import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    // Vite handles SPA fallback automatically, so no need for historyApiFallback
    port: 3000,
    open: true,
  },
  build: {
    outDir: 'dist',
  },
});
