<script lang="ts">
	import ChevronLogo from '$lib/icons/chevron-logo.svg?raw';

	import type { PageData } from './$types';
	export let data: PageData;
</script>

<div class="container">
	<div>
		<!-- BREADCRUMB -->
		<div class="text-xs flex items-center gap-1">
			<div>Product</div>
			<div class="h-4 w-4 -rotate-90">
				{@html ChevronLogo}
			</div>
			<div>Industrial Cable</div>
			<div class="h-4 w-4 -rotate-90">
				{@html ChevronLogo}
			</div>
			<div class="font-semibold">{data.product.name}</div>
		</div>

		<div class="mt-6 flex flex-col gap-3">
			<div class="text-3xl font-bold">
				{data.product.name}
			</div>
			<div class="font-bold">
				{data.product.description}
			</div>
		</div>
	</div>
</div>
