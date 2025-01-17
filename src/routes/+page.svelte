<script>
	import Icon from '$lib/components/Icon.svelte';
	import { fade } from 'svelte/transition';

	export let data;

	const images = data.images;
	let index = 0;
	let url = images[index].publicUrl;
	let intervalId = 0;

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

	startInterval();
</script>

<svelte:head>
	{#each data.images as image}
		<link rel="preload" as="image" href={image.publicUrl} />
	{/each}
</svelte:head>

<div class="relative bg-gray-300">
	{#key url}
		<img
			class="h-screen w-full object-cover pt-14 xl:pt-16"
			alt="wedding"
			src={url}
			in:fade={{ duration: 1500 }}
		/>
	{/key}
	<div class="absolute bottom-16 flex w-full items-center justify-center gap-20 text-white">
		<button
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
		<span class="flex items-center gap-1">
			<span class="text-xs">{index + 1}</span>
			<span class="text-3xl font-thin">/</span>
			<span class="text-xs">{images.length}</span>
		</span>
		<button
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
</div>
