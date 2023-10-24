import { defineConfig } from "vite";
import reactRefresh from "@vitejs/plugin-react-refresh";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [reactRefresh()],
  build: {
    outDir: "build"
  },
  server: {
    strictPort: true,
    hmr: {
      port: 443 // Run the websocket server on the SSL port
    },
    fs: {
      // Allow serving files from the app directory, and our shared
      // PNPM module storage
      allow: ['/rbd', '/app']
    }
  }
});