import { defineConfig, fontProviders } from "astro/config";
import sanity from "@sanity/astro";
import sitemap from "@astrojs/sitemap";
import "dotenv/config";


// In dev, show drafts so you can preview unpublished content.
// In production builds, only show published documents.
const isDev = process.env.NODE_ENV !== "production";

const sanityOptions = {
  projectId: process.env.SANITY_PROJECT_ID,
  dataset: "production",
  apiVersion: "2026-09-07",
  token: process.env.SANITY_READ_TOKEN,
  useCdn: false,
  perspective: isDev ? "previewDrafts" : "published",
};

export default defineConfig({
  site: "https://afenwick.com",
  image: {
    domains: ["cdn.sanity.io"],
  },
  integrations: [
    sanity(sanityOptions),
    sitemap(),
  ],
  output: "static",
  fonts: [
    {
      provider: fontProviders.npm(),
      name: "Inter",
      cssVariable: "--font-inter",
    },
  ],
});
