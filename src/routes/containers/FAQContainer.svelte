<script lang="ts">
	import clsx from 'clsx';
	import chevronLogo from '$lib/icons/chevron-logo.svg?raw';

	import { page } from '$app/stores';
	import type { PageData } from '../$types';

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
</script>

<div
	class="bg-gradient-to-r from-[#05374F] to-[#08222F] text-white min-h-screen lg:!flex lg:!flex-col lg:!justify-center"
>
	<div class="container py-28">
		<div
			class="text-3xl/relaxed md:!text-5xl/relaxed font-bold text-center w-full flex justify-center"
		>
			<div class="max-w-xl">Frequently Asked Questions</div>
		</div>
		<div class="mt-16 flex flex-col gap-12">
			{#each faqs as faq, index}
				<div class="flex flex-col gap-6">
					<div class="flex items-center justify-between">
						<div class="text-xl/relaxed md:!text-2xl/relaxed font-bold">{faq.question}</div>
						<button class="w-12 h-12" on:click={() => handleOpenAccordion(index, !faq.isOpen)}>
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
			{/each}
		</div>
	</div>
</div>
