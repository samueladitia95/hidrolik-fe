<script lang="ts">
	import { pb } from '$lib/pocketbase';

	import ChevronLogo from '$lib/icons/chevron-logo.svg?raw';

	import type { PageData } from './$types';
	export let data: PageData;

	$: images = data.product.images_url.map((element: string) => {
		return pb.files.getUrl(data.product, element);
	});

	let chosenImages: number = 0;
	let containerEl: Element;
	function scrollIntoView(index: number, maxLength: number) {
		const maxWidth = containerEl.scrollWidth;

		chosenImages = index;

		containerEl.scrollTo({ left: (maxWidth / maxLength) * index, behavior: 'smooth' });
	}
</script>

<div class="container">
	<!-- BREADCRUMB -->
	<div class="text-xs flex items-center gap-1">
		<div>Product</div>
		<div class="h-4 w-4 -rotate-90">
			{@html ChevronLogo}
		</div>
		<div>Industrial Cable</div>
		<div class="h-4 w-4 -rotate-90">
			{@html ChevronLogo}
		</div>
		<div class="font-semibold">{data.product.name}</div>
	</div>

	<!-- PRODUCT NAME AND DESCRIPTION -->
	<div class="mt-6 flex flex-col gap-3">
		<div class="text-3xl font-bold">
			{data.product.name}
		</div>
		<div class="font-bold">
			{data.product.description}
		</div>
	</div>

	<!-- GALLERY -->
	<div class="py-6 flex flex-col gap-2">
		<div bind:this={containerEl} class="flex flex-start overflow-hidden snap-x snap-mandatory">
			{#each images as src}
				<img {src} alt="product" class="max-w-full rounded snap-center" />
			{/each}
		</div>
		<div class="w-full grid grid-cols-5 gap-2">
			{#each images as src, index}
				<button on:click={() => scrollIntoView(index, images.length)}>
					<img {src} alt="product" class="rounded object-cover w-full h-full" />
				</button>
			{/each}
		</div>
	</div>

	<!-- DETAIL -->
	<div class="py-2">
		<div class="flex border-b border-solid border-black border-opacity-25">
			<div class="p-2 font-semibold border-b-2 border-solid border-secondary">Detail</div>
		</div>

		<div class="py-6 detail-container">
			{@html data.product.detail}
		</div>
	</div>
</div>

<style>
	.detail-container,
	ul,
	ol {
		padding-left: 20px !important;
	}
</style>
