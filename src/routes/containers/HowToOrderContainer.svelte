<script lang="ts">
	import boxLogo from '$lib/icons/box-logo.svg?raw';
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
</script>

<div class="bg-secondary w-screen">
	<div class="container py-28 md:!py-56 text-white">
		<div class="xl:!flex xl:!items-center xl:!gap-40">
			<div class="flex flex-col gap-6 items-center md:!text-center xl:!text-left xl:!w-[1000px]">
				<div class="text-3xl md:!text-5xl/relaxed font-bold">How to order our products</div>
			</div>

			<div class="mt-20 grid grid-cols-1 md:!grid-cols-2 gap-12 md:!gap-24">
				{#each howToOrders as order, index}
					<div class="flex flex-col gap-6 items-start">
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
				{/each}
			</div>
		</div>
	</div>
</div>
