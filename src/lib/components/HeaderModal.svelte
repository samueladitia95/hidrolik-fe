<script lang="ts">
	import mainLogo from '$lib/icons/main-logo.svg?raw';
	import closeLogo from '$lib/icons/close-logo.svg?raw';
	import chevronLogo from '$lib/icons/chevron-logo.svg?raw';

	import facebookLogo from '$lib/icons/facebook-logo.svg?raw';
	import instagramLogo from '$lib/icons/instagram-logo.svg?raw';
	import linkedinLogo from '$lib/icons/linkedin-logo.svg?raw';

	import type { MenuItem } from '$lib/type';

	export let isModalOpen;
	export let navbarItems: MenuItem[];
</script>

<div class="absolute top-0 left-0 bg-white w-screen min-h-screen">
	<div class="container py-8 flex flex-col min-h-screen">
		<div class="flex justify-between items-center">
			<div class="max-w-56">
				{@html mainLogo}
			</div>

			<button on:click={() => (isModalOpen = false)} class="h-6 w-6">
				{@html closeLogo}
			</button>
		</div>

		<div class="flex-grow flex flex-col justify-between">
			<div class="pt-8 flex flex-col gap-8 items-start w-full">
				{#each navbarItems as item}
					<div class="w-full">
						<div class="flex w-full justify-between">
							<div class="text-2xl/normal font-light">{item.label}</div>
							{#if item.childMenutItems}
								<button class="w-8 h-8" on:click={() => (item.isOpen = !item.isOpen)}>
									{@html chevronLogo}
								</button>
							{/if}
						</div>
						{#if item.childMenutItems && item.isOpen}
							<div class="flex flex-col gap-4 mt-4">
								{#each item.childMenutItems as childItem}
									<div class="text-xl font-light">{childItem.label}</div>
								{/each}
							</div>
						{/if}
					</div>
				{/each}

				<button class="bg-secondary text-white font-semibold px-6 py-3 rounded-full"
					>Download Catalog</button
				>
			</div>

			<div class="pt-8 flex flex-col gap-4">
				<div class="flex gap-6">
					<div class="h-8 w-8 text-black">
						{@html facebookLogo}
					</div>
					<div class="h-8 w-8 text-black">
						{@html instagramLogo}
					</div>
					<div class="h-8 w-8 text-black">
						{@html linkedinLogo}
					</div>
				</div>

				<div class="text-sm/normal">© 2024 Hammerspir. All rights reserved.</div>
			</div>
		</div>
	</div>
</div>
