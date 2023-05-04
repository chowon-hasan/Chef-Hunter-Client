import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
});
// import { defineConfig } from "vite";
// import react from "@vitejs/plugin-react";
// import json from "@rollup/plugin-json"; // import the rollup-plugin-json plugin

// export default defineConfig({
//   plugins: [
//     react(),
//     json(), // add the plugin to the plugins array
//   ],
// });
