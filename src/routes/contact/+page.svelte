<script>
	import Icon from '$lib/components/Icon.svelte';
	import { blur } from 'svelte/transition';
</script>

<div class="flex items-center justify-center p-44 sm:p-60 md:mb-48 lg:mb-0 xl:mx-36">
	<div class="rounded-2xl bg-stone-200 pr-1 pt-1">
		<div
			class="z-10 flex flex-col rounded-2xl bg-neutral-800 p-4 px-4 text-white shadow-2xl sm:px-20"
			in:blur={{ duration: 700 }}
		>
			<h2 class="w-full p-4 text-center text-2xl font-bold">CONTACT US</h2>
			<div class="p-4">
				<ul class="flex flex-col gap-4 sm:py-6">
					<li class="flex items-center gap-4">
						<Icon name="phone-call" />
						<a href="tel:010-7310-3580" class="font-bold">010-7310-3580</a>
					</li>
					<li class="flex items-center gap-4">
						<Icon name="mail" />
						<a href="mailto:weddingfilmtail@gmail.com" target="_blank" class="font-bold">
							weddingfilmtail@gmail.com
						</a>
					</li>
					<li class="flex items-center gap-4">
						<Icon name="instagram" />
						<a
							href="https://instagram.com/filmtail.wedding?igshid=MzRlODBiNWFlZA=="
							target="_blank"
							class="font-bold"
						>
							@filmtail.wedding
						</a>
					</li>
				</ul>
			</div>
		</div>
	</div>
</div>
