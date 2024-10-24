<script lang="ts">
	import { page } from '$app/stores';
	import { inview } from 'svelte-inview';
	import type { PageData } from '../$types';
	import { fade, fly } from 'svelte/transition';
	import { pb } from '$lib/pocketbase';

	let data = $page.data as PageData;

	let howToOrders = data.howToOrder.map((e) => {
		return {
			icon: pb.files.getUrl(e, e.icon),
			label: e.label,
			description: e.description,
			buttonUrl: e.button_url,
			buttonDownloadUrl: e.button_download_url,
			buttonText: e.button_text,
			isButtonActive: e.is_button_active,
			isDownloadButton: e.is_download_button,
			order: e.order
		};
	});

	let isShow: boolean = false;
	const handleChange = ({ detail }: CustomEvent<ObserverEventDetails>) => {
		if (!isShow && detail.inView) isShow = true;
	};

	const toDataURL = async (url: string) => {
		const blob = await fetch(url).then((res) => res.blob());
		return URL.createObjectURL(blob);
	};

	const downloadCatalog = async (fileUrl: string) => {
		const a = document.createElement('a');
		a.href = await toDataURL(fileUrl);
		a.download = `catalog-hammerspire.pdf`;
		document.body.appendChild(a);
		a.click();
		document.body.removeChild(a);
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
							<div class="w-12 h-12"><img src={order.icon} alt="icon" /></div>
							<div class="text-2xl font-bold">{index + 1}. {order.label}</div>
							<div class="text-sm/loose">{order.description}</div>
							{#if order.isButtonActive}
								{#if order.isDownloadButton}
									<button
										on:click={() =>
											downloadCatalog(
												pb.getFileUrl(order.buttonDownloadUrl, order.buttonDownloadUrl)
											)}
										class="px-6 py-3 rounded-full bg-black text-white font-semibold hover:bg-opacity-75"
										>{order.buttonText}</button
									>
								{:else}
									<a href={order.buttonUrl} target="_blank">
										<button
											class="px-6 py-3 rounded-full bg-black text-white font-semibold hover:bg-opacity-75"
											>{order.buttonText}</button
										>
									</a>
								{/if}
							{/if}
						</div>
					{/if}
				{/each}
			</div>
		</div>
	</div>
</div>
