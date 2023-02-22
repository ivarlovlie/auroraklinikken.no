<script lang="ts">
	import { page } from "$app/stores";
	import "../app.postcss";
	import { locales, baseLocale } from "$i18n/i18n-util";
	import { replaceLocaleInUrl } from "$lib/utils";
	import Header from "./parts/header.svelte";
	import LL from "$i18n/i18n-svelte";
</script>

<svelte:head>
	<title>{$page.data.title ?? "auroraklinikken.no"}</title>
	{#each locales as l}
		<link rel="alternate" hreflang={l} href={`${replaceLocaleInUrl($page.url, l, true)}`} />
	{/each}
	<link rel="alternate" hreflang="x-default" href={`${replaceLocaleInUrl($page.url, baseLocale, true)}`} />
	<meta name="description" content={$page.data.metaDescription ?? $LL.meta.description()}>
</svelte:head>

<Header />
<slot />
