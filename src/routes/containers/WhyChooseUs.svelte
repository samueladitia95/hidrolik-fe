<script lang="ts">
	import boxLogo from '$lib/icons/box-logo.svg?raw';
	import { inview } from 'svelte-inview';
	import { fade, fly } from 'svelte/transition';
	const reasons = [
		{
			title: 'High-Quality',
			subTitle:
				'Our hydraulic hoses are built to withstand the toughest conditions, ensuring long-lasting reliability.'
		},
		{
			title: 'Trusted & Reliable',
			subTitle:
				'Committed to building and maintaining long-term relationships through transparency and integrity.'
		},
		{
			title: 'Durability',
			subTitle:
				'Our hydraulic hoses are built to withstand the toughest conditions, ensuring long-lasting reliability.'
		},
		{
			title: 'Flexibility',
			subTitle:
				'Designed to provide versatile solutions, ensuring that we can meet the diverse needs of our customers with flexibility and efficiency.'
		}
	];

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
				<div class="text-3xl md:!text-5xl font-bold">Why Choose Us</div>
				<div class="leading-relaxed md:!max-w-xl">
					Not only the quality of the products, but we are also committed to providing the best
					services to you with our company culture.
				</div>
			</div>
		{/if}

		<div class="mt-20 grid grid-cols-1 md:!grid-cols-2 lg:!grid-cols-4 gap-12 md:!gap-24">
			{#each reasons as reason, index}
				{#if isShow}
					<div
						class="flex flex-col gap-6 md:!text-center md:!items-center"
						transition:fly={{ x: 200, duration: 500 + 100 * index, delay: 500 }}
					>
						<div class="w-12 h-12">{@html boxLogo}</div>
						<div class="text-2xl font-bold">{reason.title}</div>
						<div class="text-sm/loose">{reason.subTitle}</div>
					</div>
				{/if}
			{/each}
		</div>
	</div>
</div>
