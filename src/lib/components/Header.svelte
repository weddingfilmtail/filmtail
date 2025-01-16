<script>
	import { page } from '$app/stores';
	import Hamberger from './Hamberger.svelte';
	import Icon from './Icon.svelte';
	import Logo from './Logo.svelte';
	import Navbar from './Navbar.svelte';

	let isMobileMenuOpen = false;

	function handleToggle() {
		isMobileMenuOpen = !isMobileMenuOpen;
		document.body.style.overflow = 'auto';
	}

	$: isMobileMenuOpen && (document.body.style.overflow = 'hidden');
</script>

<div class="fixed left-0 right-0 top-0 z-50 bg-white">
	<header
		class="mx-auto flex h-14 w-full max-w-6xl items-center justify-between px-4 xl:h-16 xl:px-0"
	>
		<Logo />
		<Navbar />
		<Hamberger on:toggle={handleToggle} />
	</header>
</div>

{#if isMobileMenuOpen}
	<div
		class="fixed left-0 top-0 z-20 h-full w-full bg-stone-100"
		class:translate-x-0={isMobileMenuOpen}
	>
		<div class="absolute left-0 top-0 flex w-full justify-end px-4 py-6">
			<button on:click={handleToggle}>
				<Icon name="x" />
			</button>
		</div>
		<div class="flex h-full flex-col items-center justify-center">
			<ul class="flex flex-col items-center gap-12 tracking-widest">
				<li>
					<a
						href="/"
						class={$page.url.pathname === '/' ? 'font-medium' : ''}
						on:click={handleToggle}
					>
						HOME
					</a>
				</li>
				<!-- <li>
					<a
						href="/about"
						class={$page.url.pathname.startsWith('/about') ? 'font-medium' : ''}
						on:click={handleToggle}
					>
						ABOUT US
					</a>
				</li> -->
				<li>
					<a
						href="/portfolio"
						class={$page.url.pathname.startsWith('/portfolio') ? 'font-medium' : ''}
						on:click={handleToggle}
					>
						PORTFOLIO
					</a>
				</li>
				<li>
					<a
						href="/product"
						class={$page.url.pathname.startsWith('/product') ? 'font-medium' : ''}
						on:click={handleToggle}
					>
						PRODUCT
					</a>
				</li>
				<li>
					<a
						href="/contact"
						class={$page.url.pathname.startsWith('/contact') ? 'font-medium' : ''}
						on:click={handleToggle}
					>
						CONTACT
					</a>
				</li>
			</ul>
		</div>
	</div>
{/if}
