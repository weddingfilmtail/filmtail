<script>
	import { browser } from '$app/environment';
	import { page } from '$app/stores';
	import logoBlack from '$lib/assets/logo-black.png';
	import logoWhite from '$lib/assets/logo-white.png';

	export let isMobile = false;

	$: isHome = $page.url.pathname === '/';
	$: isMobile = browser && window.innerWidth < 1024;
</script>

<a href="/" class="relative">
	{#if isHome}
		<div
			class="absolute {isMobile
				? 'left-6 top-7 w-32'
				: 'left-10 top-11 w-44'} -z-10 bg-black bg-opacity-30 py-2 blur-lg"
		/>
	{/if}
	<img src={isHome ? logoWhite : logoBlack} alt="logo" class="z-50 {isMobile ? 'w-44' : 'w-64'}" />
</a>
