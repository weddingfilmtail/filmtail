<!-- Navbar.svelte -->
<script>
	import { page } from '$app/stores';
	import Logo from './Logo.svelte';
	import Navbar from './Navbar.svelte';
</script>

<header
	class="flex w-full items-center justify-between px-4 py-10 xl:px-36 {$page.url.pathname === '/'
		? 'fixed left-0 top-0 z-10 bg-opacity-0 text-white'
		: ''}"
>
	<Logo />
	<Navbar />
</header>

<style lang="postcss">
	/* nav ul li a.active {
		color: #ff3e00;
	} */
</style>
