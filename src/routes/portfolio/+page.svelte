<script>
	import { browser } from '$app/environment';
	import Portfolio from '$lib/components/Portfolio.svelte';
	import { fade } from 'svelte/transition';
	import { onMount } from 'svelte';

	export let data;

	let showPortfolio = false;
	const { ceremonyPortfolios, freePortfolios, remainings } = data;
	let selectedPortfolio = {};

	onMount(() => {
		setTimeout(() => {
			window.scroll({ top: -1, left: 0, behavior: 'smooth' });
		}, 10);
	});

	$: if (browser) {
		showPortfolio
			? (document.body.style.overflow = 'hidden')
			: (document.body.style.overflow = 'auto');
	}
</script>

<div class="pt-32 xl:pt-32">
	<p class="text-center text-xs">웨딩 본식 영상</p>
	<div class="mt-20 grid grid-cols-1 gap-y-52 xl:gap-y-24">
		{#each ceremonyPortfolios as portfolio, i}
			<button
				on:click={() => {
					selectedPortfolio = portfolio;
					showPortfolio = true;
				}}
				in:fade={{ duration: 300, delay: 200 * i }}
			>
				<p class="text-center text-xs">{new Date(portfolio.created_at).getFullYear()}</p>
				<img src={portfolio.image_key} alt={portfolio.title} class="h-full w-full object-cover" />
			</button>
		{/each}
	</div>

	<p class="mt-36 text-center text-xs xl:mt-32">프리 웨딩/식전 영상</p>

	<div class="mt-20 grid grid-cols-1 gap-y-52 xl:gap-y-24">
		{#each freePortfolios as portfolio, i}
			<button
				on:click={() => {
					selectedPortfolio = portfolio;
					showPortfolio = true;
				}}
				in:fade={{ duration: 300, delay: 200 * i }}
			>
				<p class="text-center text-xs">{new Date(portfolio.created_at).getFullYear()}</p>
				<img
					src={portfolio.image_key}
					alt={portfolio.title}
					class="mt-4 h-full w-full object-cover xl:mt-10"
				/>
			</button>
		{/each}
	</div>

	<p class="mt-44 text-center text-xs xl:mt-52">~ 2023</p>

	<div class="mt-10 grid grid-cols-2 gap-3 px-3 md:gap-20 lg:grid-cols-3">
		{#each remainings as portfolio, i}
			<button
				on:click={() => {
					selectedPortfolio = portfolio;
					showPortfolio = true;
				}}
				in:fade={{ duration: 300, delay: 200 * i }}
			>
				<div class="min-h-60 bg-gray-200">
					<img src={portfolio.image_key} alt={portfolio.title} class="h-full w-auto object-cover" />
				</div>
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
