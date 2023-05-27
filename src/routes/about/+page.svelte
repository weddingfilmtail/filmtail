<script>
	import { fade } from 'svelte/transition';
</script>

<div
	class="mb-48 flex items-center justify-center px-8 py-20 md:block md:px-12 md:py-36 lg:mb-0 xl:mx-36"
>
	<div class="text-lg leading-loose sm:text-3xl sm:leading-loose">
		<div in:fade={{ duration: 1000 }}>
			<p>
				<strong>'tail'</strong> 은 한 장면이나 작품의 마지막 부분을 의미합니다
			</p>
			<p>삶의 첫 번째 장면을 마무리하고</p>

			<p>두 번째 장면을 시작하는</p>

			<p>가장 아름다운 순간인 결혼을</p>
			<p>
				잊지 않고 추억하기 위해 <strong>filmtail</strong> 이 만들어졌습니다
			</p>
		</div>

		<div in:fade={{ duration: 1000, delay: 800 }}>
			<p>인생에서 가장 아름답고 행복한</p>
			<p>그 한순간만큼은</p>
			<p>누구나 세상에 하나뿐인 영화의 주인공으로 남을 자격이 있습니다</p>
		</div>
	</div>
</div>

<style>
	@import url(//fonts.googleapis.com/earlyaccess/nanumbrushscript.css);

	* {
		font-family: 'Nanum Brush Script', cursive;
	}
</style>
