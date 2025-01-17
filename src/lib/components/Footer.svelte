<!-- Footer.svelte -->
<script>
	import { page } from '$app/stores';

	const scrollToTop = () => {
		window.scrollTo({ top: 0, behavior: 'smooth' });
	};
</script>

<footer
	class="mx-auto flex w-full max-w-6xl flex-col items-center justify-between gap-4 pb-6 pt-40 xl:flex-row xl:pt-44"
>
	<address
		class="flex flex-col items-center gap-1 font-sans text-xs not-italic text-black/60 xl:flex-row xl:gap-2 xl:text-sm {$page
			.url.pathname !== '/'
			? 'hidden xl:block'
			: ''}"
	>
		<span>스윙을하는자세</span>
		<span class="hidden xl:inline">|</span>
		<span>경기도 수원시 영통구 동수원로537번길 28-5</span>
		<span class="hidden xl:inline">|</span>
		<span>대표: 이서형</span>
		<span class="hidden xl:inline">|</span>
		<span>사업자번호: 685-09-02743</span>
		<span class="hidden xl:inline">|</span>
		<span>
			Copyright &copy; Filmtail {new Date().getFullYear()} All rights reserved.
		</span>
	</address>
	<div class="flex items-center gap-1">
		<button class="text-sm font-medium" on:click={scrollToTop}> Back to Top </button>
		<button class="pb-0.5 font-medium" on:click={scrollToTop}>
			<svg class="h-3 w-3 xl:h-4 xl:w-4" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
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
