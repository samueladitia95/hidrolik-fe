<script lang="ts">
	import type { MenuItem } from '$lib/type';

	import mainLogo from '$lib/icons/main-logo.svg?raw';
	import facebookLogo from '$lib/icons/facebook-logo.svg?raw';
	import instagramLogo from '$lib/icons/instagram-logo.svg?raw';
	import linkedinLogo from '$lib/icons/linkedin-logo.svg?raw';

	const navbarItems = [
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
			link: 'https://www.google.com'
		},
		{
			label: 'Contact Us',
			isOpen: false,
			link: 'https://www.google.com'
		},
		{
			label: 'Download Catalog',
			isOpen: false,
			link: 'https://www.google.com'
		}
	];
</script>

<div class="bg-black py-10 text-white">
	<div class="container">
		<div class="flex flex-col gap-6">
			<div class="flex flex-col gap-8 lg:flex-row lg:w-full lg:justify-between">
				<div class="max-w-56 md:max-w-[347px]">
					{@html mainLogo}
				</div>
				<div class="flex flex-col md:flex-row md:justify-between md:items-center gap-6">
					<div class="grid grid-cols-2 md:flex gap-6 w-full">
						{#each navbarItems as navbarItem}
							<div class="text-sm font-semibold">{navbarItem.label}</div>
						{/each}
					</div>
					<div class="flex gap-6">
						<div class="h-8 w-8">
							{@html facebookLogo}
						</div>
						<div class="h-8 w-8">
							{@html instagramLogo}
						</div>
						<div class="h-8 w-8">
							{@html linkedinLogo}
						</div>
					</div>
				</div>
			</div>
			<div class="w-full border-t border-solid border-white" />
			<div class="text-xs/relaxed">© 2024 Hammerspir. All rights reserved.</div>
		</div>
	</div>
</div>
