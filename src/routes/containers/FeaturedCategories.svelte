<script lang="ts">
	import { page } from '$app/stores';
	import { pb } from '$lib/pocketbase';
	import type { RecordModel } from 'pocketbase';
	import type { PageData } from '../$types';
	import { inview } from 'svelte-inview';
	import { fade, fly } from 'svelte/transition';

	let data = $page.data as PageData;
	const parseChildLink = (categories: RecordModel) => {
		if (categories.expand) {
			return `/products?cat=${categories.expand?.child_categories_via_parent_categories.map((el: RecordModel) => el.id).join(',')}`;
		} else {
			return '/products';
		}
	};
	let categories = data.featuredCategories.map((element) => {
		return {
			label: element.label,
			image: pb.files.getUrl(element, element.image_url, { thumb: '1920x1080' }),
			link: parseChildLink(element)
		};
	});

	let isShow: boolean = false;
	const handleChange = ({ detail }: CustomEvent<ObserverEventDetails>) => {
		if (!isShow && detail.inView) isShow = true;
	};
</script>

<div
	class="bg-white min-h-screen"
	use:inview={{
		rootMargin: '-100px'
	}}
	on:inview_change={handleChange}
>
	<div class="container py-28">
		{#if isShow}
			<div
				class="flex flex-col md:!flex-row md:!justify-between md:!items-center items-start gap-6"
				transition:fade={{ duration: 500, delay: 500 }}
			>
				<div class="flex flex-col gap-2">
					<div class="text-3xl/relaxed md:!text-4xl/relaxed font-bold">
						{data.groupHeader.fourth_group_header}
					</div>
					<div class="leading-relaxed">
						{data.groupHeader.fourth_group_description}
					</div>
				</div>
				<a
					class="px-6 py-3 border border-solid border-black rounded-full hover:bg-gray-500 hover:bg-opacity-10"
					href="/products">View All Products</a
				>
			</div>
		{/if}

		<div class="mt-12 grid grid-cols-1 md:!grid-cols-2 lg:!grid-cols-4 gap-6">
			{#each categories as category, index}
				{#if isShow}
					<div
						class="relative"
						transition:fly={{ x: -200, duration: 500 + 100 * index, delay: 500 }}
					>
						<a href={category.link}>
							<div
								class="transform max-h-[380px] lg:!max-h-[260px] xl:!max-h-[380px] overflow-hidden rounded-xl"
							>
								<div class="hover:scale-125 transition-transform duration-200 rounded-xl">
									<img
										src={category.image}
										alt="category"
										class="h-[380px] lg:!h-[260px] xl:!h-[380px] w-full object-cover rounded-xl"
									/>
									<div class="absolute top-0 left-0 w-full h-full gradient-overlay rounded-xl" />
								</div>
							</div>
							<div class="absolute bottom-6 left-6 text-2xl font-semibold text-white">
								{category.label}
							</div>
						</a>
					</div>
				{/if}
			{/each}
		</div>
	</div>
</div>

<style>
	.gradient-overlay {
		background:
			linear-gradient(180deg, #00000000 45.79%, #000 100%),
			transparent 50% / cover no-repeat;
	}
</style>
