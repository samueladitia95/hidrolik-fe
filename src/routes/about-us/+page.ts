import { pb } from '$lib/pocketbase';
import type { PageLoad } from './$types';

export const load: PageLoad = async () => {
	const about = await pb.collection('about_us').getList(1, 1, {
		sort: '-created'
	});

	const locations = await pb.collection('locations').getFullList({
		order: '-created'
	});

	const missionDetails = await pb.collection('mission_details').getFullList({
		order: '-created'
	});

	const visionMission = await pb.collection('vision_missions').getList(1, 1, {
		sort: '-created'
	});

	return {
		about: about.items[0],
		locations,
		missionDetails,
		visionMission: visionMission.items[0]
	};
};

export const ssr = false;
