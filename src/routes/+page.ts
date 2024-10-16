import { pb } from '$lib/pocketbase';
import type { PageLoad } from './$types';

export const load: PageLoad = async () => {
	const carausels = await pb.collection('main_image_carousels').getFullList({
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

	const testimonials = await pb.collection('testimonials').getList(1, 6, {
		filter: 'is_active=true',
		order: '-created'
	});

	const faqs = await pb.collection('faqs').getFullList({
		filter: 'is_active=true',
		order: '-created'
	});

	const applications = await pb.collection('applications').getFullList({
		filter: 'is_active=true',
		order: '-created'
	});

	return {
		carausels,
		trustedIndustries,
		videoLink,
		testimonials: testimonials.items,
		faqs,
		applications
	};
};
