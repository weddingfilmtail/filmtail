<!-- Navbar.svelte -->
<script>
	import { page } from '$app/stores';
</script>

<nav class="hidden lg:block">
	<ul class="flex items-center gap-16 tracking-widest xl:text-lg">
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

<style lang="postcss">
	/* nav ul li a.active {
		color: #ff3e00;
	} */
</style>
