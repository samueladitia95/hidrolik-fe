<script lang="ts">
	import mainLogo from '$lib/icons/main-logo.svg?raw';
	import facebookLogo from '$lib/icons/facebook-logo.svg?raw';
	import instagramLogo from '$lib/icons/instagram-logo.svg?raw';
	import linkedinLogo from '$lib/icons/linkedin-logo.svg?raw';

	export let downloadFileUrl: string;
	const navbarItems = [
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
			link: '/products'
		},
		{
			label: 'Contact Us',
			isOpen: false,
			link: '/#contact-us-homepage'
		},
		{
			label: 'Download Catalog',
			isOpen: false,
			isDownload: true,
			link: downloadFileUrl
		}
	];

	const downloadCatalog = async () => {
		const a = document.createElement('a');
		a.href = await toDataURL(downloadFileUrl);
		a.download = `catalog-hidrolik.pdf`;
		document.body.appendChild(a);
		a.click();
		document.body.removeChild(a);
	};

	const toDataURL = async (url: string) => {
		const blob = await fetch(url).then((res) => res.blob());
		return URL.createObjectURL(blob);
	};

	export let facebookLink: string;
	export let instagramLink: string;
	export let linkedinLink: string;
</script>

<div class="bg-black py-10 text-white">
	<div class="container">
		<div class="flex flex-col gap-6">
			<div class="flex flex-col gap-8 lg:!flex-row lg:!w-full lg:!justify-between">
				<a class="max-w-56 md:!max-w-[347px]" href="/">
					{@html mainLogo}
				</a>
				<div class="flex flex-col md:!flex-row md:!justify-between md:!items-center gap-6">
					<div class="grid grid-cols-2 md:!flex gap-6 w-full">
						{#each navbarItems as navbarItem}
							{#if navbarItem.isDownload}
								<button on:click={() => downloadCatalog()} class="text-sm font-semibold"
									>{navbarItem.label}</button
								>
							{:else}
								<a href={navbarItem.link} class="text-sm font-semibold">{navbarItem.label}</a>
							{/if}
						{/each}
					</div>
					<div class="flex gap-6">
						<a class="h-8 w-8" href={facebookLink} target="_blank">
							{@html facebookLogo}
						</a>
						<a class="h-8 w-8" href={instagramLink} target="_blank">
							{@html instagramLogo}
						</a>
						<a class="h-8 w-8" href={linkedinLink} target="_blank">
							{@html linkedinLogo}
						</a>
					</div>
				</div>
			</div>
			<div class="w-full border-t border-solid border-white" />
			<div class="text-xs/relaxed">© 2024 Hammerspir. All rights reserved.</div>
		</div>
	</div>
</div>
