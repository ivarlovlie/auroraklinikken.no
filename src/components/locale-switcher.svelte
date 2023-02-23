<script lang="ts">
	import { page } from "$app/stores";
	import { locale } from "$i18n/i18n-svelte";
	import { replaceLocaleInUrl } from "$lib/utils";
</script>

{#if $locale == "en"}
	<a href={replaceLocaleInUrl($page.url, "nb")} data-sveltekit-reload>Norsk Bokmål</a>
{:else if $locale == "nb"}
	<a href={replaceLocaleInUrl($page.url, "en")} data-sveltekit-reload>English</a>
{/if}
