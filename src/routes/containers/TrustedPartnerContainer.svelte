<script lang="ts">
	import { page } from '$app/stores';
	import type { PageData } from '../$types';

	let data = $page.data as PageData;
	let video_url = data.videoLink.video_url;
</script>

<div class="bg-white">
	<div class="container py-28">
		<div class="flex flex-col gap-6 items-start md:!items-center md:!text-center">
			<div class="text-3xl/normal md:!text-5xl/normal font-bold lg:!max-w-4xl">
				Your Trusted Partner for Premium Hydraulic Hoses
			</div>
			<div class="leading-relaxed lg:!text-lg/normal">
				Dedicated to providing top-tier hydraulic hoses across a multitude of industries and
				applications. Our commitment to excellence ensures that you receive the best quality
				products at the most competitive prices available.
			</div>
			<button class="px-6 py-3 rounded-full bg-black text-white font-semibold hover:bg-opacity-75"
				>Learn More</button
			>
		</div>

		<div class="mt-10 flex justify-center">
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
	</div>
</div>
