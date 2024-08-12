<script lang="ts">
	import { pb } from '$lib/pocketbase';
	import type { PageData } from './$types';
	export let data: PageData;

	$: about = data.about;
	const ourMissions = [
		{
			label: 'Quality and Reliability',
			subLabel:
				'Producing hydraulic hoses that meet the highest standards of quality and reliability, ensuring superior performance in demanding applications.'
		},
		{
			label: 'Customer Focus',
			subLabel:
				'Understanding and exceeding our customers expectations through personalized service, tailored solutions, and responsive support.'
		},
		{
			label: 'Innovation and Improvement',
			subLabel:
				'Continuously innovating and improving our products and processes to stay ahead of industry trends and meet evolving market demands.'
		},
		{
			label: 'Sustainability and Responsibility',
			subLabel:
				'Committing to sustainable practices that minimize environmental impact and contribute to the well-being of our communities.'
		}
	];
</script>

<!-- INTRO -->
<div class="pt-10 pb-20 flex flex-col gap-10 container">
	<div>
		<img
			src={pb.files.getUrl(about, about.main_images[0])}
			alt="main-about"
			class="rounded-lg h-[400px] w-full object-cover"
		/>
	</div>
	<div class="flex flex-col gap-6">
		<div class="text-3xl/relaxed font-bold">Your Trusted Partner for Premium Hydraulic Hoses</div>
		<div class="text-sm/loose">
			Offer top-notch hydraulic hoses tailored to meet various industry needs, known for exceptional
			quality and competitive pricing.
		</div>
	</div>
</div>

<!-- OUR VISION -->
<div class="bg-primary">
	<div class="container py-20 text-white flex flex-col gap-6">
		<img
			src={pb.files.getUrl(about, about.vision_image)}
			alt="main-vision"
			class="rounded-lg h-[445px] w-full object-cover"
		/>

		<div class="text-3xl/loose font-bold">Our Vision</div>
		<div class="leading-loose">
			our vision is to be the global leader in hydraulic hose solutions, renowned for our commitment
			to quality, innovation, and customer satisfaction. We aspire to set the industry standard for
			excellence, providing reliable and durable products that empower our customers across various
			sectors to achieve their goals.
		</div>
	</div>
</div>

<!-- OUR MISSION -->
<div class="container py-20 flex flex-col gap-10">
	<div class="flex flex-col gap-6">
		<div class="text-3xl/loose font-bold">Our Mission</div>
		<div class="leading-loose">
			At HAMMERSPIR, we are not just about products; we are about building lasting relationships and
			creating value for our customers through exceptional hydraulic hose solutions.
		</div>
	</div>

	<div class="flex flex-col gap-10">
		{#each ourMissions as mission}
			<div class="flex flex-col gap-4">
				<div class="text-xl/loose font-bold">{mission.label}</div>
				<div class="text-sm/loose">{mission.subLabel}</div>
			</div>
		{/each}
	</div>
</div>

<!-- OUR LOCATION -->
<div class="container py-20">
	<div class="text-4xl font-bold">Our Location</div>
</div>
