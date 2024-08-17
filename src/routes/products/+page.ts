import { pb } from '$lib/pocketbase';
import type { PageLoad } from './$types';

export const load: PageLoad = async ({ url }) => {
	const page = url.searchParams.get('n') || 1;
	const queries = url.searchParams.get('q');
	const filterCategories = queries
		? queries
				?.split(',')
				.map((el) => `categories = "${el}"`)
				.join(' || ')
		: '';

	const products = await pb.collection('products').getList(1, 5 * +page, {
		sort: '-created',
		filter: filterCategories ? filterCategories : ''
	});

	const categories = await pb.collection('parent_categories').getList(1, 100, {
		sort: '-created',
		expand: 'child_categories_via_parent_categories'
	});

	return {
		products,
		categories
	};
};
