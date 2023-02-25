<script lang="ts" context="module">
	import type { SanityBlockArray } from "$lib/sanity/types/block-array";


    export type AboutModel = {
        description: SanityBlockArray,
        imageUrl: string,
        imageAlt: string
    };
</script>
<script lang="ts">
	import { PortableText } from "@portabletext/svelte";

    export let model:AboutModel;
</script>

<div class="wrapper gap-3">
    {#if model.description}
        <PortableText value={model.description} />
    {/if}
    {#if model.imageUrl}
        <img src="{model.imageUrl}" alt="{model.imageAlt ?? '...'}">
    {/if}
</div>

<style lang="postcss">
    .wrapper {
		display: grid;
		grid-template-columns: repeat(2, minmax(50%, 1fr));
	}
	@media (max-width: 768px) {
		.wrapper {
			grid-template-columns: unset;
		}
	}
</style>