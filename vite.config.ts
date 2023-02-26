import { sveltekit } from "@sveltejs/kit/vite";
import { defineConfig } from "vitest/config";
import svelteSVG from "vite-plugin-svelte-svg";

export default defineConfig({
	plugins: [sveltekit(), svelteSVG()],
	test: {
		include: ["src/**/*.{test,spec}.{js,ts}"],
	},
});
