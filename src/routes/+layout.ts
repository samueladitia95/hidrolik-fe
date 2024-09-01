import { pb } from '$lib/pocketbase';
import type { LayoutLoad } from './$types';

export const load: LayoutLoad = async () => {
	const catalogs = await pb.collection('Catalogs').getFirstListItem('is_active=true', {
		order: '+created'
	});

	const contactUs = await pb.collection('Contact_us').getFirstListItem('is_active=true', {
		order: '+created'
	});

	const featuredCategories = await pb.collection('parent_categories').getFullList({
		filter: 'is_featured=true',
		order: '+created',
		expand: 'child_categories_via_parent_categories'
	});

	return {
		catalogs,
		contactUs,
		featuredCategories
	};
};
