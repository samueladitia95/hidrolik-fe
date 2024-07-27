<script lang="ts">
	import menuIconBlack from '$lib/icons/menu-icon-black.svg';
	import mainLogoBlack from '$lib/icons/main-logo-black.svg';
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
		<div>
			<img src={mainLogoBlack} alt="main-logo" class="max-w-56" />
		</div>

		<div>
			<img src={menuIconBlack} alt="icon" class="h-6 w-6" />
		</div>

		<div class="hidden">
			{#each navbarItems as item}
				<div>
					<div>{item.label}</div>
				</div>
			{/each}
		</div>
	</div>
</div>
