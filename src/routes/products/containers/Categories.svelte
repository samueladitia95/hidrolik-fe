<script lang="ts">
	import clsx from 'clsx';
	import { page } from '$app/stores';
	import type { PageData } from '../$types';
	import type { RecordModel } from 'pocketbase';

	import ChevronLogo from '$lib/icons/chevron-logo.svg?raw';

	let data: PageData = $page.data as PageData;
	let filters = data.categories.items.map((element) => {
		return {
			parent_label: element.label,
			parent_id: element.id,
			isOpen: false,
			children:
				element.expand?.child_categories_via_parent_categories.map((element: RecordModel) => {
					return {
						child_label: element.label,
						child_id: element.id,
						isActiveFilter: false
					};
				}) || []
		};
	});
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
										name={childFilter.child_label}
										type="checkbox"
										class="border-2 border-solid border-black border-opacity-55 rounded h-5 w-5"
										bind:checked={childFilter.isActiveFilter}
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
		<button class="px-6 py-3 rounded-full bg-black text-white font-semibold">Apply</button>
		<button class="px-6 py-3 font-semibold">Reset All</button>
	</div>
</div>
