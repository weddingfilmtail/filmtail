<script>
	import { browser } from '$app/environment';
	import Portfolio from '$lib/components/Portfolio.svelte';
	import { fade } from 'svelte/transition';
	export let data;

	let showPortfolio = false;
	let portfolios = data.portfolios;
	let selectedPortfolio = {};

	$: if (browser) {
		showPortfolio
			? (document.body.style.overflow = 'hidden')
			: (document.body.style.overflow = 'auto');
	}
</script>

<div class="h-fit px-32 pb-10 pt-32 xl:mx-14 2xl:mx-36">
	<div class="grid grid-cols-1 gap-x-32 gap-y-24 xl:grid-cols-2">
		{#each portfolios as portfolio, i}
			<button
				class="flex items-center justify-center rounded border"
				on:click={() => {
					selectedPortfolio = portfolio;
					showPortfolio = true;
				}}
				in:fade={{ duration: 300, delay: 200 * i }}
			>
				<img
					src={portfolio.image_key}
					alt="portfolio"
					class="rounded border-2 border-gray-700 shadow-2xl"
				/>
			</button>
		{/each}
	</div>
	{#if showPortfolio}
		<div
			class="fixed left-0 top-0 z-20 flex h-full w-full items-center justify-center bg-black bg-opacity-90"
			on:click={() => (showPortfolio = false)}
			class:translate-x-0={showPortfolio}
			transition:fade
		>
			<Portfolio portfolio={selectedPortfolio} />
		</div>
	{/if}
</div>
