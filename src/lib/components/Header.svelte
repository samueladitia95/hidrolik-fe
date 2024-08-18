<script lang="ts">
	import clsx from 'clsx';

	import menuIcon from '$lib/icons/menu-icon.svg?raw';
	import mainLogo from '$lib/icons/main-logo.svg?raw';
	import HeaderModal from './HeaderModal.svelte';
	import type { MenuItem } from '$lib/type';
	import { isTopbarTransparent } from '$lib/store';

	let isModalOpen = false;
	let isTransparent = false;

	isTopbarTransparent.subscribe((value) => (isTransparent = value));

	const navbarItems: MenuItem[] = [
		{
			label: 'About Us',
			isOpen: false,
			link: '/about-us'
		},
		// {
		// 	label: 'Service',
		// 	isOpen: false,
		// 	link: 'https://www.google.com'
		// },
		{
			label: 'Products',
			isOpen: false,
			link: '/products',
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

<div
	class={clsx(
		'fixed top-0 left-0 w-full z-40',
		isTransparent ? 'bg-none text-white' : 'bg-white text-black'
	)}
>
	<div class="w-full">
		<div class="container py-8 flex justify-between items-center">
			<!-- Main Logo -->
			<a href="/">
				<div class="max-w-56 cursor-pointer">
					{@html mainLogo}
				</div>
			</a>

			<div class="flex items-center gap-8">
				<!-- List of navbar item -->
				<div class="hidden lg:!flex lg:!justify-right lg:!gap-8">
					{#each navbarItems as item}
						<a href={item.link} class="cursor-pointer">
							<div class="font-medium">{item.label}</div>
						</a>
					{/each}
				</div>

				<div class="flex gap-8 items-center">
					<!-- Download Button -->
					<div class="hidden md:!block">
						<button
							class="bg-secondary text-white font-semibold px-6 py-3 rounded-full hover:bg-opacity-85"
							>Download Catalog</button
						>
					</div>

					<!-- Menu Icon -->
					<button on:click={() => (isModalOpen = true)} class="h-6 w-6 md:!h-8 md:!w-8 lg:!hidden">
						{@html menuIcon}
					</button>
				</div>
			</div>
		</div>
	</div>

	<HeaderModal bind:isModalOpen {navbarItems} />
</div>
