import { sanity } from "$lib/sanity/client";
import groq from "groq";
import type { s } from "sanity-typed-schema-builder";
import type { PageServerLoad } from "./$types";
import type { ContactModel } from "./sections/contact.svelte";
import type { HeroModel } from "./sections/hero.svelte";
import type { DescriptionModel } from "./sections/description.svelte";
import type { ProductsModel } from "./sections/products.svelte";
import type { FAQModel } from "./sections/faq.svelte";
import type contactType from "$lib/sanity/schemas/default/contact";
import type heroType from "$lib/sanity/schemas/default/hero";
import type descriptionType from "$lib/sanity/schemas/default/description";
import type productType from "$lib/sanity/schemas/default/product";
import type faqType from "$lib/sanity/schemas/default/faq";

export const load = (async ({ locals }) => {
	const commonParams = {
		lang: locals.locale,
	};
	const contactSection: s.infer<typeof contactType> =
		(await sanity.fetch(groq`*[_type == "contact" && __i18n_lang == $lang][0]`, { ...commonParams })) ?? {};
	const heroSection: s.infer<typeof heroType> =
		(await sanity.fetch(groq`*[_type == "hero" && __i18n_lang == $lang][0]`, { ...commonParams })) ?? {};
	const descriptionSection: s.infer<typeof descriptionType> =
		(await sanity.fetch(groq`*[_type == "description" && __i18n_lang == $lang][0]`, { ...commonParams })) ?? {};
	const products: Array<s.infer<typeof productType>> =
		(await sanity.fetch(groq`*[_type == "product" && __i18n_lang == $lang]`, { ...commonParams })) ?? [];
	const faqs: Array<s.infer<typeof faqType>> =
		(await sanity.fetch(groq`*[_type == "faq" && __i18n_lang == $lang]`, { ...commonParams })) ?? [];

	return {
		contact: {
			phone: contactSection.phone,
			email: contactSection.email,
			phoneHours: contactSection.phoneHours,
			addressLines: contactSection.addressLines?.map((el: string | object) => el) ?? [],
		} as ContactModel,
		hero: {
			title: heroSection.title,
			content: heroSection.content,
		} as HeroModel,
		description: {
			title: descriptionSection.title,
			content: descriptionSection.content,
		} as DescriptionModel,
		products: {
			products: products.map((p) => ({
				cost: p.cost,
				description: p.description,
				duration: p.duration,
				orderLink: p.orderLink,
				title: p.title,
			})),
		} as ProductsModel,
		faqs: {
			entries: faqs.map((e) => ({
				question: e.title,
				answer: e.answer,
			})),
		} as FAQModel,
	};
}) satisfies PageServerLoad;
