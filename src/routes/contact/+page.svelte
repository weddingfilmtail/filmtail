<script>
	import Icon from '$lib/components/Icon.svelte';
	import kakaoLogo from '$lib/assets/kakao-logo.png';
	import { onMount } from 'svelte';

	onMount(() => {
		setTimeout(() => {
			window.scroll({ top: -1, left: 0, behavior: 'smooth' });
		}, 10);
	});
</script>

<div class="flex h-screen flex-col items-center justify-center gap-4 pb-32 pt-14">
	<div class="flex flex-col text-center">
		<p class="text-sm lg:text-base">아름다운 기억을 영상 속에 오롯이</p>
		<p class="mt-24 text-sm lg:text-base">__</p>
		<p class="mt-8 text-xs lg:text-sm">더 많은 포트폴리오는 인스타그램으로</p>
		<p class="mt-4 text-xs lg:text-sm">예약문의는 카카오톡 채널로 부탁드립니다</p>
		<p class="mt-4 text-xs lg:text-sm">아래의 카카오톡 버튼을 눌러주세요</p>
	</div>
	<div class="mt-4 flex gap-8">
		<a href="http://pf.kakao.com/_LzsTn/chat" target="_blank" class="font-bold">
			<img src={kakaoLogo} alt="kakao-logo" class="h-6 w-6" />
		</a>
		<a
			href="https://instagram.com/filmtailwedding?igshid=MzRlODBiNWFlZA=="
			target="_blank"
			class="font-bold"
		>
			<Icon name="instagram" />
		</a>
	</div>
</div>
