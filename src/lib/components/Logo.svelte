<script>
	import { browser } from '$app/environment';
	import logoBlack from '$lib/assets/logo-black.png';

	export let isMobile = false;

	$: isMobile = browser && window.innerWidth < 1024;
</script>

<a href="/">
	<img src={logoBlack} alt="logo" class="z-50 {isMobile ? 'w-40' : 'w-52'}" />
</a>
