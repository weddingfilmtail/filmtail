<!-- Hamburger.svelte -->
<script>
	import { createEventDispatcher } from 'svelte';
	const dispatch = createEventDispatcher();

	function handleClick() {
		dispatch('toggle');
	}
</script>

<button
	on:click={handleClick}
	class="focus:shadow-outline block focus:outline-none xl:hidden"
	type="button"
>
	<svg class="h-6 w-6 text-black/80" viewBox="0 0 12 12">
		<g>
			<rect fill="currentColor" height="1" width="11" x="0.5" y="5.5" />
			<rect fill="currentColor" height="1" width="11" x="0.5" y="2.5" />
			<rect fill="currentColor" height="1" width="11" x="0.5" y="8.5" />
		</g>
	</svg>
</button>
