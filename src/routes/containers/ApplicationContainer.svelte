<script lang="ts">
	import clsx from 'clsx';
	import arrowLogo from '$lib/icons/arrrow-logo.svg?raw';

	const applications = [
		{
			image:
				'https://s3-alpha-sig.figma.com/img/f0dc/1fa3/bda5d4d47e3b27646e55e2a8ae577bbf?Expires=1722816000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=hSNVjuf3Iy43-0t6MQydL3qC2R25uygPi6mR1iT0tnDAOoB-C-eY7a0M-adyxVZARPw2IGuFIvKM9HhijTw4ctbyOukJREuwWUCj9hSU-XXkySxnKY2~bN~6zOHhNHveQfsIepmrhP7BGghXd5QZl7RtAyMpW-1Rb~LNexa7xmKs3J1L9RZydqtrLE4Gs5KPhvDefsnFiy-HATLj1jO0PAjhScn1jfbeCaUeuW-YKN6vTsw8z-9m4q501rFy5OyIOm9b-hfByWwDQJY8WX5YHm~3lynzhn0ocDVl8MJ-vW~ngfvxyWHBQ5eyAKhUlaIS7mWU2QMSDuk5J7bGgmis7g__',
			title: 'Heavy Machinery Equipments',
			content:
				'Built to handle the high pressures and tough conditions found in heavy machinery, ensuring reliable performance and minimizing downtime.'
		},
		{
			image:
				'https://s3-alpha-sig.figma.com/img/f0dc/1fa3/bda5d4d47e3b27646e55e2a8ae577bbf?Expires=1722816000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=hSNVjuf3Iy43-0t6MQydL3qC2R25uygPi6mR1iT0tnDAOoB-C-eY7a0M-adyxVZARPw2IGuFIvKM9HhijTw4ctbyOukJREuwWUCj9hSU-XXkySxnKY2~bN~6zOHhNHveQfsIepmrhP7BGghXd5QZl7RtAyMpW-1Rb~LNexa7xmKs3J1L9RZydqtrLE4Gs5KPhvDefsnFiy-HATLj1jO0PAjhScn1jfbeCaUeuW-YKN6vTsw8z-9m4q501rFy5OyIOm9b-hfByWwDQJY8WX5YHm~3lynzhn0ocDVl8MJ-vW~ngfvxyWHBQ5eyAKhUlaIS7mWU2QMSDuk5J7bGgmis7g__',
			title: 'Mining Industries',
			content:
				'Built to handle the high pressures and tough conditions found in heavy machinery, ensuring reliable performance and minimizing downtime.'
		},
		{
			image:
				'https://s3-alpha-sig.figma.com/img/f0dc/1fa3/bda5d4d47e3b27646e55e2a8ae577bbf?Expires=1722816000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=hSNVjuf3Iy43-0t6MQydL3qC2R25uygPi6mR1iT0tnDAOoB-C-eY7a0M-adyxVZARPw2IGuFIvKM9HhijTw4ctbyOukJREuwWUCj9hSU-XXkySxnKY2~bN~6zOHhNHveQfsIepmrhP7BGghXd5QZl7RtAyMpW-1Rb~LNexa7xmKs3J1L9RZydqtrLE4Gs5KPhvDefsnFiy-HATLj1jO0PAjhScn1jfbeCaUeuW-YKN6vTsw8z-9m4q501rFy5OyIOm9b-hfByWwDQJY8WX5YHm~3lynzhn0ocDVl8MJ-vW~ngfvxyWHBQ5eyAKhUlaIS7mWU2QMSDuk5J7bGgmis7g__',
			title: 'Automotive',
			content:
				'Built to handle the high pressures and tough conditions found in heavy machinery, ensuring reliable performance and minimizing downtime.'
		},
		{
			image:
				'https://s3-alpha-sig.figma.com/img/f0dc/1fa3/bda5d4d47e3b27646e55e2a8ae577bbf?Expires=1722816000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=hSNVjuf3Iy43-0t6MQydL3qC2R25uygPi6mR1iT0tnDAOoB-C-eY7a0M-adyxVZARPw2IGuFIvKM9HhijTw4ctbyOukJREuwWUCj9hSU-XXkySxnKY2~bN~6zOHhNHveQfsIepmrhP7BGghXd5QZl7RtAyMpW-1Rb~LNexa7xmKs3J1L9RZydqtrLE4Gs5KPhvDefsnFiy-HATLj1jO0PAjhScn1jfbeCaUeuW-YKN6vTsw8z-9m4q501rFy5OyIOm9b-hfByWwDQJY8WX5YHm~3lynzhn0ocDVl8MJ-vW~ngfvxyWHBQ5eyAKhUlaIS7mWU2QMSDuk5J7bGgmis7g__',
			title: 'Shipping',
			content:
				'Built to handle the high pressures and tough conditions found in heavy machinery, ensuring reliable performance and minimizing downtime.'
		}
	];

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
</script>

<div class="bg-white text-black min-h-screen lg:flex lg:flex-col lg:justify-center">
	<div class="container py-28">
		<div class="flex lg:items-center gap-6">
			<div>
				<div class="text-3xl/relaxed md:text-5xl/relaxed font-bold">
					We provides for various industries and applications
				</div>

				<div class="mt-10 flex flex-col gap-6">
					<div
						bind:this={carauselEl}
						class="flex flex-start max-w-screen overflow-hidden snap-x snap-mandatory lg:hidden"
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
										'text-sm/loose md:text-base/loose overflow-hidden transition-all duration-200',
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
				class="hidden lg:flex flex-start max-w-screen overflow-hidden snap-x snap-mandatory lg:max-w-[670px]"
			>
				{#each applications as application}
					<img
						src={application.image}
						alt="application"
						class="rounded-lg object-cover max-w-full lg:max-h-[450px]"
					/>
				{/each}
			</div>
		</div>

		<div class="flex gap-2 lg:justify-end mt-6">
			<button
				on:click|preventDefault={() => scrollIntoView('minus')}
				class="p-3 border border-solid border-black rounded-full disabled:opacity-50"
				disabled={viewIndex <= 0}
			>
				<div class="h-6 w-6 rotate-180">
					{@html arrowLogo}
				</div>
			</button>
			<button
				on:click|preventDefault={() => scrollIntoView('plus')}
				class="p-3 border border-solid border-black rounded-full disabled:opacity-50"
				disabled={viewIndex >= itemNumber - 1}
			>
				<div class="h-6 w-6">
					{@html arrowLogo}
				</div></button
			>
		</div>
	</div>
</div>
