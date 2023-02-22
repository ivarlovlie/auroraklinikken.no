<script lang="ts">
	import { PortableText } from "@portabletext/svelte";
	import type { InputValue } from "@portabletext/svelte/ptTypes";

	export let title: string | undefined;
	export let description: string | undefined | InputValue;
</script>

<div class="card">
	<div class="p-6">
		<span class="text-3xl from-semibold mt-0">{title}</span>
		<p class="mt-3 mx-0 mb-4">
			{#if typeof description === "string"}
				{description}
			{:else}
				<PortableText value={description} />
			{/if}
		</p>
		<slot />
	</div>
</div>

<style lang="postcss">
	.card {
		@apply flex flex-col bg-floor rounded-xl overflow-hidden h-max;
		box-shadow: 0 0 0 1px hsla(230, 13%, 9%, 0.05), 0 0.3px 0.4px hsla(230, 13%, 9%, 0.02),
			0 0.9px 1.5px hsla(230, 13%, 9%, 0.045), 0 3.5px 6px hsla(230, 13%, 9%, 0.09);
	}
</style>
