<script lang="ts">
	import mainLogo from '$lib/icons/main-logo.svg?raw';
	import closeLogo from '$lib/icons/close-logo.svg?raw';

	export let isModalOpen;
</script>

<div class="absolute top-0 left-0 bg-white w-screen min-h-screen">
	<div class="container py-8">
		<div class="flex justify-between items-center">
			<div class="max-w-56">
				{@html mainLogo}
			</div>

			<button on:click={() => (isModalOpen = false)} class="h-6 w-6">
				{@html closeLogo}
			</button>
		</div>
	</div>
</div>
