<script lang="ts">
	import menuIcon from '$lib/icons/menu-icon.svg?raw';
	import mainLogo from '$lib/icons/main-logo.svg?raw';
	import HeaderModal from './HeaderModal.svelte';

	let isModalOpen = false;
	const navbarItems = [
		{
			label: 'About Us'
		},
		{
			label: 'Service'
		},
		{
			label: 'Products'
		},
		{
			label: 'Contact Us'
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
	<HeaderModal bind:isModalOpen />
{/if}
