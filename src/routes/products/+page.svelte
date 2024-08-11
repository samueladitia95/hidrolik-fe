<script lang="ts">
	import clsx from 'clsx';

	import Categories from './containers/Categories.svelte';

	import SearchLogo from '$lib/icons/search-logo.svg?raw';
	import FilterLogo from '$lib/icons/filter-icon.svg?raw';
	import CloseLogo from '$lib/icons/close-logo.svg?raw';

	let isFilterOpen = true;

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
	<div class="w-full flex justify-between mt-12">
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
