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
		class="fixed left-0 top-0 z-20 h-full w-full bg-stone-100"
		class:translate-x-0={isMobileMenuOpen}
	>
		<div class="absolute left-0 top-0 flex w-full justify-end px-4 py-6">
			<button class="font-semibold" on:click={handleToggle}>
				<Icon name="x" />
			</button>
		</div>
		<div class="flex h-full flex-col items-center justify-center">
			<ul class="flex flex-col items-center gap-12 text-sm font-bold tracking-widest">
				<li>
					<a href="/" class:active={$page.url.pathname === '/'} on:click={handleToggle}> HOME </a>
				</li>
				<li>
					<a href="/about" class:active={$page.url.pathname === 'about'} on:click={handleToggle}>
						ABOUT US
					</a>
				</li>
				<li>
					<a
						href="/portfolio"
						class:active={$page.url.pathname === 'portfolio'}
						on:click={handleToggle}
					>
						PORTFOLIO
					</a>
				</li>
				<li>
					<a
						href="/product"
						class:active={$page.url.pathname === 'product'}
						on:click={handleToggle}
					>
						PRODUCT
					</a>
				</li>
				<li>
					<a
						href="/contact"
						class:active={$page.url.pathname === 'contact'}
						on:click={handleToggle}
					>
						CONTACT
					</a>
				</li>
			</ul>
		</div>
	</div>
{/if}

<style lang="postcss">
	/* nav ul li a.active {
		color: #ff3e00;
	} */
</style>
