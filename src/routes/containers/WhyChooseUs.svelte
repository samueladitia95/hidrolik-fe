<script lang="ts">
	import { page } from '$app/stores';
	import boxLogo from '$lib/icons/box-logo.svg?raw';
	import { inview } from 'svelte-inview';
	import type { PageData } from '../$types';
	import { fade, fly } from 'svelte/transition';
	import { pb } from '$lib/pocketbase';

	let data = $page.data as PageData;

	let chooseUs = data.chooseUs.map((e) => {
		return {
			icon: pb.files.getUrl(e, e.icon),
			label: e.label,
			description: e.description
		};
	});

	let isShow: boolean = false;
	const handleChange = ({ detail }: CustomEvent<ObserverEventDetails>) => {
		if (!isShow && detail.inView) isShow = true;
	};
</script>

<div
	class="bg-gradient-to-r from-[#05374F] to-[#08222F] w-screen min-h-screen lg:!flex lg:!flex-col lg:!justify-center"
	use:inview={{
		rootMargin: '-100px'
	}}
	on:inview_change={handleChange}
>
	<div class="container py-28 text-white">
		{#if isShow}
			<div
				class="flex flex-col gap-6 md:!items-center md:!text-center"
				transition:fade={{ duration: 500, delay: 500 }}
			>
				<div class="text-3xl md:!text-5xl font-bold">{data.groupHeader.second_group_header}</div>
				<div class="leading-relaxed md:!max-w-xl">
					{data.groupHeader.second_group_description}
				</div>
			</div>
		{/if}

		<div class="mt-20 grid grid-cols-1 md:!grid-cols-2 lg:!grid-cols-4 gap-12 md:!gap-24">
			{#each chooseUs as choose, index}
				{#if isShow}
					<div
						class="flex flex-col gap-6 md:!text-center md:!items-center"
						transition:fly={{ x: 200, duration: 500 + 100 * index, delay: 500 }}
					>
						<div class="w-12 h-12">
							<img src={choose.icon} alt="icon" />
						</div>
						<div class="text-2xl font-bold">{choose.label}</div>
						<div class="text-sm/loose">{choose.description}</div>
					</div>
				{/if}
			{/each}
		</div>
	</div>
</div>
