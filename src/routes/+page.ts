import { pb } from '$lib/pocketbase';
import type { PageLoad } from './$types';

export const load: PageLoad = async () => {
	const carausels = await pb.collection('Main_Images_Carausel').getFullList({
		filter: 'is_active=true'
	});
	console.log(carausels, "+++++++++++++");

	return {
		carausels
	};
};
