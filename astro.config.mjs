import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import react from "@astrojs/react";
import auth from "auth-astro";

import netlify from "@astrojs/netlify";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), react(), auth()],
  output: "server",
  adapter: netlify(),
  i18n: {
    defaultLocale: "fr",
    locales: ["fr", "en", {
      path: "french",
      codes: ["fr", "fr-BR", "fr-CA"]
    }],
    routing: {
      prefixDefaultLocale: false
    }
  }
});