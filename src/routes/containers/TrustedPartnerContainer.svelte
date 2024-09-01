<script lang="ts">
	import { page } from '$app/stores';
	import { inview } from 'svelte-inview';
	import type { PageData } from '../$types';
	import { fade } from 'svelte/transition';

	let data = $page.data as PageData;
	let video_url = data.videoLink.video_url;

	let isShow: boolean = false;
	const handleChange = ({ detail }: CustomEvent<ObserverEventDetails>) => {
		if (!isShow && detail.inView) isShow = true;
	};
</script>

<div
	class="bg-white min-h-40"
	use:inview={{
		rootMargin: '-100px'
	}}
	on:inview_change={handleChange}
>
	<div class="container py-28">
		<div class="flex flex-col gap-6 items-start md:!items-center md:!text-center">
			{#if isShow}
				<div
					class="text-3xl/normal md:!text-5xl/normal font-bold lg:!max-w-4xl"
					transition:fade={{ duration: 500, delay: 500 }}
				>
					Your Trusted Partner for Premium Hydraulic Hoses
				</div>
			{/if}

			{#if isShow}
				<div
					class="leading-relaxed lg:!text-lg/normal"
					transition:fade={{ duration: 500, delay: 700 }}
				>
					Dedicated to providing top-tier hydraulic hoses across a multitude of industries and
					applications. Our commitment to excellence ensures that you receive the best quality
					products at the most competitive prices available.
				</div>
			{/if}

			{#if isShow}
				<button
					class="px-6 py-3 rounded-full bg-black text-white font-semibold hover:bg-opacity-75"
					transition:fade={{ duration: 500, delay: 900 }}>Learn More</button
				>
			{/if}
		</div>

		{#if isShow}
			<div class="mt-10 flex justify-center" transition:fade={{ duration: 500, delay: 1000 }}>
				<iframe
					width="100%"
					src={video_url}
					title="YouTube video player"
					frameborder="0"
					allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
					referrerpolicy="strict-origin-when-cross-origin"
					allowfullscreen
					class="rounded-lg h-56 md:!h-[408px] lg:!h-[487px] lg:!w-[903px]"
				></iframe>
			</div>
		{/if}
	</div>
</div>
