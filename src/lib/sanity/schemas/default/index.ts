import contact from "./contact";
import description from "./description";
import faq from "./faq";
import hero from "./hero";
import product from "./product";

export default {
    name: "default-schema",
    types: [
        contact.schema(),
        product.schema(),
        description.schema(),
        faq.schema(),
        hero.schema()
    ]
}