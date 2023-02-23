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
	import "./faq-v2.css";
	import { PortableText } from "@portabletext/svelte";
	import loadCodyhouse from "./faq-v2";
	import { onMount } from "svelte";

	export let model: FAQModel;

	$: visible = (model.entries?.length ?? 0) > 0;

	onMount(() => {
		loadCodyhouse();
	});
</script>

{#if visible}
	<ul class="accordion js-accordion" data-animation="on" data-multi-items="on">
		{#each model.entries as entry}
			<li class="accordion__item accordion__item--is-open js-accordion__item">
				<button class="accordion__header py-3 lg:py-5 px-5 lg:px-8 js-tab-focus" type="button">
					<h3 class="text-lg lg:text-2xl">{entry.question}</h3>
					<svg
						class="icon h-[20px] w-[20px] inline-block text-inherit fill-current leading-none shrink-0 accordion__icon-arrow no-js:is-hidden"
						viewBox="0 0 20 20"
						aria-hidden="true"
					>
						<g class="icon__group" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round">
							<line x1="10" y1="14" x2="3" y2="7" />
							<line x1="17" y1="7" x2="10" y2="14" />
						</g>
					</svg>
				</button>

				<div class="accordion__panel pt-1.5 lg:pt-2 px-5 lg:px-8 pb-5 lg:pb-8 js-accordion__panel">
					<div class="leading-normal">
						<PortableText value={entry.answer} />
					</div>
				</div>
			</li>
		{/each}
	</ul>
{/if}
