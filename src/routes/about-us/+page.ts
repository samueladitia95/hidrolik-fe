import { pb } from '$lib/pocketbase';
import type { PageLoad } from './$types';

export const load: PageLoad = async () => {
	const about = await pb.collection('about_us').getList(1, 1, {
		sort: '-created'
	});

	return {
		about: about.items[0]
	};
};

export const ssr = false;
