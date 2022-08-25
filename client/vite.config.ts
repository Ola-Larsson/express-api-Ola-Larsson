import { defineConfig } from "vite";

export default defineConfig({
  server: {
    proxy: {
      "/products": "http://localhost:3000",
    },
  },
  build: {
    target: "esnext",
  },
});
