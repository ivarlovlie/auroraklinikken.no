import { s } from "sanity-typed-schema-builder";

export default s.document({
    name: "product",
    title: "Products",
    // @ts-ignore
    i18n: true,
    fields: [
        {
            name: "title",
            title: "Title",
            type: s.string(),
        },
        {
            name: "duration",
            title: "Duration",
            type: s.string()
        },
        {
            name: "cost",
            title: "Cost",
            type: s.string()
        },
        {
            name: "description",
            title: "Description",
            type: s.array({
                of: [s.block()]
            })
        },
        {
            name: "orderLink",
            title: "Link to booking",
            type: s.url()
        },
    ],
});