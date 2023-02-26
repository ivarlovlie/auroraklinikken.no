<script lang="ts" context="module">
	import type { SanityBlockArray } from "$lib/sanity/types/block-array";
	export type FAQModel = {
		entries: FAQ[];
	};
	export type FAQ = {
		question: string;
		answer: SanityBlockArray;
	};
</script>

<script lang="ts">
	import { PortableText } from "@portabletext/svelte";

	export let model: FAQModel;

	$: visible = (model.entries?.length ?? 0) > 0;
</script>

{#if visible}
	<ul class="accordion">
		{#each model.entries as entry}
			<li class="accordion__item">
				<details>
					<summary class="text-lg lg:text-2xl cursor-pointer py-3 lg:py-5 px-5 lg:px-8">
						{entry.question}
					</summary>
					<div class="pt-1.5 lg:pt-2 px-5 lg:px-8 pb-5 lg:pb-8">
						<PortableText value={entry.answer} />
					</div>
				</details>
			</li>
		{/each}
	</ul>
{/if}

<style>
.accordion__item {
	border-style: solid;
	border-color: #ccc;
}

.accordion__item:first-child {
	border-top-width: 1px;
}
</style>