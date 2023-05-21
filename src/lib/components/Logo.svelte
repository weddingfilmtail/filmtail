<script>
	import { page } from '$app/stores';
	import logoBlack from '$lib/assets/logo-black.png';
	import logoWhite from '$lib/assets/logo-white.png';

	$: isHome = $page.url.pathname === '/';
</script>

<a href="/" class="relative">
	{#if isHome}
		<div class="absolute left-10 top-11 -z-10 w-44 bg-black bg-opacity-30 py-2 blur-lg" />
	{/if}
	<img src={isHome ? logoWhite : logoBlack} alt="logo" class="z-50 w-64" />
</a>
