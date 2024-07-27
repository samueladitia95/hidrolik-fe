<script lang="ts">
	import menuIcon from '$lib/icons/menu-icon.svg?raw';
	import mainLogo from '$lib/icons/main-logo.svg?raw';
	import HeaderModal from './HeaderModal.svelte';
	import type { MenuItem } from '$lib/type';

	let isModalOpen = true;
	const navbarItems: MenuItem[] = [
		{
			label: 'About Us',
			isOpen: false,
			link: 'https://www.google.com'
		},
		{
			label: 'Service',
			isOpen: false,
			link: 'https://www.google.com'
		},
		{
			label: 'Products',
			isOpen: false,
			link: 'https://www.google.com',
			childMenutItems: [
				{
					label: 'Industrial Cable',
					link: 'https://www.google.com'
				},
				{
					label: 'Hydraulic Cable',
					link: 'https://www.google.com'
				},
				{
					label: 'Industrial Connector',
					link: 'https://www.google.com'
				},
				{
					label: 'Hydraulic Connector',
					link: 'https://www.google.com'
				},
				{
					label: 'Hydraulic Pipe',
					link: 'https://www.google.com'
				}
			]
		},
		{
			label: 'Contact Us',
			isOpen: false,
			link: 'https://www.google.com'
		}
	];
</script>

<div class="relative">
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

			<!-- List of navbar item -->
			<div class="hidden">
				{#each navbarItems as item}
					<div>
						<div>{item.label}</div>
					</div>
				{/each}
			</div>
		</div>
	</div>

	<HeaderModal bind:isModalOpen {navbarItems} />
</div>
