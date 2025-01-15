<!-- Footer.svelte -->
<script>
	const scrollToTop = () => {
		window.scrollTo({ top: 0, behavior: 'smooth' });
	};
</script>

<footer
	class="flex w-full flex-col items-center justify-between gap-4 px-4 py-12 sm:flex-row xl:px-36"
>
	<p class="text-center tracking-wider sm:text-left">
		Copyrights &copy; Filmtail 2023 | All rights Reserved
	</p>
	<div class="flex gap-4">
		<button class="font-medium" on:click={scrollToTop}> Back to Top </button>
		<button class="font-medium" on:click={scrollToTop}>
			<svg width="20px" height="20px" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
				<g id="Complete">
					<g id="arrow-up">
						<g>
							<polyline
								data-name="Right"
								fill="none"
								id="Right-2"
								points="7 7.5 12 2.5 17 7.5"
								stroke="#000000"
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="2"
							/>

							<line
								fill="none"
								stroke="#000000"
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="2"
								x1="12"
								x2="12"
								y1="21.3"
								y2="4.8"
							/>
						</g>
					</g>
				</g>
			</svg>
		</button>
	</div>
</footer>
