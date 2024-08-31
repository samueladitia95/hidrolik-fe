<script lang="ts">
	import { Map, TileLayer, Marker, Popup } from 'sveaflet';
	import { browser } from '$app/environment';

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

	const locations = [
		{
			office: 'Hammerspir HQ Office (Jakarta)',
			address: 'Jl. Gatot Subroto Kav. 27 Jakarta Selatan, 12950 Indonesia',
			phone: '021-14810401',
			email: 'info@hammerspir.com',
			coordinate: ''
		},
		{
			office: 'Hammerspir Warehouse',
			address: 'Jl. Gatot Subroto Kav. 27 Jakarta Selatan, 12950 Indonesia',
			phone: '021-14810401',
			email: 'info@hammerspir.com',
			coordinate: ''
		}
	];
</script>

<!-- INTRO -->
<div
	class="pt-10 pb-20 flex flex-col xl:!flex-row-reverse xl:!items-center gap-10 xl:!gap-40 container"
>
	<div
		class="relative h-[400px] md:!h-[600px] lg:!h-[750px] xl:!h-[600px] grid grid-cols-2 gap-4 xl:!max-w-xl"
	>
		<img
			src={pb.files.getUrl(about, about.main_images[1])}
			alt="main-about"
			class="rounded-lg object-cover self-end h-60 md:!h-[440px] xl:!h-[350px]"
		/>

		<img
			src={pb.files.getUrl(about, about.main_images[0])}
			alt="main-about"
			class="rounded-lg object-cover self-start h-60 md:!h-[440px] xl:!h-[350px]"
		/>
	</div>
	<div class="flex flex-col gap-6">
		<div class="text-3xl/relaxed md:!text-5xl/relaxed font-bold">
			Your Trusted Partner for Premium Hydraulic Hoses
		</div>
		<div class="text-sm/loose md:!text-lg/loose">
			Offer top-notch hydraulic hoses tailored to meet various industry needs, known for exceptional
			quality and competitive pricing.
		</div>
	</div>
</div>

<!-- OUR VISION -->
<div class="bg-primary">
	<div
		class="container py-20 text-white flex flex-col xl:!flex-row xl:!items-center gap-6 xl:!py-48"
	>
		<img
			src={pb.files.getUrl(about, about.vision_image)}
			alt="main-vision"
			class="rounded-lg h-[445px] xl:!w-[670px] w-full object-cover"
		/>

		<div class="flex flex-col gap-6">
			<div class="text-3xl/loose md:!text-4xl/loose font-bold">Our Vision</div>
			<div class="leading-loose max-w-3xl">
				our vision is to be the global leader in hydraulic hose solutions, renowned for our
				commitment to quality, innovation, and customer satisfaction. We aspire to set the industry
				standard for excellence, providing reliable and durable products that empower our customers
				across various sectors to achieve their goals.
			</div>
		</div>
	</div>
</div>

<!-- OUR MISSION -->
<div class="container py-20 flex flex-col xl:!flex-row xl:!item-start gap-10">
	<div class="flex flex-col gap-6 xl:!max-w-lg">
		<div class="text-3xl/loose md:!text-4xl/loose font-bold">Our Mission</div>
		<div class="leading-loose">
			At HAMMERSPIR, we are not just about products; we are about building lasting relationships and
			creating value for our customers through exceptional hydraulic hose solutions.
		</div>
	</div>

	<div class="grid grid-cols-1 md:grid-cols-2 gap-10">
		{#each ourMissions as mission}
			<div class="flex flex-col gap-4">
				<div class="text-xl/loose font-bold">{mission.label}</div>
				<div class="text-sm/loose md:!text-base/loose">{mission.subLabel}</div>
			</div>
		{/each}
	</div>
</div>

<!-- OUR LOCATION -->
<div class="container py-20 flex flex-col gap-12">
	<div class="text-4xl font-bold">Our Location</div>
	{#if browser}
		<div class="w-full h-96">
			<Map
				options={{
					center: [51.505, -0.09],
					zoom: 13
				}}
			>
				<TileLayer url={'https://tile.openstreetmap.org/{z}/{x}/{y}.png'} />
				<Marker latLng={[51.505, -0.09]} />
			</Map>
		</div>
	{/if}
	<div class="grid grid-cols-1 md:!grid-cols-2 gap-10">
		{#each locations as location}
			<div class="flex flex-col gap-4 items-start">
				<div class="text-xl font-bold">{location.office}</div>
				<div class="leading-loose">
					<div>{location.address}</div>
					<div>Phone: {location.phone}</div>
					<div>Email: {location.email}</div>
				</div>
				<button class="bg-black text-white rounded-full font-semibold px-6 py-3">
					Get Direction
				</button>
			</div>
		{/each}
	</div>
</div>
