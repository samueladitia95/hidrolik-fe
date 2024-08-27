<script lang="ts">
	import clsx from 'clsx';
	import { onMount } from 'svelte';
	import { pb } from '$lib/pocketbase';

	import Categories from './containers/Categories.svelte';

	import SearchLogo from '$lib/icons/search-logo.svg?raw';
	import FilterLogo from '$lib/icons/filter-icon.svg?raw';
	import CloseLogo from '$lib/icons/close-logo.svg?raw';

	import type { RecordModel } from 'pocketbase';
	import type { PageData } from './$types';
	import { page } from '$app/stores';
	import { goto } from '$app/navigation';
	export let data: PageData;

	let isFilterOpen = false;

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

	type Product = {
		id: string;
		name: string;
		imageUrl: string;
		description: string;
	};

	$: products = data.products.items.map((el: RecordModel): Product => {
		return {
			id: el.id,
			name: el.name,
			imageUrl: el['images_url'][0],
			description: el.description
		};
	});

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

	let selectedOrder: string;

	const handleOrder = () => {
		$page.url.searchParams.set('order', selectedOrder);
		goto($page.url, { invalidateAll: true });
	};

	let searchQuery: string;
	const handleSearch = () => {
		$page.url.searchParams.set('q', searchQuery);
		goto($page.url, { invalidateAll: true });
	};

	onMount(() => {
		const q = $page.url.searchParams.get('q');
		if (q) {
			searchQuery = q;
		}
	});
</script>

<div class="min-h-screen container">
	<div class="flex flex-col gap-6">
		<div class="text-3xl md:!text-5xl font-bold">Our Product</div>

		<!-- SEARCH -->
		<div>
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
	</div>
	<div class="my-12 lg:!grid lg:!grid-cols-4 xl:!grid-cols-6 lg:!gap-6">
		<div class="hidden lg:!block">
			<div class="text-2xl font-bold">Filters</div>
			<Categories />
		</div>
		<div class="lg:!col-span-3 xl:!col-span-5">
			<div class="w-full flex justify-between lg:!justify-end">
				<!-- FILTER BUTTON -->
				<button
					class="border-2 border-solid border-black rounded-full px-6 py-3 flex gap-3 items-center lg:!hidden"
					on:click={() => (isFilterOpen = true)}
				>
					<div class="h-6 w-6">{@html FilterLogo}</div>
					<div class="">Filter</div>
					<div class="text-sm bg-secondary text-white rounded-full px-1.5">2</div>
				</button>

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

			<div class="mt-6">
				{#if products.length}
					<div class="grid grid-cols-1 md:!grid-cols-2 lg:!grid-cols-3 gap-16">
						{#each products as product, index}
							<a href={`/products/${product.id}`}>
								<div class="flex flex-col gap-4">
									<img
										src={pb.files.getUrl(data.products.items[index], product.imageUrl)}
										alt="product"
										class="w-full object-cover rounded-sm"
									/>
									<div>
										<div class="text-lg/relaxed font-semibold text-secondary underline">
											{product.name}
										</div>
										<div class="text-sm/relaxed">{product.description}</div>
									</div>
								</div>
							</a>
						{/each}
					</div>
					<div class="w-full mt-16 flex justify-center">
						<button
							class="rounded-full border-2 border-solid border-black px-6 py-3 disabled:opacity-50"
							disabled={products.length >= data.products.totalItems}
							on:click={() => nextPage()}
						>
							View More
						</button>
					</div>
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

		<Categories />
	</div>
</div>
