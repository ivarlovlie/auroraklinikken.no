<script context="module" lang="ts">
	import type { SanityBlockArray } from "$lib/sanity/types/block-array";

	export type DescriptionModel = {
		title: string;
		content?: SanityBlockArray;
	};
</script>

<script lang="ts">
	import { PortableText } from "@portabletext/svelte";
	export let model: DescriptionModel;

	let visible = true;

	$: if (!model.title) {
		visible = false;
	} else {
		visible = true;
	}
</script>

{#if visible}
	<h2 class="mb-3">{model.title}</h2>
	{#if model.content}
		<PortableText value={model.content} />
	{/if}
{/if}
