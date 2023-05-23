import { supabase } from '$lib/supabase.js';

const images = ['wedding01.jpeg', 'wedding02.jpeg', 'wedding03.jpeg', 'wedding04.jpeg'];

/** @type {import('./$types').PageLoad} */
export const load = async () => {
	const fetchImages = async () => {
		const promises = images.map(async (image) => {
			const { data: publicUrl } = await supabase.storage.from('images').getPublicUrl(image);
			return publicUrl;
		});
		const urls = await Promise.all(promises);

		return urls;
	};

	return {
		images: fetchImages()
	};
};
