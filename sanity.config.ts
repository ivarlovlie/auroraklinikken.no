import { defineConfig } from "sanity";
import { visionTool } from "@sanity/vision";
import schema from "./src/lib/sanity/schemas/default";
import { withDocumentI18nPlugin } from "@sanity/document-internationalization";
import { supportedLanguages } from "./src/lib/sanity/locales";
import { languageFilter } from '@sanity/language-filter'

export default defineConfig({
  name: "default",
  title: "auroraklinikken.no",
  projectId: process.env.SANITY_STUDIO_API_PROJECT_ID ?? "",
  dataset: process.env.SANITY_STUDIO_API_DATASET ?? "",
  plugins: withDocumentI18nPlugin([languageFilter({
    supportedLanguages: supportedLanguages,
  }), (import.meta.env.DEV && visionTool() as any)], {
    languages: supportedLanguages,
    fallbackLanguageSelect: supportedLanguages.find((l) => l.isDefault)?.id as any,
  }),
  // @ts-ignore type mismatch
  schema
});
