import { pb } from '$lib/pocketbase';
import type { PageLoad } from './$types';

export const load: PageLoad = async () => {
	const applications = await pb.collection('applications').getFullList({
		filter: 'is_active=true',
		order: '-created'
	});

	const carousels = await pb.collection('main_image_carousels').getFullList({
		filter: 'is_active=true',
		order: '-created'
	});

	const faqs = await pb.collection('faqs').getFullList({
		filter: 'is_active=true',
		order: '-created'
	});

	const groupHeaders = await pb.collection('group_headers').getList(1, 1, {
		sort: '-created'
	});

	const testimonials = await pb.collection('testimonials').getList(1, 6, {
		filter: 'is_active=true',
		order: '-created'
	});

	const trustedIndustries = await pb.collection('trusted_industries').getFullList({
		filter: 'is_active=true',
		order: '-created'
	});

	const videoLink = await pb.collection('main_videos').getFirstListItem('is_active=true', {
		order: '+created'
	});

	return {
		applications,
		carousels,
		faqs,
		groupHeader: groupHeaders.items[0],
		testimonials: testimonials.items,
		trustedIndustries,
		videoLink
	};
};
