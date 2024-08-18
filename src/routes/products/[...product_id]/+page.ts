import { pb } from '$lib/pocketbase';
import type { PageLoad } from './$types';

export const load: PageLoad = async ({ params }) => {
	const product = await pb.collection('products').getOne(params.product_id, {
		expand: 'categories.parent_categories'
	});

	const categories = product.expand?.categories.expand?.parent_categories.label;
	return {
		product,
		parent_categories: categories
	};
};
