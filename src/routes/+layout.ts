import { pb } from '$lib/pocketbase';
import type { LayoutLoad } from './$types';

export const load: LayoutLoad = async () => {
	const catalogs = await pb.collection('Catalogs').getFirstListItem('is_active=true', {
		order: '+created'
	});

	return {
		catalogs
	};
};
