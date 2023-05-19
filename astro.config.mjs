import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";
import node from "@astrojs/node";

// https://astro.build/config
export default defineConfig({
  site: "https://openphones.global",
  integrations: [sitemap()],
  output: "server",
  adapter: node({
    mode: "middleware"
  }),
  compressHTML: true
});