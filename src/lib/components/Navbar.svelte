<!-- Navbar.svelte -->
<script>
	let currentPage = 'home'; // Default selected page
</script>

<div class="navbar">
	<a class="nav-item" on:click={() => (currentPage = 'home')} class:active={currentPage === 'home'}>
		Home
	</a>
	<a
		class="nav-item"
		on:click={() => (currentPage = 'portfolio')}
		class:active={currentPage === 'portfolio'}
	>
		Portfolio
	</a>
	<a
		class="nav-item"
		on:click={() => (currentPage = 'product')}
		class:active={currentPage === 'product'}
	>
		Product
	</a>
	<a
		class="nav-item"
		on:click={() => (currentPage = 'contact')}
		class:active={currentPage === 'contact'}
	>
		Contact
	</a>
</div>

<style>
	.navbar {
		display: flex;
		justify-content: space-around;
		align-items: center;
		background-color: #333;
		padding: 10px 0;
	}

	.nav-item {
		color: #fff;
		text-decoration: none;
		font-size: 1.2rem;
		cursor: pointer;
	}

	.nav-item:hover,
	.nav-item.active {
		color: #50d890;
	}
</style>
