import { defineConfig } from "vite";
import { VitePluginRadar } from "vite-plugin-radar";
import react from "@vitejs/plugin-react";
import eslint from "vite-plugin-eslint";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    eslint(),
    VitePluginRadar({
      /**
       * enable or disable scripts injection in development
       * default: false
       */
      enableDev: true,

      // Google Tag Manager (multiple tag can be set with an array)
      gtm: [
        {
          id: "GTM-K6GTDJXN",

          // You can set custom source for gtm script and noscript
          gtmBase: "https://www.custom.com/gtm.js",
          nsBase: "https://www.custom.com/ns.html",
          // You can optionally define the environment for the gtm.
          environment: {
            auth: "9xHfIzCGlNKU4rkf1Kg2Qw",
            preview: "env-3",
          },
        },
      ],
    }),
  ],
});
