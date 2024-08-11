<script lang="ts">
	import clsx from 'clsx';

	import Categories from './containers/Categories.svelte';

	import SearchLogo from '$lib/icons/search-logo.svg?raw';
	import FilterLogo from '$lib/icons/filter-icon.svg?raw';
	import CloseLogo from '$lib/icons/close-logo.svg?raw';

	let isFilterOpen = false;

	const orders = [
		{
			label: 'Best Seller',
			value: 'best-seller'
		},
		{
			label: 'Newest',
			value: 'new'
		},
		{
			label: 'Oldest',
			value: 'old'
		}
	];

	type Product = {
		id: string;
		name: string;
		imageUrl: string;
		description: string;
	};

	const products: Product[] = [];
</script>

<div class="min-h-screen container">
	<div class="flex flex-col gap-6">
		<div class="text-3xl font-bold">Our Product</div>

		<!-- SEARCH -->
		<div>
			<div class="flex gap-2 px-4 py-2.5 border border-solid border-black rounded">
				<div class="h-6 w-6">
					{@html SearchLogo}
				</div>
				<input placeholder="Search Product Here..." class="w-full outline-none" />
			</div>
		</div>
	</div>
	<div class="my-12">
		<div class="w-full flex justify-between">
			<!-- FILTER BUTTON -->
			<button
				class="border-2 border-solid border-black rounded-full px-6 py-3 flex gap-3"
				on:click={() => (isFilterOpen = true)}
			>
				<div class="h-6 w-6">{@html FilterLogo}</div>
				<div class="">Filter</div>
			</button>

			<!-- ORDER BY -->
			<div class="flex gap-2 items-center">
				<div class="font-bold">Sort by</div>
				<select class="p-3 border border-solid border-black rounded outline-none">
					{#each orders as order}
						<option>{order.label}</option>
					{/each}
				</select>
			</div>
		</div>

		<div class="mt-6">
			{#if products.length}
				<div class="flex flex-col gap-16">
					{#each products as product}
						<div class="flex flex-col gap-4">
							<img
								src={product.imageUrl}
								alt="product"
								class="w-full object-cover max-h-80 rounded-sm"
							/>
							<div>
								<div class="text-lg/relaxed font-semibold text-secondary underline">
									{product.name}
								</div>
								<div class="text-sm/relaxed">{product.description}</div>
							</div>
						</div>
					{/each}
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

<!-- Filters Modal -->
<div class="lg:!hidden">
	<div
		class={clsx(
			'top-0 left-0 z-40 bg-black bg-opacity-50 h-screen w-screen',
			isFilterOpen ? 'fixed' : 'hidden'
		)}
	/>
	<div
		class={clsx(
			'fixed top-0 left-0 z-50 max-w-xs w-full bg-white h-screen pt-10 px-6',
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
