<script>
	import Icon from '$lib/components/Icon.svelte';
	import { fade } from 'svelte/transition';
	import { browser } from '$app/environment';
	import { onMount } from 'svelte';
	import { supabase } from '$lib/supabase.js';

	let images;
	let url;
	let index = 0;
	let intervalId = 0;
	let isMobile = false;

	const startInterval = () => {
		intervalId = setInterval(() => {
			if (index === images.length - 1) {
				index = 0;
			} else {
				index++;
			}

			url = images[index].publicUrl;
		}, 5000);
	};

	const fetchImages = async (platform) => {
		const images = Array.from({ length: 10 }, (_, index) => {
			const number = `${index + 1}`;
			return `${platform}${number.padStart(2, '0')}.jpeg`;
		});

		const promises = images.map((image) => {
			const { data: publicUrl } = supabase.storage.from(`images/${platform}`).getPublicUrl(image);
			return publicUrl;
		});

		const urls = await Promise.all(promises);

		return urls;
	};

	onMount(async () => {
		if (isMobile) {
			images = await fetchImages('mobile');
			window.scrollTo({
				top: 38,
				behavior: 'smooth'
			});
		} else {
			images = await fetchImages('pc');
		}

		url = images[index].publicUrl;

		startInterval();
	});

	$: isMobile = browser && window.innerWidth < 1024;
</script>

<div class="relative bg-black">
	{#key url}
		<img
			class="h-screen w-auto object-cover pt-14 xl:pt-16"
			alt="wedding"
			src={url}
			in:fade={{ duration: 300 }}
		/>
	{/key}
	{#if images}
		<div
			class="absolute bottom-14 flex w-full items-center justify-center gap-8 text-white md:bottom-8"
		>
			<button
				class="px-16 pt-32"
				on:click={() => {
					if (index === 0) {
						index = images.length - 1;
					} else {
						index--;
					}

					url = images[index].publicUrl;
					clearInterval(intervalId);
					startInterval();
				}}
			>
				<Icon name="arrow-left" />
			</button>
			<span class="flex items-center gap-1 pt-32">
				<span class="text-xs">{index + 1}</span>
				<span class="text-3xl font-thin">/</span>
				<span class="text-xs">{images.length}</span>
			</span>
			<button
				class="px-16 pt-32"
				on:click={() => {
					if (index === images.length - 1) {
						index = 0;
					} else {
						index++;
					}

					url = images[index].publicUrl;
					clearInterval(intervalId);
					startInterval();
				}}
			>
				<Icon name="arrow-right" />
			</button>
		</div>
	{/if}
</div>
