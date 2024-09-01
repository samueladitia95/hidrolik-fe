<script lang="ts">
	import { page } from '$app/stores';
	import { pb } from '$lib/pocketbase';
	import { inview } from 'svelte-inview';
	import type { PageData } from '../$types';
	import { fade, fly } from 'svelte/transition';

	let data = $page.data as PageData;
	let industries = data.trustedIndustries.map((element) => {
		return {
			image: pb.files.getUrl(element, element.image_url, { thumb: '1920x1080' })
		};
	});

	let isShow: boolean = false;
	const handleChange = ({ detail }: CustomEvent<ObserverEventDetails>) => {
		if (!isShow && detail.inView) isShow = true;
	};
</script>

<div
	use:inview={{
		rootMargin: '-100px'
	}}
	on:inview_change={handleChange}
	class="bg-white py-20"
>
	<div class="container flex flex-col gap-6">
		{#if isShow}
			<div
				class="font-bold text-center text-base/relaxed"
				transition:fade={{ duration: 500, delay: 1000 }}
			>
				Trusted by industry leaders for superior quality and reliability
			</div>
		{/if}
		<div class="flex flex-wrap justify-center gap-6">
			{#each industries as industry, index}
				{#if isShow}
					<img
						src={industry.image}
						alt="industry"
						class="w-36 h-14"
						transition:fly={{ x: 200, duration: 1000 + 100 * index, delay: 500 }}
					/>
				{/if}
			{/each}
		</div>
	</div>
</div>
