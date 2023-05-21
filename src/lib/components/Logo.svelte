<script>
	import { page } from '$app/stores';
	export let filename = 'logo-black.png';
</script>

<a href="/" class="relative">
	{#if $page.url.pathname === '/'}
		<div class="absolute left-10 top-11 -z-10 w-44 bg-black bg-opacity-30 py-2 blur-lg" />
	{/if}
	<img src={`/images/${filename}`} alt="logo" class="z-50 w-64" />
</a>
