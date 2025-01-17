<script>
	import Footer from '$lib/components/Footer.svelte';
	import Header from '$lib/components/Header.svelte';
	import { page } from '$app/stores';
	import '../app.css';
</script>

<Header />
<main class="min-h-screen w-full {$page.url.pathname !== '/' ? 'mx-auto max-w-6xl' : ''}">
	<slot />
</main>
<Footer />
