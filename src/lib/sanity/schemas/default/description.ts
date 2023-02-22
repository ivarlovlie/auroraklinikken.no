import { s } from "sanity-typed-schema-builder";

export default s.document({
  name: "description",
  // @ts-ignore
  i18n: true,
  title: "Description section",
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
      })
    },
  ],
});
