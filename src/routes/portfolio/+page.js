import { supabase } from '$lib/supabase.js';

/** @type {import('./$types').PageLoad} */
export const load = async () => {
	const fetchPortfolios = async () => {
		const { data: portfolios, error } = await supabase.from('portfolio').select('*');

		if (error) {
			throw error;
		}

		return portfolios;
	};

	return {
		portfolios: fetchPortfolios()
	};
};
