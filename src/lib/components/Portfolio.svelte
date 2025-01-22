<script>
	export let portfolio = {};

	function getYoutubeEmbedUrl(url) {
		try {
			const baseUrl = portfolio.url.slice(0, 23);
			const videoId = portfolio.url.slice(24);
			return `${baseUrl}/embed/${videoId}`.trim();
		} catch (error) {
			console.error('Youtube URL 변환 중 오류', error);
			return url;
		}
	}

	const embeddedUrl = getYoutubeEmbedUrl(portfolio.url);
</script>

<iframe
	width="80%"
	height="70%"
	src={`${embeddedUrl}${portfolio.url.includes('?') ? '&' : '?'}autoplay=1&mute=1`}
	title={portfolio.title}
	frameborder="0"
	allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
	allowfullscreen
/>
