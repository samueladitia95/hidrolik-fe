<script lang="ts">
	import { page } from '$app/stores';
	import boxLogo from '$lib/icons/box-logo.svg?raw';
	import { inview } from 'svelte-inview';
	import type { PageData } from '../$types';
	import { fade, fly } from 'svelte/transition';

	let data = $page.data as PageData;

	const howToOrders = [
		{
			title: 'Browse our products',
			subTitle:
				'Visit our website or contact our sales team to explore our extensive range of hydraulic hoses tailored for various industries and applications.',
			isChatButton: false
		},
		{
			title: 'Chat our sales team',
			subTitle:
				'Visit our website or contact our sales team to explore our extensive range of hydraulic hoses tailored for various industries and applications.',
			isChatButton: true
		},
		{
			title: 'Order Processing',
			subTitle:
				'Visit our website or contact our sales team to explore our extensive range of hydraulic hoses tailored for various industries and applications.',
			isChatButton: false
		},
		{
			title: 'Shipment & Delivery',
			subTitle:
				'Visit our website or contact our sales team to explore our extensive range of hydraulic hoses tailored for various industries and applications.',
			isChatButton: false
		}
	];

	let isShow: boolean = false;
	const handleChange = ({ detail }: CustomEvent<ObserverEventDetails>) => {
		if (!isShow && detail.inView) isShow = true;
	};
</script>

<div
	class="bg-secondary w-screen min-h-screen"
	use:inview={{
		rootMargin: '-100px'
	}}
	on:inview_change={handleChange}
>
	<div class="container py-28 md:!py-56 text-white">
		<div class="xl:!flex xl:!items-center xl:!gap-40">
			{#if isShow}
				<div
					class="flex flex-col gap-6 text-left max-w-[500px] xl:!max-w-[1000px] xl:!items-center xl:!w-[1000px]"
					transition:fade={{ duration: 500, delay: 500 }}
				>
					<div class="text-3xl md:!text-5xl/relaxed font-bold">
						{data.groupHeader.fifth_group_header}
					</div>
				</div>
			{/if}

			<div class="mt-20 grid grid-cols-1 md:!grid-cols-2 gap-12 md:!gap-24">
				{#each howToOrders as order, index}
					{#if isShow}
						<div
							class="flex flex-col gap-6 items-start"
							transition:fly={{ x: -200, duration: 500 + 100 * index, delay: 500 }}
						>
							<div class="w-12 h-12">{@html boxLogo}</div>
							<div class="text-2xl font-bold">{index + 1}. {order.title}</div>
							<div class="text-sm/loose">{order.subTitle}</div>
							{#if order.isChatButton}
								<button
									class="px-6 py-3 rounded-full bg-black text-white font-semibold hover:bg-opacity-75"
									>Chat Via WhatsApp</button
								>
							{/if}
						</div>
					{/if}
				{/each}
			</div>
		</div>
	</div>
</div>
