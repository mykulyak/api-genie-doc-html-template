import { defineConfig } from 'astro/config';
import icon from "astro-icon";
import path from 'path';
import tailwind from "@astrojs/tailwind";
import url from 'url';

// https://astro.build/config
export default defineConfig({
  integrations: [
    tailwind(),
    icon({
      iconDir: path.join(path.dirname(url.fileURLToPath(import.meta.url)), 'src', 'icons'),
    }),
  ],
});