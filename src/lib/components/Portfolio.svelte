<script>
	export let portfolio = {};

	function getYoutubeEmbedUrl(url) {
		if (!url) return '';

		try {
			const patterns = [
				/(?:https?:\/\/)?(?:www\.)?youtube\.com\/watch\?v=([^&]+)/,
				/(?:https?:\/\/)?(?:www\.)?youtu\.be\/([^?]+)/
			];

			for (const pattern of patterns) {
				const match = url.match(pattern);
				if (match && match[1]) {
					return `https://www.youtube.com/embed/${match[1]}`.trim();
				}
			}

			return url;
		} catch (error) {
			console.error('YouTube URL 변환 중 오류:', error);
			return url;
		}
	}

	const embeddedUrl = getYoutubeEmbedUrl(portfolio.url);
</script>

<iframe
	width="80%"
	height="70%"
	src={`${embeddedUrl}?autoplay=1&mute=1`}
	title={portfolio.title}
	frameborder="0"
	allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
	allowfullscreen
/>
