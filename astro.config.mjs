// @ts-check
import { defineConfig } from "astro/config";

import robotsTxt from "astro-robots-txt";

import preact from "@astrojs/preact";

import vercel from "@astrojs/vercel/serverless";

import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  site: "https://neurosoft.vercel.app/",
  integrations: [robotsTxt(), preact(), sitemap()],
  output: "server",
  adapter: vercel(),
});
