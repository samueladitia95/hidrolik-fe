<script lang="ts">
	import { isTopbarTransparent } from '$lib/store';
	import { onMount } from 'svelte';

	onMount(() => {
		isTopbarTransparent.set(false);
	});
</script>

<div class="pt-24 md:!pt-36">
	<slot />
</div>
