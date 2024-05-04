import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
const def = defineConfig({
  plugins: [react()],
});
export default def;
