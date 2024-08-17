<script lang="ts">
	import clsx from 'clsx';
	import { onMount } from 'svelte';

	import { page } from '$app/stores';
	import type { PageData } from '../$types';
	import type { RecordModel } from 'pocketbase';

	import ChevronLogo from '$lib/icons/chevron-logo.svg?raw';
	import { goto } from '$app/navigation';

	type Child = {
		child_id: string;
		child_label: string;
	};

	type Parent = {
		parent_id: string;
		parent_label: string;
		isOpen: boolean;
		children: Child[];
	};

	let data: PageData = $page.data as PageData;
	$: filters = data.categories.items.map((element) => {
		const returnObject = {
			parent_label: element.label,
			parent_id: element.id,
			isOpen: true
		} as Parent;

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

	let searchQueries: string[] = [];
	onMount(() => {
		const queryParams = $page.url.searchParams.get('cat');
		if (queryParams) {
			searchQueries = queryParams.split(',');
		}
	});

	const applyFilter = (searchQueries: string[]) => {
		$page.url.searchParams.set('cat', searchQueries.join(','));
		goto($page.url, { invalidateAll: true });
	};

	const resetFilter = () => {
		searchQueries = [];
		$page.url.searchParams.delete('cat');
		goto($page.url);
	};
</script>

<div class="h-full max-h-full overflow-auto py-6 flex flex-col justify-between">
	<div>
		<div class="text-lg font-semibold py-2">Categories</div>
		<div class="flex flex-col gap-2">
			{#each filters as filter}
				{#if filter.children.length}
					<div class="py-2">
						<div class="flex justify-between">
							<div>{filter.parent_label}</div>
							<button
								class={clsx(
									'h-6 w-6',
									'transition-maxHeight duration-200',
									filter.isOpen ? 'rotate-180' : 'rotate-0'
								)}
								on:click={() => (filter.isOpen = !filter.isOpen)}
							>
								{@html ChevronLogo}
							</button>
						</div>

						<div
							class={clsx(
								'pl-4 flex flex-col gap-4 mt-4',
								'transition-all duration-200  overflow-hidden',
								filter.isOpen ? 'max-h-96' : 'max-h-0'
							)}
						>
							{#each filter.children as childFilter}
								<div class="flex gap-2 items-center">
									<input
										type="checkbox"
										class="border-2 border-solid border-black border-opacity-55 rounded h-5 w-5"
										checked={searchQueries.includes(childFilter.child_id)}
										on:change={() => {
											if (searchQueries.includes(childFilter.child_id)) {
												searchQueries = searchQueries.filter((el) => el !== childFilter.child_id);
											} else {
												searchQueries = [...searchQueries, childFilter.child_id];
											}
										}}
									/>
									<div class="text-sm">{childFilter.child_label}</div>
								</div>
							{/each}
						</div>
					</div>
				{/if}
			{/each}
		</div>
	</div>
	<div class="mt-4 flex flex-col gap-2 mb-6">
		<button
			class="px-6 py-3 rounded-full bg-black text-white font-semibold"
			on:click={() => applyFilter(searchQueries)}>Apply</button
		>
		<button class="px-6 py-3 font-semibold" on:click={() => resetFilter()}>Reset All</button>
	</div>
</div>
