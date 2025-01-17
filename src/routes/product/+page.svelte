<script>
	import { fade } from 'svelte/transition';
</script>

<div class="flex h-full flex-col gap-32 pt-20 text-center text-xs xl:pt-52">
	<div class="grid grid-cols-1 gap-y-32 text-center xl:grid-cols-2">
		<section class="flex flex-col gap-10">
			<span class="font-extrabold">웨딩 본식 영상</span>
			<div class="flex flex-col gap-2">
				<span>90만 원</span>
				<span>(SNS 업로드 동의/후기 작성 시 최대 30만 원 할인)</span>
			</div>

			<div class="flex flex-col gap-2">
				<span>대표 직접 촬영</span>
				<span>1인 2캠 4K</span>
			</div>

			<div class="flex flex-col gap-2">
				<span>상품 구성 </span>
				<span>1. 시네마틱 필름 (3분 내외)</span>
				<span>2. SNS 업로드용 하이라이트 (1분 이내)</span>
				<span>3. 원본 영상 (컷 없는 풀버전)</span>
			</div>

			<div class="flex flex-col gap-2">
				<span>결혼식 당일 촬영하는 영상입니다</span>
				<span>순식간에 지나갈 아름다운 순간들과</span>
				<span>신랑, 신부님이 보지 못한 소중한 기억들까지 모두 그러모아</span>
				<span>한 편의 영화처럼 담아드립니다</span>
			</div>

			<div class="flex flex-col gap-2">
				<span>촬영은 원판까지 진행됩니다</span>
				<span>깔끔한 현장 녹음 진행하고 인터뷰는 요청시 담아드립니다</span>
			</div>
		</section>
		<section class="flex flex-col gap-10">
			<span class="font-extrabold">프리 웨딩/식전 영상</span>
			<div class="flex flex-col items-center gap-2">
				<div class="flex gap-1">
					<span class="line-through">90만 원</span>
					<span>70만 원 <span style="font-size: 9px;">event</span></span>
				</div>
				<span>(SNS 업로드 동의/후기 작성 시 최대 30만 원 할인)</span>
			</div>

			<div class="flex flex-col gap-2">
				<span>대표 직접 촬영</span>
				<span>1인 1캠 4K + 드론</span>
			</div>

			<div class="flex flex-col gap-2">
				<span>상품 구성 </span>
				<span>1. 릴스 영상 (30초 이내)</span>
				<span>2. 프리웨딩 뮤직비디오 (3분 이내)</span>
				<span>3. 원본 영상 (컷 없는 풀버전)</span>
			</div>

			<div class="flex flex-col gap-2">
				<span>식 전,</span>
				<span>두 분의 설렘을 한 편의 추억으로 남겨드립니다</span>
				<span>신랑, 신부님과의 충분한 소통 후</span>
				<span>원하시는 느낌의 뮤직비디오로 맞춤 제작 해드립니다</span>
			</div>

			<div class="flex flex-col gap-1">
				<span>* 다른 업체에서 프리 웨딩 사진 스냅을 진행하시면</span>
				<span>동행하여 진행하는 영상 촬영입니다</span>
			</div>
		</section>
	</div>

	<div class="flex flex-col gap-10 xl:mt-28">
		<span class="font-extrabold">선택 사항</span>
		<div class="flex flex-col gap-2">
			<span>드론 촬영 - 15만 원</span>
			<span>촬영 인원 추가 - 1인 25만 원</span>
			<span>10~20분 다큐멘터리 영상 - 15만 원</span>
			<span>한 컷 릴스x5 - 5만 원</span>
			<span>한 편 릴스(1분 이내의 하이라이트 편집본) - 10~20만 원</span>
			<span>*릴스는 촬영 후 일주일 이내에 전달됩니다</span>
		</div>

		<div class="flex flex-col gap-2">
			<span>모든 촬영 파일은 이중백업 진행합니다</span>
			<span>촬영 장비는 sony fx3, sony fx6 급으로 진행합니다</span>
		</div>
	</div>

	<hr class="border-black" />

	<section class="flex flex-col gap-10">
		<span class="font-extrabold">안내 사항</span>

		<div class="flex flex-col gap-2">
			<span>➡</span>
			<span>원하시는 느낌의 영상 레퍼런스를 보여주시면 적극 반영하여 진행합니다</span>
			<span>
				어떤 분위기든지 신랑, 신부님께서 남기고 싶은 영상을 만들어드리길 원하니 편하기 문의해주세요
			</span>
		</div>

		<div class="flex flex-col gap-2">
			<span>➡</span>
			<span>최종본은 본식 이후 2개월 이내 전달드립니다</span>
		</div>

		<div class="flex flex-col gap-2">
			<span>수정 요청 2회까지 가능합니다</span>
			<span>(음악 수정은 불가하니 원하는 음악이 있다면 사전에 말씀해주세요)</span>
		</div>

		<div class="flex flex-col gap-2">
			<span>➡</span>
			<span>예약금 50% 입금해주시면 예약 확정됩니다</span>
			<span>잔금 50%는 촬영 당일 이후 입금해주세요</span>
		</div>

		<div class="flex flex-col gap-2">
			<span>예약 확정 후 48시간 이내 취소시 전액 환불 가능합니다.</span>
			<span>예약금은 본식 100일 전까지 환불 가능합니다</span>
		</div>

		<div class="flex flex-col gap-2">
			<span>➡</span>
			<span>웨딩 본식 영상의 경우 촬영일 변경은 촬영 일정이 겹치지 않는 한 가능합니다</span>
			<span>프리 웨딩의 경우 촬영 일주일 전까지 최대 2회 변경 가능합니다</span>
		</div>

		<div class="flex flex-col gap-2">
			<span>➡</span>
			<span>촬영 당일 1시간 전 도착 원칙으로 하고있습니다 (빠른 도착을 원하시면 말씀해주세요)</span>
			<span>2부/폐백/연회장 촬영은 추가금액이 발생합니다</span>
		</div>

		<div class="flex flex-col gap-2">
			<span>➡</span>
			<span>프리 웨딩/식전 영상의 경우</span>
			<span>메인으로 진행하실 사진 작가님께 사전에 반드시 말씀드려주세요</span>
			<span>4시간 내외로 촬영 진행합니다</span>
		</div>

		<div class="flex flex-col gap-2">
			<span>➡</span>
			<span>SNS 업로드 동의 시 20만 원</span>
			<span>예약 후기 작성 시 5만 원</span>
			<span>촬영 후기 작성 시 추가 5만 원</span>
			<span>페이백해드립니다</span>
		</div>

		<div class="flex flex-col gap-2">
			<span>➡</span>
			<span>출장비</span>
			<span>서울제외 수도권(분당/성남/수원/부천/일산) - 5만 원</span>
			<span>경기지역(인천/파주/포천/강화/동두천/여주/이천 등) - 10만 원</span>
			<span>강원지역(가평/원주/횡성/철원/화천/춘천/홍천) - 15만 원</span>
			<span>충청지역 - 15만 원</span>
			<span>전북&경북지역 - 20만 원</span>
			<span>전남&경남지역 - 25만 원</span>
			<span>제주도 - 35만 원</span>
		</div>
	</section>
</div>

<style>
	@font-face {
		font-family: 'Nanum Myeongjo';
		src: url('$lib/fonts/nanum-myeongjo-korean-normal.ttf');
		font-style: normal;
		font-weight: 400;
	}

	@font-face {
		font-family: 'Nanum Myeonjo';
		src: url('$lib/fonts/nanum-myeongjo-korean-bold.ttf');
		font-style: normal;
		font-weight: 700;
	}

	@font-face {
		font-family: 'Nanum Myeonjo';
		src: url('$lib/fonts/nanum-myeongjo-korean-extrabold.ttf');
		font-style: normal;
		font-weight: 800;
	}

	div {
		font-family: 'Nanum Myeongjo';
	}
</style>
