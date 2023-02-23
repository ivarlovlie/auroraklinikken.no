<script lang="ts">
	import Contact from "./sections/contact.svelte";
	import Hero from "./sections/hero.svelte";
	import Description from "./sections/description.svelte";
	import Products from "./sections/products.svelte";
	import FAQ from "./sections/faq.svelte";
	import LL from "$i18n/i18n-svelte";

	import type { PageData } from "./$types";

	export let data: PageData;
</script>

<main>
	<section id="hero">
		<div class="hero">
			<Hero model={data.hero} />
		</div>
		<div>
			<Description model={data.description} />
		</div>
	</section>
	<section>
		<h2 class="mb-3">{$LL.ourServices()}</h2>
		<Products model={data.products} />
	</section>
	<section>
		<FAQ model={data.faqs} />
	</section>
	<section>
		<Contact model={data.contact} />
	</section>
</main>

<style>
	main {
		margin: 0 5vw 2vh 5vw;
		display: flex;
		flex-direction: column;
	}
	main section {
		margin-bottom: 2vh;
	}

	#hero {
		display: grid;
		grid-template-columns: repeat(2, 50%);
		justify-content: space-between;
	}

	#hero .hero {
		padding: 3.2vw;
	}
</style>
