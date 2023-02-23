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

<style lang="postcss">
	:root {
		/* general */
		--accordion-border-width: 1px;
		/* icon */
		--accordion-icon-size: 20px;
		--accordion-icon-stroke-width: 2px;
	}

	.accordion__item {
		border-style: solid;
		border-color: #ccc;
	}
	.accordion__item:first-child {
		border-top-width: var(--accordion-border-width);
	}

	.accordion__header {
		/* button */
		width: 100%;
		display: flex;
		align-items: center;
		justify-content: space-between;
		text-align: left;
		cursor: pointer;
	}
	.accordion__header .icon .icon__group {
		stroke-width: var(--accordion-icon-stroke-width);
	}

	.accordion__icon-arrow .icon__group,
	.accordion__icon-arrow-v2 .icon__group,
	.accordion__icon-plus .icon__group {
		will-change: transform;
		transform-origin: 50% 50%;
	}

	.accordion__icon-arrow .icon__group > * {
		transform-origin: 10px 14px;
	}

	.accordion__icon-arrow-v2 .icon__group > * {
		transform-origin: 50% 50%;
		stroke-dasharray: 20;
		transform: translateY(4px);
	}
	.accordion__icon-arrow-v2 .icon__group > *:first-child {
		stroke-dashoffset: 10.15;
	}
	.accordion__icon-arrow-v2 .icon__group > *:last-child {
		stroke-dashoffset: 10.15;
	}

	.accordion__icon-plus .icon__group {
		transform: rotate(-90deg);
	}
	.accordion__icon-plus .icon__group > * {
		transform-origin: 50% 50%;
	}
	.accordion__icon-plus .icon__group > *:first-child {
		transform: rotate(-90deg);
	}

	.accordion__item--is-open > .accordion__header > .accordion__icon-arrow .icon__group {
		/* animated arrow icon */
	}
	.accordion__item--is-open > .accordion__header > .accordion__icon-arrow .icon__group > *:first-child {
		transform: translateY(-8px) rotate(-90deg);
	}
	.accordion__item--is-open > .accordion__header > .accordion__icon-arrow .icon__group > *:last-child {
		transform: translateY(-8px) rotate(90deg);
	}
	.accordion__item--is-open > .accordion__header > .accordion__icon-arrow-v2 .icon__group {
		/* animated arrow icon v2 */
		transform: rotate(-90deg);
	}
	.accordion__item--is-open > .accordion__header > .accordion__icon-arrow-v2 .icon__group > *:first-child,
	.accordion__item--is-open > .accordion__header > .accordion__icon-arrow-v2 .icon__group *:last-child {
		stroke-dashoffset: 0;
		transform: translateY(0px);
	}
	.accordion__item--is-open > .accordion__header > .accordion__icon-plus .icon__group {
		/* animated plus icon */
		transform: rotate(0);
	}
	.accordion__item--is-open > .accordion__header > .accordion__icon-plus .icon__group > *:first-child {
		transform: rotate(0);
	}

	.accordion__panel {
		display: none;
		will-change: height;
		transform: translateZ(0px);
	}
	.accordion__item--is-open > .accordion__panel {
		display: block;
	}

	/* animations */
	.accordion[data-animation="on"] .accordion__item--is-open .accordion__panel > * {
		animation: accordion-entry-animation 0.4s cubic-bezier(0.215, 0.61, 0.355, 1);
	}
	.accordion[data-animation="on"] .accordion__icon-arrow .icon__group,
	.accordion[data-animation="on"] .accordion__icon-arrow-v2 .icon__group,
	.accordion[data-animation="on"] .accordion__icon-plus .icon__group {
		transition: transform 0.3s cubic-bezier(0.215, 0.61, 0.355, 1);
	}
	.accordion[data-animation="on"] .accordion__icon-arrow .icon__group > *,
	.accordion[data-animation="on"] .accordion__icon-arrow-v2 .icon__group > *,
	.accordion[data-animation="on"] .accordion__icon-plus .icon__group > * {
		transition: transform 0.3s, stroke-dashoffset 0.3s;
	}

	@keyframes accordion-entry-animation {
		from {
			opacity: 0;
			transform: translateY(-10px);
		}
		to {
			opacity: 1;
			transform: translateY(0px);
		}
	}
</style>
