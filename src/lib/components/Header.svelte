<script lang="ts">
	import menuIcon from '$lib/icons/menu-icon.svg?raw';
	import mainLogo from '$lib/icons/main-logo.svg?raw';
	import HeaderModal from './HeaderModal.svelte';
	import type { MenuItem } from '$lib/type';

	let isModalOpen = false;
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
		<div class="container py-8 flex justify-between items-center">
			<!-- Main Logo -->
			<div class="max-w-56">
				{@html mainLogo}
			</div>

			<div class="flex items-center gap-8">
				<!-- List of navbar item -->
				<div class="hidden lg:flex lg:justify-right lg:gap-8">
					{#each navbarItems as item}
						<div>
							<div class="font-medium">{item.label}</div>
						</div>
					{/each}
				</div>

				<div class="flex gap-8 items-center">
					<!-- Download Button -->
					<div class="hidden md:block">
						<button class="bg-secondary text-white font-semibold px-6 py-3 rounded-full"
							>Download Catalog</button
						>
					</div>

					<!-- Menu Icon -->
					<button on:click={() => (isModalOpen = true)} class="h-6 w-6 md:h-8 md:w-8 lg:hidden">
						{@html menuIcon}
					</button>
				</div>
			</div>
		</div>
	</div>

	<HeaderModal bind:isModalOpen {navbarItems} />
</div>
