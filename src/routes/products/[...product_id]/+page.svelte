<script lang="ts">
	import { pb } from '$lib/pocketbase';

	import ChevronLogo from '$lib/icons/chevron-logo.svg?raw';

	import type { PageData } from './$types';
	import ContactUsModal from '$lib/components/ContactUsModal.svelte';
	export let data: PageData;

	$: images = data.product.images_url.map((element: string) => {
		return pb.files.getUrl(data.product, element);
	});

	let containerEl: Element;
	function scrollIntoView(index: number, maxLength: number) {
		const maxWidth = containerEl.scrollWidth;

		containerEl.scrollTo({ left: (maxWidth / maxLength) * index, behavior: 'smooth' });
	}

	let showModal: boolean = false;
</script>

<div class="container">
	<!-- BREADCRUMB -->
	<div class="text-xs flex items-center gap-1">
		<div>Product</div>
		<div class="h-4 w-4 -rotate-90">
			{@html ChevronLogo}
		</div>
		<div>{data.parent_categories}</div>
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

	<div class="lg:!grid lg:!grid-cols-2 lg:!gap-6 lg:!mt-6">
		<!-- GALLERY -->
		<div class="py-6 lg:!pt-0 flex flex-col gap-2">
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
		<div>
			<!-- DETAIL -->
			<div class="py-2 lg:!pt-0">
				<div class="flex border-b border-solid border-black border-opacity-25">
					<div class="p-2 font-semibold border-b-2 border-solid border-secondary">Detail</div>
				</div>

				<div class="py-6">
					{@html data.product.detail}
				</div>
			</div>

			<!-- INQUIRY BUTTON -->
			<div>
				<button
					class="px-6 py-3 font-semibold rounded-full bg-black text-white hover:bg-opacity-75"
					on:click={() => (showModal = true)}>Inquiry Now</button
				>
			</div>
		</div>
	</div>

	<!-- RECOMMENDATION -->
	<div class="py-20">
		<div class="text-2xl font-bold">You might also like</div>
	</div>
</div>

<ContactUsModal bind:showModal />
