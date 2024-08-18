<script lang="ts">
	import { page } from '$app/stores';
	import { pb } from '$lib/pocketbase';
	import type { PageData } from '../$types';

	let data = $page.data as PageData;
	let industries = data.trustedIndustries.map((element) => {
		return {
			image: pb.files.getUrl(element, element.image_url, { thumb: '1920x1080' })
		};
	});
</script>

<div class="bg-white py-20">
	<div class="container flex flex-col gap-6">
		<div class="font-bold text-center text-base/relaxed">
			Trusted by industry leaders for superior quality and reliability
		</div>
		<div class="flex flex-wrap justify-center gap-6">
			{#each industries as industry}
				<img src={industry.image} alt="industry" class="w-36 h-14" />
			{/each}
		</div>
	</div>
</div>
