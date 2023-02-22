import { s } from "sanity-typed-schema-builder";

export default s.document({
  name: "hero",
  title: "Hero section",
  // @ts-ignore
  i18n: true,
  fields: [
    {
      title: "Title",
      name: "title",
      type: s.string(),
    },
    {
      title: "Content",
      name: "content",
      type: s.array({
        of: [s.block()]
      }),
    },
    {
      title: "Image",
      name: "image",
      type: s.image(),
      optional: true
    },
  ],
});
