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
	<div class="relative z-[1] py-8 lg:py-12">
		<div class="mb-8 lg:mb-12">
			<h2>Questions &amp; Answers</h2>
		</div>
		<ol class="text-points grid grid-cols-12 gap-y-8 lg:gap-12">
			{#each model.entries as entry}
				<li class="text-points__item col-span-12 lg:col-span-6">
					<div class="text-points__text">
						<h4 class="text-xl mb-1">{entry.question}</h4>
						<div class="text-sm text-gray-500">
							<PortableText value={entry.answer} />
						</div>
					</div>
				</li>
			{/each}
		</ol>
	</div>
{/if}
