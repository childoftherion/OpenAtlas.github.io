// @ts-check
import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";


// Production: https://openatlas.wiki/ (custom domain on GitHub Pages).
// https://docs.astro.build/en/guides/deploy/github/
export default defineConfig({
  site: "https://openatlas.wiki",
  base: "/",
  output: "static",
  publicDir: "public",
  integrations: [
    sitemap({
      // Global defaults applied to all pages
      changefreq: "weekly",
      priority: 0.8,
    }),
  ],
});
