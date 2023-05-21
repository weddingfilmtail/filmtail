import { supabase } from '$lib/supabase.js';

const images = ['wedding1.png', 'wedding2.png', 'wedding3.png', 'wedding4.png'];

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
