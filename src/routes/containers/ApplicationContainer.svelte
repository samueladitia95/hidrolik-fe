<script lang="ts">
	import clsx from 'clsx';
	import arrowLogo from '$lib/icons/arrrow-logo.svg?raw';

	import { page } from '$app/stores';
	import { pb } from '$lib/pocketbase';
	import type { PageData } from '../$types';
	import { inview } from 'svelte-inview';
	import { fade } from 'svelte/transition';

	let data = $page.data as PageData;
	let applications = data.applications.map((element) => {
		return {
			image: pb.files.getUrl(element, element.image_url, { thumb: '1920x1080' }),
			title: element.title,
			content: element.subtitle
		};
	});

	const itemNumber: number = 4;
	let viewIndex: number = 0;
	let carauselEl: Element;
	let carauselDesktopEl: Element;

	function scrollIntoView(action: 'plus' | 'minus') {
		const maxWidthCarausel = carauselEl.scrollWidth;
		const maxWidthDesktopCarausel = carauselDesktopEl.scrollWidth;

		if (action === 'plus' && viewIndex < itemNumber - 1) {
			viewIndex = viewIndex + 1;
		} else if (action === 'minus' && viewIndex > 0) {
			viewIndex = viewIndex - 1;
		}

		carauselEl.scrollTo({ left: (maxWidthCarausel / 4) * viewIndex, behavior: 'smooth' });
		carauselDesktopEl.scrollTo({
			left: (maxWidthDesktopCarausel / 4) * viewIndex,
			behavior: 'smooth'
		});
	}

	let isShow: boolean = false;
	const handleChange = ({ detail }: CustomEvent<ObserverEventDetails>) => {
		if (!isShow && detail.inView) isShow = true;
	};
</script>

<div
	class="bg-white text-black min-h-screen xl:!flex xl:!flex-col xl:!justify-center"
	use:inview={{
		rootMargin: '-100px'
	}}
	on:inview_change={handleChange}
>
	<div class="container py-28 min-h-screen">
		{#if isShow}
			<div class="flex xl:!items-center gap-6" transition:fade={{ duration: 500, delay: 500 }}>
				<div>
					<div class="text-3xl/relaxed md:!text-5xl/relaxed font-bold">
						{data.groupHeader.third_group_header}
					</div>

					<div class="mt-10 flex flex-col gap-6">
						<div
							bind:this={carauselEl}
							class="flex flex-start max-w-screen overflow-hidden snap-x snap-mandatory xl:!hidden"
						>
							{#each applications as application}
								<img
									src={application.image}
									alt="application"
									class="rounded-lg object-cover max-w-full"
								/>
							{/each}
						</div>

						<div class="flex flex-col gap-6 border-l border-black border-opacity-30">
							{#each applications as application, index}
								<div
									class={clsx(
										'p-4 flex flex-col gap-4 rounded-r-lg ',
										index === viewIndex
											? 'bg-secondary border-l-3 border-solid border-secondary bg-opacity-20'
											: ''
									)}
								>
									<div class="text-2xl/relaxed font-bold">{application.title}</div>
									<div
										class={clsx(
											'text-sm/loose md:!text-base/loose overflow-hidden transition-all duration-200',
											index === viewIndex ? 'max-h-[200px]' : 'max-h-0'
										)}
									>
										{application.content}
									</div>
								</div>
							{/each}
						</div>
					</div>
				</div>

				<div
					bind:this={carauselDesktopEl}
					class="hidden xl:!flex flex-start max-w-screen overflow-hidden snap-x snap-mandatory xl:!max-w-[670px]"
				>
					{#each applications as application}
						<img
							src={application.image}
							alt="application"
							class="rounded-lg object-cover max-w-full xl:!max-h-[450px]"
						/>
					{/each}
				</div>
			</div>
		{/if}

		{#if isShow}
			<div class="flex gap-2 xl:!justify-end mt-6" transition:fade={{ duration: 500, delay: 500 }}>
				<button
					on:click|preventDefault={() => scrollIntoView('minus')}
					class="p-3 border border-solid border-black rounded-full disabled:opacity-50 hover:opacity-75"
					disabled={viewIndex <= 0}
				>
					<div class="h-6 w-6 rotate-180">
						{@html arrowLogo}
					</div>
				</button>
				<button
					on:click|preventDefault={() => scrollIntoView('plus')}
					class="p-3 border border-solid border-black rounded-full disabled:opacity-50 hover:opacity-75"
					disabled={viewIndex >= itemNumber - 1}
				>
					<div class="h-6 w-6">
						{@html arrowLogo}
					</div></button
				>
			</div>
		{/if}
	</div>
</div>
