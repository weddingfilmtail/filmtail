<script>
	import { page } from '$app/stores';
	import { fade } from 'svelte/transition';
	import Hamberger from './Hamberger.svelte';
	import Logo from './Logo.svelte';
	import Navbar from './Navbar.svelte';

	let isMobileMenuOpen = false;

	function handleToggle() {
		isMobileMenuOpen = !isMobileMenuOpen;
	}
</script>

<header
	class="flex w-full items-center justify-between xl:px-36 xl:py-4 {$page.url.pathname === '/'
		? 'absolute left-0 top-0 z-10 bg-opacity-0 text-white'
		: ''}"
>
	<Logo />
	<Navbar />
	<Hamberger on:toggle={handleToggle} />
</header>

{#if isMobileMenuOpen}
	<div
		class="fixed left-0 top-0 z-20 h-full w-full"
		class:translate-x-0={isMobileMenuOpen}
		transition:fade
	>
		<div class="flex flex-col justify-center pt-4">
			<button class="font-semibold" on:click={handleToggle}>Close</button>
		</div>
	</div>
{/if}

<style lang="postcss">
	/* nav ul li a.active {
		color: #ff3e00;
	} */
</style>
