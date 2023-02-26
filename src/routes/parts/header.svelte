<script lang="ts">
	import LocaleSwitcher from "$components/locale-switcher.svelte";
	import Navigator, { type NavigatorModel } from "$components/navigator.svelte";
	import LL from "$i18n/i18n-svelte";

	const navigatorModel: NavigatorModel = {
		entries: [
			{
				name: $LL.ourServices(),
				href: "#our-services",
			},
			{
				name: $LL.aboutUs(),
				href: "#about-us",
			},
			{
				name: $LL.contact.title(),
				href: "#contact-us",
			},
			{
				name: $LL.faq.title(),
				href: "#faq",
			},
		],
	};
</script>

<header class="flex w-full">
	<div class="flex justify-end flex-row select-none bg-white fixed right-0 top-0 z-30">
		<LocaleSwitcher />
		<Navigator model={navigatorModel} />
	</div>
</header>
