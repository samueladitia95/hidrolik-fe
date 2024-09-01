<script lang="ts">
	import clsx from 'clsx';
	import chevronLogo from '$lib/icons/chevron-logo.svg?raw';

	import { page } from '$app/stores';
	import type { PageData } from '../$types';
	import { inview } from 'svelte-inview';
	import { fade, fly } from 'svelte/transition';

	let data = $page.data as PageData;
	let faqs = data.faqs.map((element, index) => {
		return {
			question: element.question,
			answers: element.answer,
			isOpen: index === 0
		};
	});

	const handleOpenAccordion = (chosenIndex: number, value = false) => {
		faqs = faqs.map((faq, i) => {
			if (i === chosenIndex) {
				faq.isOpen = value;
			} else {
				faq.isOpen = false;
			}
			return faq;
		});
	};

	let isShow: boolean = false;
	const handleChange = ({ detail }: CustomEvent<ObserverEventDetails>) => {
		if (!isShow && detail.inView) isShow = true;
	};
</script>

<div
	class="bg-gradient-to-r from-[#05374F] to-[#08222F] text-white min-h-screen lg:!flex lg:!flex-col lg:!justify-center"
	use:inview={{
		rootMargin: '-100px'
	}}
	on:inview_change={handleChange}
>
	<div class="container py-28 lg:py-40" transition:fade={{ duration: 500, delay: 500 }}>
		{#if isShow}
			<div
				class="text-3xl/relaxed md:!text-5xl/relaxed font-bold text-left md:!text-center w-full flex justify-center"
			>
				<div class="max-w-xl">Frequently Asked Questions</div>
			</div>
		{/if}
		<div class="mt-16 flex flex-col gap-12">
			{#each faqs as faq, index}
				{#if isShow}
					<div
						class="flex flex-col gap-6"
						transition:fly={{ x: 200, duration: 500 + 100 * index, delay: 500 }}
					>
						<div class="flex items-center justify-between">
							<div class="text-xl/relaxed md:!text-2xl/relaxed font-bold">{faq.question}</div>
							<button
								class={clsx(
									'w-8 h-8 min-w-8 min-h-8 lg:!w-8 lg:!h-8 lg:!min-w-8 lg:!min-h-8',
									'transition-transform duration-200',
									faq.isOpen ? 'rotate-180' : ' rotate-0'
								)}
								on:click={() => handleOpenAccordion(index, !faq.isOpen)}
							>
								{@html chevronLogo}
							</button>
						</div>
						<div
							class={clsx(
								'text-sm/relaxed md:!text-base/relaxed',
								'transition-all duration-400 overflow-hidden',
								faq.isOpen ? 'max-h-[200px]' : 'max-h-0'
							)}
						>
							{faq.answers}
						</div>
						<div class="border-t border-solid border-white" />
					</div>
				{/if}
			{/each}
		</div>
	</div>
</div>
