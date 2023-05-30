<script>
	import { fade } from 'svelte/transition';
</script>

<div class="flex items-center justify-center py-12 md:p-40 lg:p-20 xl:mx-36 xl:p-16">
	<div
		class="relative z-10 whitespace-pre rounded-xl bg-neutral-800 text-sm shadow-2xl"
		in:fade={{ duration: 200 }}
	>
		<div class="absolute right-0 top-0">
			<div class="triangle">
				<span class="absolute -right-1 bottom-14 rotate-45 font-sans text-base font-semibold">
					PROMOTION
				</span>
			</div>
		</div>
		<div class="flex flex-col gap-4 pb-6 pt-12 text-center text-white">
			<h3 class="text-2xl font-bold tracking-wider md:text-3xl">STANDARD</h3>
			<div class="flex flex-col">
				<p class="text-2xl font-bold md:text-3xl">600,000</p>
				<p class="text-base line-through md:text-lg">800,000</p>
			</div>
		</div>
		<div class="m-4 flex items-center justify-center rounded-lg bg-gray-100 font-sans md:text-lg">
			<ul class="p-4">
				<li>할인 프로모션</li>
				<li>시네마틱 웨딩필름 (3~5')</li>
				<li>SNS용 1분 하이라이트 영상 (1')</li>
				<li>현장감 있는 다큐멘터리 영상 (NG컷 제외 3~40')</li>

				<li>예약 후기 할인 5만원 할인</li>
				<li>짝꿍 할인 각 10만원 할인</li>
				<li class="text-xs md:text-base">모든 영상은 4k로 제작됩니다.</li>
			</ul>
		</div>
	</div>
</div>

<style>
	.triangle {
		width: 0;
		height: 0;
		border-bottom: 60px solid transparent;
		border-top: 60px solid rgb(253 224 71);
		border-left: 60px solid transparent;
		border-right: 60px solid rgb(253 224 71);
		border-top-right-radius: 10px;
	}
</style>
