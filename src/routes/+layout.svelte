<script>
	import Footer from '$lib/components/Footer.svelte';
	import Header from '$lib/components/Header.svelte';
	import { page } from '$app/stores';
	import '../app.css';
	import { injectAnalytics } from '@vercel/analytics/sveltekit';
	import { dev } from '$app/environment';
	import { injectSpeedInsights } from '@vercel/speed-insights/sveltekit';

	let lastTouchEnd = 0;

	const handleTouchEnd = (event) => {
		const now = new Date().getTime();
		if (now - lastTouchEnd <= 500) {
			event.preventDefault();
		}
		lastTouchEnd = now;
	};

	injectAnalytics({ mode: dev ? 'development' : 'production' });
	injectSpeedInsights();
</script>

<Header />
<main
	class="min-h-screen w-full {$page.url.pathname !== '/' ? 'mx-auto max-w-6xl' : ''}"
	on:touchend={handleTouchEnd}
>
	<slot />
</main>
<Footer />
