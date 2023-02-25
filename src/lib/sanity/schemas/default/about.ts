import { s } from "sanity-typed-schema-builder";

export default s.document({
    name: "about",
    title: "About section",
    // @ts-ignore
    i18n: true,
    fields: [
        {
            title: "Description",
            name: "description",
            type: s.array({
                of: [s.block()]
            }),
            optional: false
        },
        {
            title: "Image",
            name: "image",
            type: s.image(),
            optional: true,
            fields: [
                {
                    name: "imageAlt",
                    title: "Alternative text",
                    type: "string"
                }
            ]
        }
    ],
});