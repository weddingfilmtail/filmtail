<script>
	import Footer from '$lib/components/Footer.svelte';
	import Header from '$lib/components/Header.svelte';
	import { page } from '$app/stores';
	import '../app.css';
</script>

<Header />
<main class="mx-auto h-screen w-full max-w-6xl {$page.url.pathname !== '/' ? 'pt-14' : ''}">
	<slot />
</main>
<Footer />
