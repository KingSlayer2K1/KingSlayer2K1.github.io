import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";
import netlify from "@astrojs/netlify";
import robotsTxt from "astro-robots-txt";
import UnoCSS from "@unocss/astro";
import icon from "astro-icon";

import solidJs from "@astrojs/solid-js";
import { remarkReadingTime } from "./src/lib/remark-reading-time.mjs";

import svelte from "@astrojs/svelte";

// https://astro.build/config
export default defineConfig({
<<<<<<< HEAD
  site: "https://KingSlayer2K1.github.io",
=======
  site: "https://kingslayer2k1.github.io",
>>>>>>> 23e7125774b5663cb5eef2306ca9f08bdab19974
  integrations: [
    sitemap(),
    robotsTxt({
      sitemap: [
        "https://gianmarcocavallo.com/sitemap-index.xml",
        "https://gianmarcocavallo.com/sitemap-0.xml",
      ],
    }),
    solidJs(),
    UnoCSS({ injectReset: true }),
    icon(),
    svelte(),
  ],
  markdown: {
    remarkPlugins: [remarkReadingTime],
  },
  output: "server",
  adapter: netlify({ edgeMiddleware: true }),
  vite: {
    assetsInclude: "**/*.riv",
  },
});
