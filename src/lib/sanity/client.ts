import { env } from "$env/dynamic/private";
import { createClient } from "@sanity/client";
import imageUrlBuilder from '@sanity/image-url'

export const sanity = createClient({
	projectId: env.SANITY_STUDIO_API_PROJECT_ID,
	dataset: env.SANITY_STUDIO_API_DATASET,
	apiVersion: "2022-03-24",
	useCdn: true,
});

const urlBuilder = imageUrlBuilder(sanity);

export function imageUrl(source: any) {
	return urlBuilder.image(source);
}