import { s } from "sanity-typed-schema-builder";

export default s.document({
    name: "faq",
    title: "FAQ section",
    // @ts-ignore
    i18n: true,
    fields: [
        {
            name: "title",
            title: "Question",
            type: s.string(),
        },
        {
            name: "answer",
            title: "Answer",
            type: s.array({
                of: [s.block()]
            }),
        }
    ]
})