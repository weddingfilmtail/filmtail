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

<div class="pt-52 xl:pt-32">
	<div class="grid grid-cols-1 gap-y-52 xl:gap-y-24">
		{#each portfolios as portfolio, i}
			<button
				on:click={() => {
					selectedPortfolio = portfolio;
					showPortfolio = true;
				}}
				in:fade={{ duration: 300, delay: 200 * i }}
			>
				<img src={portfolio.image_key} alt={portfolio.title} class="h-full w-full object-cover" />
			</button>
		{/each}
	</div>
	{#if showPortfolio}
		<div
			class="fixed left-0 top-0 z-50 flex h-full w-full items-center justify-center bg-black bg-opacity-90"
			on:click={() => (showPortfolio = false)}
			class:translate-x-0={showPortfolio}
			transition:fade
		>
			<Portfolio portfolio={selectedPortfolio} />
		</div>
	{/if}
</div>
