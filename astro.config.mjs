// @ts-check
import { defineConfig } from "astro/config";

import robotsTxt from "astro-robots-txt";

import preact from "@astrojs/preact";

import vercel from "@astrojs/vercel/serverless";

// https://astro.build/config
export default defineConfig({
  integrations: [robotsTxt(), preact()],

  vite: {
    envPrefix: "EMAIL_",
  },

  output: "server",
  adapter: vercel(),
});