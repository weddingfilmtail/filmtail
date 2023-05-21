<script>
	import Icon from '$lib/components/Icon.svelte';
	import { fade } from 'svelte/transition';

	const images = ['wedding1.png', 'wedding2.png', 'wedding3.png', 'wedding4.png'];

	let index = 0;
	let image = images[index];
	let intervalId = 0;

	const startInterval = () => {
		intervalId = setInterval(() => {
			if (index === images.length - 1) {
				index = 0;
			} else {
				index++;
			}

			image = images[index];
		}, 5000);
	};

	startInterval();
</script>

<div class="relative">
	{#key image}
		<img
			class="h-screen w-full object-cover"
			alt="wedding"
			src="/images/{image}"
			in:fade={{ duration: 1500 }}
		/>
	{/key}
	<div class="absolute bottom-16 flex w-full items-center justify-center gap-20">
		<button
			on:click={() => {
				if (index === 0) {
					index = images.length - 1;
				} else {
					index--;
				}

				image = images[index];
				clearInterval(intervalId);
				startInterval();
			}}
		>
			<Icon name="arrow-left" />
		</button>
		<span class="flex items-center gap-1 text-white">
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

				image = images[index];
				clearInterval(intervalId);
				startInterval();
			}}
		>
			<Icon name="arrow-right" />
		</button>
	</div>
</div>
