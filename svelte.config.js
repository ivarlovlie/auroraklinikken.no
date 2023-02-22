import preprocess from "svelte-preprocess";
import adapter from "@sveltejs/adapter-auto";
import { vitePreprocess } from "@sveltejs/kit/vite";

/** @type {import('@sveltejs/kit').Config} */
const config = {
	preprocess: [
		vitePreprocess(),
		preprocess({
			postcss: true,
		}),
	],
	kit: {
		adapter: adapter(),
		alias: {
			$lib: "./src/lib",
			$components: "./src/components",
			$i18n: "./src/i18n",
		},
	},
};

export default config;
