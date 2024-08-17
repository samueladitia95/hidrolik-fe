import { pb } from '$lib/pocketbase';
import type { PageLoad } from './$types';

export const load: PageLoad = async ({ url }) => {
	const page = url.searchParams.get('n') || 1;
	let numberPage = 1;
	if (Number(page)) {
		numberPage = Number(page);
	}
	const queries = url.searchParams.get('cat');
	const filterCategories = queries
		? queries
				?.split(',')
				.map((el) => `categories = "${el}"`)
				.join(' || ')
		: '';

	let order = url.searchParams.get('order');
	const validOrder = ['-created', '+created'];
	if (!(order && validOrder.includes(order))) {
		order = '-created';
	}

	const searchQuery = url.searchParams.get('q');
	let searchValue = '';
	if (searchQuery) {
		searchValue = `name ~ "%${searchQuery}%"`;
	}

	const combinedFilter = [searchValue, filterCategories].filter((el) => el);

	const products = await pb.collection('products').getList(1, 9 * numberPage, {
		sort: order,
		filter: combinedFilter ? combinedFilter.join(' && ') : ''
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
