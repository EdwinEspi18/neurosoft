// @ts-check
import { defineConfig } from "astro/config";

import preact from "@astrojs/preact";

import vercel from "@astrojs/vercel/serverless";

// https://astro.build/config
export default defineConfig({
  integrations: [preact()],
  vite: {
    envPrefix: "EMAIL_",
  },
  output: "server",
  adapter: vercel(),
});
