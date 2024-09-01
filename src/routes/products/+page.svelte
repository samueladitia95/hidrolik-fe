<script lang="ts">
	import clsx from 'clsx';
	import { onMount } from 'svelte';
	import { pb } from '$lib/pocketbase';

	import Categories from './containers/Categories.svelte';

	import SearchLogo from '$lib/icons/search-logo.svg?raw';
	import FilterLogo from '$lib/icons/filter-icon.svg?raw';
	import CloseLogo from '$lib/icons/close-logo.svg?raw';
	import CloseCircleLogo from '$lib/icons/close-circle.svg?raw';

	import type { RecordModel } from 'pocketbase';
	import type { PageData } from './$types';
	import { page } from '$app/stores';
	import { goto } from '$app/navigation';
	import type { CategoryQuery, ParentCategory, Product } from './types';
	import { isTopbarTransparent } from '$lib/store';
	import { inview } from 'svelte-inview';
	import { fade } from 'svelte/transition';
	export let data: PageData;

	let isFilterOpen = false;

	// LIST OF PRODUCTS
	$: products = data.products.items.map((el: RecordModel): Product => {
		return {
			id: el.id,
			name: el.name,
			imageUrl: el['images_url'][0],
			description: el.description
		};
	});

	// PAGINATION
	const nextPage = () => {
		if (products.length >= data.products.totalItems) {
			return;
		}
		const queryParams = $page.url.searchParams.get('n');
		let nextPage: number = 2;
		if (queryParams) {
			const currentPage = Number(queryParams);
			nextPage = currentPage + 1;
		}
		$page.url.searchParams.set('n', String(nextPage));
		goto($page.url, { invalidateAll: true });
	};

	// ORDERS
	const orders = [
		// {
		// 	label: 'Best Seller',
		// 	value: 'best-seller'
		// },
		{
			label: 'Newest',
			value: '+created'
		},
		{
			label: 'Oldest',
			value: '-created'
		}
	];
	let selectedOrder: string;
	const handleOrder = () => {
		$page.url.searchParams.set('order', selectedOrder);
		goto($page.url, { invalidateAll: true });
	};

	// SEARCH
	let searchQuery: string;
	const handleSearch = () => {
		$page.url.searchParams.set('q', searchQuery);
		goto($page.url, { invalidateAll: true });
	};

	// CATEGORIES FILTER
	let categoriesQueries: CategoryQuery[] = [];
	$: filters = data.categories.items.map((element) => {
		const returnObject = {
			parent_label: element.label,
			parent_id: element.id,
			isOpen: true
		} as ParentCategory;

		if (element.expand) {
			returnObject.children = element.expand.child_categories_via_parent_categories.map(
				(element: RecordModel) => {
					return {
						child_label: element.label,
						child_id: element.id
					};
				}
			);
		}

		return returnObject;
	});

	const resetFilterCategories = () => {
		categoriesQueries = [];
		$page.url.searchParams.delete('cat');
		goto($page.url, { invalidateAll: true });
	};

	const applyFilterCategories = (categoriesQueries: CategoryQuery[]) => {
		$page.url.searchParams.set('cat', categoriesQueries.map((el) => el.id).join(','));
		isFilterOpen = false;
		goto($page.url, { invalidateAll: true });
	};

	onMount(() => {
		isTopbarTransparent.set(false);
		// SEARCH QUERY
		const q = $page.url.searchParams.get('q');
		if (q) {
			searchQuery = q;
		}

		// CATEGORIES QUERY
		const queryParams = $page.url.searchParams.get('cat');
		if (queryParams) {
			let categoriesIds = queryParams.split(',');
			categoriesIds.forEach((el) => {
				filters.forEach((el_parent) => {
					const foundCat = el_parent.children.find((el_child) => {
						return el_child.child_id === el;
					});
					if (foundCat) {
						categoriesQueries = [
							...categoriesQueries,
							{ label: foundCat.child_label, id: foundCat.child_id }
						];
					}
				});
			});
		}
	});

	let isShow: boolean = false;
	const handleChange = ({ detail }: CustomEvent<ObserverEventDetails>) => {
		if (!isShow && detail.inView) isShow = true;
	};
</script>

<div
	class="min-h-screen container"
	use:inview={{
		rootMargin: '-100px'
	}}
	on:inview_change={handleChange}
