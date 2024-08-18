<script lang="ts">
	import { onMount } from 'svelte';
	import { inview, type ObserverEventDetails } from 'svelte-inview';

	import { pb } from '$lib/pocketbase';
	import { page } from '$app/stores';
	import type { PageData } from '../$types';

	import { isTopbarTransparent } from '$lib/store';

	let data = $page.data as PageData;
	let banners = data.carausels.map((element) => {
		return {
			image: pb.files.getUrl(element, element.image_url)
		};
	});
	const itemNumber: number = banners.length;

	let interval: number;
	let bannerView: number = 0;
	let containerEl: Element;

	const autoPlay = () =>
		(interval = setInterval(() => {
			let position = bannerView;
			if (position >= 0 && position >= itemNumber - 1) {
				position = 0;
			} else if (position >= 0 && position < itemNumber) {
				position = position + 1;
			}
			scrollIntoView(position);
		}, 3000));

	const scrollIntoView = (selectedView: number) => {
		clearInterval(interval);
		const maxWidth = containerEl.scrollWidth;

		if (selectedView >= 0 && selectedView < itemNumber) {
			bannerView = selectedView;
		}

		containerEl.scrollTo({ left: (maxWidth / itemNumber) * bannerView, behavior: 'smooth' });
		autoPlay();
	};
	const handleChange = ({ detail }: CustomEvent<ObserverEventDetails>) => {
		isTopbarTransparent.set(detail.inView);
	};

	onMount(() => {
		autoPlay();
	});
</script>

<div
	use:inview={{
		rootMargin: '-100px'
	}}
	on:inview_change={handleChange}
	class="relative"
>
	<div bind:this={containerEl} class="max-w-full overflow-hidden flex">
		{#each banners as banner}
			<div class="relative min-w-full">
				<img src={banner.image} alt="banner" class="w-screen h-screen object-cover" />
			</div>
		{/each}
	</div>
	<div
		class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-screen text-white md:!left-0 md:!translate-x-0"
	>
		<div class="container">
			<div class="lg:!max-w-[556px]">
				<div class="font-bold text-4xl/normal md:!text-5xl/normal">
					Building a Stronger Industry by Quality
				</div>
				<div class="leading-loose mt-4">
					Offer top-notch hydraulic hoses tailored to meet various industry needs, known for
					exceptional quality and competitive pricing.
				</div>
				<button class="bg-secondary px-6 py-3 rounded-full mt-6 hover:bg-opacity-85"
					>Browse Our Products</button
				>
			</div>
		</div>
	</div>
	<div class="absolute bottom-10 flex gap-3 z-20 left-1/2 -translate-x-1/2 -translate-y-1/2">
		{#each { length: itemNumber } as _, i}
			<button
				class="bg-white w-3 h-3 rounded-full {bannerView === i ? 'opacity-100' : 'opacity-50'}"
				on:click={() => scrollIntoView(i)}
			/>
		{/each}
	</div>
</div>
