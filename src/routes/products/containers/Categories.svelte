<script lang="ts">
	import clsx from 'clsx';

	import ChevronLogo from '$lib/icons/chevron-logo.svg?raw';
	import type { CategoryQuery, ChildCategory, ParentCategory } from '../types';

	export let mode: 'change' | 'submit' = 'submit';
	export let filters: ParentCategory[];

	export let categoriesQueries: CategoryQuery[];
	export let resetFilterCategories: () => void;
	export let applyFilterCategories: (categoriesQueries: CategoryQuery[]) => void;

	const isChecked = (childFilter: ChildCategory) => {
		return categoriesQueries.some((el) => el.id === childFilter.child_id);
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
										checked={isChecked(childFilter)}
										on:change={() => {
											if (isChecked(childFilter)) {
												categoriesQueries = categoriesQueries.filter(
													(el) => el.id !== childFilter.child_id
												);
											} else {
												categoriesQueries = [
													...categoriesQueries,
													{
														label: childFilter.child_label,
														id: childFilter.child_id
													}
												];
											}

											if (mode === 'change') {
												applyFilterCategories(categoriesQueries);
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
	<div class="mt-4 flex flex-col gap-2 mb-6 xl:!hidden">
		<button
			class="px-6 py-3 rounded-full bg-black text-white font-semibold"
			on:click={() => applyFilterCategories(categoriesQueries)}>Apply</button
		>
		<button class="px-6 py-3 font-semibold" on:click={() => resetFilterCategories()}>
			Reset All
		</button>
	</div>
</div>
