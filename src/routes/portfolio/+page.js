import { supabase } from '$lib/supabase.js';

/** @type {import('./$types').PageLoad} */
export const load = async () => {
	const fetchPortfoliosByProduct = async (product) => {
		const { data: portfolios, error } = await supabase
			.from('portfolio')
			.select('*')
			.neq('priority', 0)
			.eq('product', product);

		if (error) {
			throw error;
		}

		portfolios.forEach(async (portfolio) => {
			const { data } = supabase.storage.from('images/portfolio').getPublicUrl(portfolio.image_key);
			portfolio.image_key = data.publicUrl;
		});

		return portfolios.sort((a, b) => a.priority - b.priority);
	};

	const fetchRemainings = async () => {
		const { data: portfolios, error } = await supabase
			.from('portfolio')
			.select('*')
			.eq('priority', 0);

		if (error) {
			throw error;
		}

		portfolios.forEach(async (portfolio) => {
			const { data } = supabase.storage.from('images/portfolio').getPublicUrl(portfolio.image_key);
			portfolio.image_key = data.publicUrl;
		});

		return portfolios.sort((a, b) => new Date(b.created_at) - new Date(a.created_at));
	};

	return {
		ceremonyPortfolios: fetchPortfoliosByProduct('ceremony'),
		prePortfolios: fetchPortfoliosByProduct('pre'),
		remainings: fetchRemainings()
	};
};
