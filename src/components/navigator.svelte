<script lang="ts" context="module">
	export type NavigatorModel = {
		entries: NavigationEntry[];
	};
	export type NavigationEntry = {
		name: string;
		href: string;
	};
</script>

<script lang="ts">
	import { browser } from "$app/environment";

	import LL from "$i18n/i18n-svelte";
	import { onDestroy } from "svelte";
	export let model: NavigatorModel;

	$: visible = model.entries?.length > 0;

	let open: boolean = false;

	function handleClick({ target }: Event) {
		if (target instanceof HTMLElement && !target.closest("[data-name='navigator']")) {
			open = false;
		}
	}

	if (browser) {
		$: if (open) {
			document.addEventListener("click", handleClick);
		} else {
			document.removeEventListener("click", handleClick);
		}

		onDestroy(() => {
			document.removeEventListener("click", handleClick);
		});
	}
</script>

{#if visible}
	<details bind:open data-name="navigator">
		<summary class="font-light">{$LL.menu()}</summary>
		<ol class="list-none">
			{#each model.entries as entry}
				<li>
					<a href={entry.href}>{entry.name}</a>
				</li>
			{/each}
		</ol>
	</details>
{/if}

<style lang="postcss">
	details {
		direction: rtl;
		padding: 5px;
		background: #f2dfe0;
		color: #682c2f;

		summary {
			cursor: pointer;
			width: fit-content;

			&::marker {
				content: "";
			}
		}
	}
</style>
