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
	class="focus:shadow-outline block focus:outline-none lg:hidden"
	type="button"
>
	<svg class="h-6 w-6 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
		<path
			d="M4 5h16c1.1 0 2-.9 2-2s-.9-2-2-2H4C2.9 1 2 1.9 2 3s.9 2 2 2zm0 6h16c1.1 0 2-.9 2-2s-.9-2-2-2H4c-1.1 0-2 .9-2 2s.9 2 2 2zm0 6h16c1.1 0 2-.9 2-2s-.9-2-2-2H4c-1.1 0-2 .9-2 2s.9 2 2 2z"
		/>
	</svg>
</button>
