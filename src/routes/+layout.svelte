<script lang="ts">
	import '../app.css';
	import Header from '$lib/components/Header.svelte';
	import Footer from '$lib/components/Footer.svelte';

	import type { PageData } from './$types';
	import { pb } from '$lib/pocketbase';
	import type { RecordModel } from 'pocketbase';
	export let data: PageData;

	const parseChildLink = (categories: RecordModel) => {
		if (categories.expand) {
			return `/products?cat=${categories.expand?.child_categories_via_parent_categories.map((el: RecordModel) => el.id).join(',')}`;
		} else {
			return '/products';
		}
	};
</script>

<div class="font-inter">
	<Header
		downloadFileUrl={pb.getFileUrl(data.catalogs, data.catalogs.File)}
		childCategories={data.featuredCategories.map((el) => {
			return {
				label: el.label,
				link: parseChildLink(el)
			};
		})}
	/>
	<slot />
	<Footer
		downloadFileUrl={pb.getFileUrl(data.catalogs, data.catalogs.File)}
		facebookLink={data.contactUs.facebook_url}
		instagramLink={data.contactUs.Instagram_url}
		linkedinLink={data.contactUs.linkedin_url}
	/>
</div>
