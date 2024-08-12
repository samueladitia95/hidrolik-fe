import { pb } from '$lib/pocketbase';
import type { PageLoad } from './$types';

export const load: PageLoad = async ({ params }) => {
	const product = await pb.collection('Products').getOne(params.product_id);

	return {
		product
	};
};
