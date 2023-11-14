import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import federation from "@originjs/vite-plugin-federation";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    federation({
      name: "Microfrontend-concept-root",
      remotes: {
        mfConceptRemoteAppTest:
          "http://staging.smandes.gov.ar/parcelTest/assets/remoteEntry.js",
      },
      shared: ["react", "react-dom"],
    }),
  ],
});