>
	<div class="flex flex-col gap-6">
		{#if isShow}
			<div class="text-3xl md:!text-5xl font-bold" transition:fade={{ duration: 500, delay: 0 }}>
				Our Product
			</div>
		{/if}

		<!-- SEARCH -->

		{#if isShow}
			<div transition:fade={{ duration: 500, delay: 0 }}>
				<div class="flex gap-2 px-4 py-2.5 border border-solid border-black rounded">
					<div class="h-6 w-6">
						{@html SearchLogo}
					</div>
					<form on:submit|preventDefault={() => handleSearch()} class="w-full">
						<input
							placeholder="Search Product Here..."
							class="w-full outline-none"
							bind:value={searchQuery}
							on:blur={handleSearch}
						/>
					</form>
				</div>
			</div>
		{/if}
	</div>

	<div class="my-12 lg:!grid lg:!grid-cols-4 xl:!grid-cols-6 lg:!gap-6">
		{#if isShow}
			<div class="hidden lg:!block" transition:fade={{ duration: 500, delay: 0 }}>
				<div class="text-2xl font-bold">Filters</div>
				<Categories
					mode="change"
					bind:filters
					bind:categoriesQueries
					{resetFilterCategories}
					{applyFilterCategories}
				/>
			</div>
		{/if}
		<div class="lg:!col-span-3 xl:!col-span-5">
			{#if isShow}
				<div
					class="w-full flex justify-between items-center"
					transition:fade={{ duration: 500, delay: 0 }}
				>
					<!-- FILTER BUTTON -->
					<button
						class="border-2 border-solid border-black rounded-full px-6 py-3 flex gap-3 items-center lg:!hidden"
						on:click={() => (isFilterOpen = true)}
					>
						<div class="h-6 w-6">{@html FilterLogo}</div>
						<div class="">Filter</div>
						{#if categoriesQueries.length}
							<div class="text-sm bg-secondary text-white rounded-full px-1.5">
								{categoriesQueries.length}
							</div>
						{/if}
					</button>

					<!-- FILTER LIST -->
					<div class="hidden lg:!flex gap-2">
						{#each categoriesQueries as catQuery}
							<div class="px-3 py-1.5 bg-secondary text-white rounded-full flex items-center gap-1">
								<div class="text-sm">{catQuery.label}</div>
								<button
									class="w-4 h-4"
									on:click={() => {
										categoriesQueries = categoriesQueries.filter((el) => el.id !== catQuery.id);
										applyFilterCategories(categoriesQueries);
									}}
								>
									{@html CloseCircleLogo}
								</button>
							</div>
						{/each}
						{#if categoriesQueries.length}
							<button on:click={() => resetFilterCategories()}> Clear all </button>
						{/if}
					</div>

					<!-- ORDER BY -->
					<div class="flex gap-2 items-center">
						<div class="font-bold">Sort by</div>
						<select
							class="p-3 border border-solid border-black rounded outline-none"
							bind:value={selectedOrder}
							on:change={handleOrder}
						>
							{#each orders as order}
								<option value={order.value}>{order.label}</option>
							{/each}
						</select>
					</div>
				</div>
			{/if}

			<div class="mt-6">
				{#if products.length}
					<div class="grid grid-cols-1 md:!grid-cols-2 lg:!grid-cols-3 gap-y-16 gap-x-6">
						{#each products as product, index}
							{#if isShow}
								<a
									href={`/products/${product.id}`}
									transition:fade={{ duration: 500, delay: 0 + index * 100 }}
								>
									<div class="flex flex-col gap-4">
										<img
											src={pb.files.getUrl(data.products.items[index], product.imageUrl)}
											alt="product"
											class="w-full object-cover rounded-sm"
										/>
										<div>
											<div
												class="text-lg/relaxed font-semibold hover:text-secondary hover:underline"
											>
												{product.name}
											</div>
											<div class="text-sm/relaxed">{product.description}</div>
										</div>
									</div>
								</a>
							{/if}
						{/each}
					</div>
					{#if products.length > 9}
						<div class="w-full mt-16 flex justify-center">
							<button
								class="rounded-full border-2 border-solid border-black px-6 py-3 disabled:opacity-50"
								disabled={products.length >= data.products.totalItems}
								on:click={() => nextPage()}
							>
								View More
							</button>
						</div>
					{/if}
				{:else}
					<div class="py-60 flex flex-col justify-center items-center gap-2">
						<div class="font-semibold">No result found</div>
						<div class="text-sm">We can’t find any item matching your search</div>
					</div>
				{/if}
			</div>
		</div>
	</div>
</div>

<!-- Filters Modal -->
<div class="lg:!hidden">
	<div
		class={clsx(
			'top-0 left-0 z-40 bg-black !bg-opacity-50 h-screen w-screen',
			isFilterOpen ? 'fixed' : 'hidden'
		)}
		on:click={() => (isFilterOpen = false)}
		aria-hidden="true"
	/>
	<div
		class={clsx(
			'fixed top-0 left-0 z-50 max-w-xs md:max-w-lg w-full bg-white h-screen pt-10 px-6',
			'transform transition-transform duration-500',
			isFilterOpen ? 'translate-x-0' : '-translate-x-full'
		)}
	>
		<div class="flex justify-between">
			<div class="text-2xl font-bold">Filters</div>
			<button class="h-6 w-6" on:click={() => (isFilterOpen = false)}>
				{@html CloseLogo}
			</button>
		</div>

		<Categories
			bind:categoriesQueries
			mode="submit"
			bind:filters
			{resetFilterCategories}
			{applyFilterCategories}
		/>
	</div>
</div>
