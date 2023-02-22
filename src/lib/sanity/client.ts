import { env } from "$env/dynamic/private";
import { createClient } from "@sanity/client";

export const sanity = createClient({
	projectId: env.SANITY_STUDIO_API_PROJECT_ID,
	dataset: env.SANITY_STUDIO_API_DATASET,
	apiVersion: "2022-03-24",
	useCdn: true,
});
