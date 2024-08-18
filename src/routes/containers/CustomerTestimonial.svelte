<script lang="ts">
	import { Marquee } from '@selemondev/svelte-marquee';
	import '@selemondev/svelte-marquee/dist/style.css';

	import { page } from '$app/stores';
	import { pb } from '$lib/pocketbase';
	import type { PageData } from '../$types';

	let data = $page.data as PageData;
	let testimonials = data.testimonials.map((element) => {
		return {
			profileImg: pb.files.getUrl(element, element.user_profile_image_url, { thumb: '1920x1080' }),
			content: element.testimonial,
			name: element.user,
			role: element.role
		};
	});
</script>

<div class="bg-white text-black min-h-screen lg:!flex lg:!flex-col lg:!justify-center">
	<div class="container py-28 lg:!py-0">
		<div class="flex flex-col gap-2 md:!text-center">
			<div class="text-3xl/relaxed md:!text-4xl/relaxed lg:!text-5xl/relaxed font-bold">
				Customers Testimonials
			</div>
			<div class="leading-relaxed lg:!text-lg">
				Lorem ipsum dolor sit amet, consectetur adipiscing elit.
			</div>
		</div>

		<div class="mt-8 grid grid-cols-1 md:!grid-cols-2 gap-6 lg:!hidden">
			{#each testimonials as testimonial}
				<div class="rounded-lg border border-solid border-black px-8 py-6 md:!py-8">
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
		</div>
	</div>
	<div class="mt-16 hidden lg:!block">
		<Marquee direction="left" fade={true} reverse={false} pauseOnHover={false} innerClassName="">
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
</div>
