export const handle = async ({ event, resolve }) => {
	const response = await resolve(event, {
		preload: ({ type }) => {
			return type === 'font' || type === 'js' || type === 'css';
		}
	});
	return response;
};
