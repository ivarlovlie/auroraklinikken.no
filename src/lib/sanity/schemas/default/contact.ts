import { s } from "sanity-typed-schema-builder";

export default s.document({
  name: "contact",
  title: "Contact section",
  // @ts-ignore
  i18n: true,
  fields: [
    {
      title: "Address lines",
      name: "addressLines", 
      type: s.array({
        of: [s.string()]
      }),
      optional: true
    },
    {
      title: "Email",
      name: "email",
      type: s.string(),
      optional: true,
    },
    {
      title: "Phone",
      name: "phone",
      type: s.string(),
      optional: true,
    },
    {
      title: "Phone hours",
      name: "phoneHours",
      type: s.string(),
      optional: true,
    }
  ],
});