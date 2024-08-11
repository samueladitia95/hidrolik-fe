import { pb } from '$lib/pocketbase';
import type { PageLoad } from './$types';

export const load: PageLoad = async ({ url }) => {
	const page = url.searchParams.get('n') || 1;
	const products = await pb.collection('products').getList(1, 5 * +page, {
		sort: '-created'
	});
	return {
		products: products
	};
};
