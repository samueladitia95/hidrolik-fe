<script lang="ts">
	import '../app.css';
	import Header from '$lib/components/Header.svelte';
	import Footer from '$lib/components/Footer.svelte';

	import type { PageData } from './$types';
	import { pb } from '$lib/pocketbase';
	export let data: PageData;
</script>

<div class="font-inter">
	<Header downloadFileUrl={pb.getFileUrl(data.catalogs, data.catalogs.File)} />
	<slot />
	<Footer downloadFileUrl={pb.getFileUrl(data.catalogs, data.catalogs.File)} />
</div>
