import { pb } from '$lib/pocketbase';
import type { PageLoad } from './$types';

export const load: PageLoad = async () => {
	const carausels = await pb.collection('Main_Images_Carausel').getFullList({
		filter: 'is_active=true',
		order: '-created'
	});

	const trustedIndustries = await pb.collection('Trusted_Industries').getFullList({
		filter: 'is_active=true',
		order: '-created'
	});

	const videoLink = await pb.collection('Main_Video').getFirstListItem('is_active=true', {
		order: '+created'
	});

	return {
		carausels,
		trustedIndustries,
		videoLink
	};
};
