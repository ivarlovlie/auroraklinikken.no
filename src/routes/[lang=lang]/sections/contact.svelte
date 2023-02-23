<script context="module" lang="ts">
	export type ContactModel = {
		addressLines: Array<string>;
		email?: string;
		phone?: string;
		phoneHours?: string;
	};
</script>

<script lang="ts">
	import LL from "$i18n/i18n-svelte";

	export let model: ContactModel;

	$: visible = model.addressLines;
</script>

{#if visible}
	<dl class="details-list details-list--rows">
		{#if (model.addressLines?.length ?? 0) > 0}
			<div class="details-list__item py-2 lg:py-4">
				<dt class="font-bold mb-1.5 lg:mb-2">{$LL.contact.addressTitle()}</dt>
				<dd class="leading-snug">
					{#each model.addressLines as line}
						{line}<br />
					{/each}
				</dd>
			</div>
		{/if}
		{#if model.email}
			<div class="details-list__item py-2 lg:py-4">
				<dt class="font-bold mb-1.5 lg:mb-2">{$LL.contact.emailTitle()}</dt>
				<dd>
					<a href="mailto:{model.email}" class="underline text-primary">{model.email}</a>
				</dd>
			</div>
		{/if}
		{#if model.phone}
			<div class="details-list__item py-2 lg:py-4">
				<dt class="font-bold mb-1.5 lg:mb-2">{$LL.contact.phoneTitle()}</dt>
				<dd class="leading-snug">
					<p><a href="tel:{model.phone}" class="underline text-primary-light">{model.phone}</a></p>
					{#if model.phoneHours}
						<p class="text-contrast-medium">{model.phoneHours}</p>
					{/if}
				</dd>
			</div>
		{/if}
	</dl>
{/if}

<style lang="postcss">
	dl {
		@apply bg-floor rounded-md overflow-hidden p-5;
		box-shadow: 0 0 0 1px hsla(230, 13%, 9%, 0.05), 0 0.3px 0.4px hsla(230, 13%, 9%, 0.02),
			0 0.9px 1.5px hsla(230, 13%, 9%, 0.045), 0 3.5px 6px hsla(230, 13%, 9%, 0.09);
	}
</style>
