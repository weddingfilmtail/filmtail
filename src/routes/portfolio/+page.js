import { supabase } from '$lib/supabase.js';

/** @type {import('./$types').PageLoad} */
export const load = async () => {
	const fetchPortfolios = async () => {
		const { data: portfolios, error } = await supabase.from('portfolio').select('*');

		if (error) {
			throw error;
		}

		portfolios.forEach(async (portfolio) => {
			const { data } = supabase.storage.from('images').getPublicUrl(portfolio.image_key);
			portfolio.image_key = data.publicUrl;
		});

		return portfolios.sort((a, b) => a.priority - b.priority);
	};

	return {
		portfolios: fetchPortfolios()
	};
};
