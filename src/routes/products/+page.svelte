<script lang="ts">
	import SearchLogo from '$lib/icons/search-logo.svg?raw';
</script>

<div class="min-h-screen container">
	<div class="flex flex-col gap-6">
		<div class="text-3xl font-bold">Our Product</div>
		<div>
			<div class="flex gap-2 px-4 py-2.5 border border-solid border-black rounded">
				<div class="h-6 w-6">
					{@html SearchLogo}
				</div>
				<input placeholder="Search Product Here..." class="w-full outline-none" />
			</div>
		</div>
	</div>
</div>
