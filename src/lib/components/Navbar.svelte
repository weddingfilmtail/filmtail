<!-- Navbar.svelte -->
<script>
	import { page } from '$app/stores';
</script>

<nav class="hidden xl:block">
	<ul class="flex items-center gap-16 tracking-widest">
		<li>
			<a href="/" class={$page.url.pathname === '/' ? 'font-medium' : ''}> HOME </a>
		</li>
		<!-- <li>
			<a href="/about" class={$page.url.pathname.startsWith('/about') ? 'font-medium' : ''}>
				ABOUT US
			</a>
		</li> -->
		<li>
			<a href="/portfolio" class={$page.url.pathname.startsWith('/portfolio') ? 'font-medium' : ''}>
				PORTFOLIO
			</a>
		</li>
		<li>
			<a href="/product" class={$page.url.pathname.startsWith('/product') ? 'font-medium' : ''}>
				PRODUCT
			</a>
		</li>
		<li>
			<a href="/contact" class={$page.url.pathname.startsWith('/contact') ? 'font-medium' : ''}>
				CONTACT
			</a>
		</li>
	</ul>
</nav>
