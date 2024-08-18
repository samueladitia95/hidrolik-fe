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
	console.log(trustedIndustries, '+++++++++++++');

	return {
		carausels,
		trustedIndustries
	};
};
