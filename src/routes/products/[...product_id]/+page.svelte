<script lang="ts">
	import { pb } from '$lib/pocketbase';

	import ChevronLogo from '$lib/icons/chevron-logo.svg?raw';
	import BackArrowLogo from '$lib/icons/back-arrow-logo.svg?raw';

	import type { PageData } from './$types';
	import ContactUsModal from '$lib/components/ContactUsModal.svelte';
	import { inview } from 'svelte-inview';
	import { fade } from 'svelte/transition';
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

	let isShow: boolean = false;
	const handleChange = ({ detail }: CustomEvent<ObserverEventDetails>) => {
		if (!isShow && detail.inView) isShow = true;
	};
</script>

<div
	class="container min-h-screen"
	use:inview={{
		rootMargin: '-100px'
	}}
	on:inview_change={handleChange}
>
	<!-- BREADCRUMB -->
	{#if isShow}
		<div class="text-xs flex items-center gap-1" transition:fade={{ duration: 500, delay: 0 }}>
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
	{/if}

	<!-- PRODUCT NAME AND DESCRIPTION -->
	{#if isShow}
		<div class="mt-6 flex flex-col gap-3" transition:fade={{ duration: 500, delay: 100 }}>
			<div class="flex gap-4 items-start">
				<button class="w-10 h-10 min-h-10 min-w-10" on:click={() => window.history.back()}>
					{@html BackArrowLogo}
				</button>
				<div class="text-3xl font-bold">
					{data.product.name}
				</div>
			</div>
			<div class="font-bold">
				{data.product.description}
			</div>
		</div>
	{/if}

	{#if isShow}
		<div
			class="lg:!grid lg:!grid-cols-2 lg:!gap-6 lg:!mt-6"
			transition:fade={{ duration: 500, delay: 200 }}
		>
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
	{/if}

	<!-- RECOMMENDATION -->
	{#if isShow}
		<div class="py-20" transition:fade={{ duration: 500, delay: 300 }}>
			<div class="text-2xl font-bold">You might also like</div>
		</div>
	{/if}
</div>

<ContactUsModal bind:showModal />
