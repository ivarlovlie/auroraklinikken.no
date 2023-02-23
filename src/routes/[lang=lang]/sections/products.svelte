<script context="module" lang="ts">
	import type { SanityBlockArray } from "$lib/sanity/types/block-array";
	export type ProductsModel = {
		products: ProductModel[];
	};

	export type ProductModel = {
		title: string;
		duration: string;
		cost: string;
		description: SanityBlockArray;
		orderLink: string;
	};
</script>

<script lang="ts">
	import CardV4 from "$components/card-v4.svelte";
	import LL from "$i18n/i18n-svelte";

	export let model: ProductsModel;

	let visible = true;
	$: if (!model.products || !model.products.length) {
		visible = false;
	} else {
		visible = true;
	}
</script>

{#if visible}
	<div class="grid gap-5">
		{#each model.products as product}
			<CardV4 description={product.description} title={product.title} class="min-w-[300px] align-bottom">
				<div class="flex flex-wrap justify-end align-bottom">
					<div class="flex flex-wrap items-center mr-4">
						<span class="text-3xl ">{product.cost}</span>
						<span class="mx-2">
							<span class="mx-2">&bull;</span>
							{product.duration}</span
						>
					</div>
					<a href={product.orderLink} class="btn btn--primary">{$LL.goToBookingPage()}</a>
				</div>
			</CardV4>
		{/each}
	</div>
{/if}

<style lang="postcss">
	.grid {
		grid-template-columns: repeat(2, minmax(50%, 1fr));
	}
	@media (max-width: 768px) {
		.grid {
			grid-template-columns: unset;
		}
	}
</style>
