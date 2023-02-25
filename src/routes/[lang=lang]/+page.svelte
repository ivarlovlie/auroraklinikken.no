<script lang="ts">
	import Contact from "./sections/contact.svelte";
	import Hero from "./sections/hero.svelte";
	import Description from "./sections/description.svelte";
	import Products from "./sections/products.svelte";
	import FAQ from "./sections/faq.svelte";
	import FAQV2 from "./sections/faq-v2.svelte";
	import About from "./sections/about.svelte";
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
		<h2 class="mb-3">{$LL.aboutUs()}</h2>
		<About model={data.about} />
	</section>
	<section class="flex gap-5 flex-col lg:flex-row">
		<div>
			<h2 class="mb-3">{$LL.contact.title()}</h2>
			<Contact model={data.contact} />
		</div>
		<div class="w-full">
			<h2 class="mb-3">{$LL.faq.title()}</h2>
			<FAQV2 model={data.faqs} />
		</div>
	</section>
	<section>
		<h2 class="mb-5">{$LL.faq.title()}</h2>
		<FAQ model={data.faqs} />
	</section>
</main>

<style>
	main {
		margin: 0 5vw 2vh 5vw;
		display: flex;
		flex-direction: column;
	}

	main section {
		margin-bottom: 7vh;
	}

	#hero {
		display: grid;
		grid-template-columns: repeat(2, minmax(50%, 1fr));
	}
	@media (max-width: 768px) {
		#hero {
			grid-template-columns: unset;
		}
	}
	#hero .hero {
		padding: 3.2vw;
	}
</style>
