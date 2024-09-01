<script lang="ts">
	import { Marquee } from '@selemondev/svelte-marquee';
	import '@selemondev/svelte-marquee/dist/style.css';

	import { page } from '$app/stores';
	import { pb } from '$lib/pocketbase';
	import type { PageData } from '../$types';
	import { inview } from 'svelte-inview';
	import { fade, fly } from 'svelte/transition';

	let data = $page.data as PageData;
	let testimonials = data.testimonials.map((element) => {
		return {
			profileImg: pb.files.getUrl(element, element.user_profile_image_url, { thumb: '1920x1080' }),
			content: element.testimonial,
			name: element.user,
			role: element.role
		};
	});

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
	<div class="container py-28 xl:!py-0">
		{#if isShow}
			<div
				class="flex flex-col gap-2 md:!text-center"
				transition:fade={{ duration: 500, delay: 500 }}
			>
				<div class="text-3xl/relaxed md:!text-4xl/relaxed xl:!text-5xl/relaxed font-bold">
					Customers Testimonials
				</div>
				<div class="leading-relaxed xl:!text-lg">
					Lorem ipsum dolor sit amet, consectetur adipiscing elit.
				</div>
			</div>
		{/if}

		<div class="mt-8 grid grid-cols-1 md:!grid-cols-2 gap-6 xl:!hidden">
			{#each testimonials as testimonial, index}
				{#if isShow}
					<div
						class="rounded-lg border border-solid border-black px-8 py-6 md:!py-8"
						transition:fly={{ x: 200, duration: 500 + 100 * index, delay: 500 }}
					>
						<div class="leading-relaxed">"{testimonial.content}"</div>
						<div class="mt-6 flex gap-5">
							<img
								src={testimonial.profileImg}
								alt="profile"
								class="rounded-full h-14 w-14 object-cover"
							/>
							<div>
								<div class="font-semibold">{testimonial.name}</div>
								<div>{testimonial.role}</div>
							</div>
						</div>
					</div>
				{/if}
			{/each}
		</div>
	</div>
	<div class="mt-16 hidden xl:!block">
		{#if isShow}
			<div transition:fade={{ duration: 500, delay: 1000 }}>
				<Marquee
					direction="left"
					fade={true}
					reverse={false}
					pauseOnHover={false}
					innerClassName=""
				>
					{#each testimonials as testimonial}
						<div class="rounded-lg border border-solid border-black px-8 py-8 max-w-[492px]">
							<div class="leading-relaxed">"{testimonial.content}"</div>
							<div class="mt-6 flex gap-5">
								<img
									src={testimonial.profileImg}
									alt="profile"
									class="rounded-full h-14 w-14 object-cover"
								/>
								<div>
									<div class="font-semibold">{testimonial.name}</div>
									<div>{testimonial.role}</div>
								</div>
							</div>
						</div>
					{/each}
				</Marquee>
			</div>
		{/if}
	</div>
</div>
