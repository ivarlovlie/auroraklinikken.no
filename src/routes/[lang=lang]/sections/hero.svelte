<script context="module" lang="ts">
	import type { SanityBlockArray } from "$lib/sanity/types/block-array";

	export type HeroModel = {
		title: string;
		content?: SanityBlockArray;
	};
</script>

<script lang="ts">
	import { PortableText } from "@portabletext/svelte";
	export let model: HeroModel;

	let visible = true;

	$: if (!model.title) {
		visible = false;
	} else {
		visible = true;
	}
</script>

{#if visible}
	<h1 class="mb-2 font-serif">{model.title}</h1>
	{#if model.content}
		<PortableText value={model.content} />
	{/if}
{/if}
