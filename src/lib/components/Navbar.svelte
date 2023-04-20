<!-- Navbar.svelte -->
<script>
	import { page } from '$app/stores';
	import Logo from './Logo.svelte';
</script>

<header class="flex items-center justify-between px-36 py-10">
	<Logo />
	<nav>
		<ul class="flex gap-16 text-lg font-semibold">
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
