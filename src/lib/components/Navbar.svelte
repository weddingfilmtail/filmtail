<!-- Navbar.svelte -->
<script>
	import { page } from '$app/stores';
</script>

<nav class="hidden lg:block">
	<ul class="mr-4 flex items-center gap-16 text-sm tracking-widest">
		<li>
			<a href="/" class:active={$page.url.pathname === '/'}> HOME </a>
		</li>
		<!-- <li>
			<a href="/about" class:active={$page.url.pathname === 'about'}> ABOUT US </a>
		</li> -->
		<li>
			<a href="/portfolio" class:active={$page.url.pathname === '/portfolio'}> PORTFOLIO </a>
		</li>
		<li>
			<a href="/product" class:active={$page.url.pathname === '/product'}> PRODUCT </a>
		</li>
		<li>
			<a href="/contact" class:active={$page.url.pathname === '/contact'}> CONTACT </a>
		</li>
	</ul>
</nav>

<style lang="postcss">
	nav ul li a.active {
		font-family: 'futura condensed medium', serif;
	}
</style>
