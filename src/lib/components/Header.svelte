<script lang="ts">
	import menuIcon from '$lib/icons/menu-icon.svg?raw';
	import mainLogo from '$lib/icons/main-logo.svg?raw';
	import HeaderModal from './HeaderModal.svelte';
	import type { MenuItem } from '$lib/type';

	let isModalOpen = true;
	const navbarItems: MenuItem[] = [
		{
			label: 'About Us',
			isOpen: false
		},
		{
			label: 'Service',
			isOpen: false
		},
		{
			label: 'Products',
			isOpen: false,
			childMenutItems: [
				{
					label: 'Industrial Cable'
				},
				{
					label: 'Hydraulic Cable'
				},
				{
					label: 'Industrial Connector'
				},
				{
					label: 'Hydraulic Connector'
				},
				{
					label: 'Hydraulic Pipe'
				}
			]
		},
		{
			label: 'Contact Us',
			isOpen: false
		}
	];
</script>

<div class="w-full">
	<div class="container py-8 flex justify-between items-start">
		<!-- Main Logo -->
		<div class="max-w-56">
			{@html mainLogo}
		</div>

		<!-- Menu Icon -->
		<button on:click={() => (isModalOpen = true)} class="h-6 w-6">
			{@html menuIcon}
		</button>

		<div class="hidden">
			{#each navbarItems as item}
				<div>
					<div>{item.label}</div>
				</div>
			{/each}
		</div>
	</div>
</div>

{#if isModalOpen}
	<HeaderModal bind:isModalOpen {navbarItems} />
{/if}
