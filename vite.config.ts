import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
import apiRoutes from "vite-plugin-api-routes";

export default defineConfig({
  server: {
    port: 3000,
  },
  plugins: [
    react(),
    apiRoutes()
  ],
});
