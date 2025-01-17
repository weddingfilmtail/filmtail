import { supabase } from '$lib/supabase.js';

const images = Array.from({ length: 10 }, (_, index) => {
	const number = `${index + 1}`;
	return `wedding${number.padStart(2, '0')}.jpeg`;
});

/** @type {import('./$types').PageLoad} */
export const load = async () => {
	const fetchImages = async () => {
		const promises = images.map((image) => {
			const { data: publicUrl } = supabase.storage.from('images').getPublicUrl(image);
			return publicUrl;
		});
		const urls = await Promise.all(promises);

		return urls;
	};

	return {
		images: fetchImages()
	};
};
