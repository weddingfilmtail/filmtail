<script>
	export let portfolio = {};
</script>

<iframe
	width="80%"
	height="70%"
	src={`${portfolio.url}${portfolio.url.includes('?') ? '&' : '?'}autoplay=1&mute=1`}
	title={portfolio.title}
	frameborder="0"
	allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
	allowfullscreen
/>
