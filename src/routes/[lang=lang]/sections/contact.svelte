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

	let visible = true;

	$: if (!model.addressLines) {
		visible = false;
	} else {
		visible = true;
	}
</script>

{#if visible}
	<section class="contact relative z-1">
		<div class="mx-auto">
			<div class="mb-8 lg:mb-12">
				<h2>{$LL.contact.title()}</h2>
			</div>

			<div class="grid grid-cols-12 gap-8 lg:gap-12">
				<div class="col-span-12 lg:col-span-6">
					<dl class="details-list details-list--rows">
						{#if (model.addressLines?.length ?? 0) > 0}
							<div class="details-list__item py-5 lg:py-8 lg:flex lg:justify-between">
								<dt class="font-bold mb-1.5 lg:mb-2 lg:mb-0">{$LL.contact.addressTitle()}</dt>
								<dd class="leading-snug lg:text-right">
									{#each model.addressLines as line}
										{line}<br />
									{/each}
								</dd>
							</div>
						{/if}
						{#if model.email}
							<div class="details-list__item py-5 lg:py-8 lg:flex lg:justify-between">
								<dt class="font-bold mb-1.5 lg:mb-2 lg:mb-0">{$LL.contact.emailTitle()}</dt>
								<dd>
									<a href="mailto:webmaster@example.com">{model.email}</a>
								</dd>
							</div>
						{/if}
						{#if model.phone}
							<div class="details-list__item py-5 lg:py-8 lg:flex lg:justify-between">
								<dt class="font-bold mb-1.5 lg:mb-2 lg:mb-0">{$LL.contact.phoneTitle()}</dt>
								<dd class="leading-snug lg:text-right">
									<p><a href="tel:+44 7656 6455">{model.phone}</a></p>
									{#if model.phoneHours}
										<p class="text-contrast-medium">{model.phoneHours}</p>
									{/if}
								</dd>
							</div>
						{/if}
					</dl>
				</div>
				<div class="rounded col-span-12 lg:col-span-6 lg:h-auto lg:pb-0" />
			</div>
		</div>
	</section>
{/if}
