<!-- Navbar.svelte -->
<script>
	import { page } from '$app/stores';
	import Logo from './Logo.svelte';
</script>

<header
	class="flex w-full items-center justify-between py-10 sm:px-36 {$page.url.pathname === '/'
		? 'fixed left-0 top-0 z-10 w-full bg-opacity-0 text-white'
		: ''}"
>
	<Logo />
	<nav>
		<ul class="flex gap-16 text-lg tracking-widest">
			<li>
				<a href="/" class:active={$page.url.pathname === '/'}> HOME </a>
			</li>
			<li>
				<a href="/portfolio" class:active={$page.url.pathname === 'portfolio'}> PORTFOLIO </a>
			</li>
			<li>
				<a href="/product" class:active={$page.url.pathname === 'product'}> PRODUCT </a>
			</li>
			<li>
				<a href="/contact" class:active={$page.url.pathname === 'contact'}> CONTACT </a>
			</li>
		</ul>
	</nav>
</header>

<style lang="postcss">
	/* nav ul li a.active {
		color: #ff3e00;
	} */
</style>
