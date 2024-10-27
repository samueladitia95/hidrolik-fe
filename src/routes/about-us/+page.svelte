<script lang="ts">
	import { Map, TileLayer, Marker } from 'sveaflet';
	import { browser } from '$app/environment';

	import { pb } from '$lib/pocketbase';
	import type { PageData } from './$types';
	import { inview } from 'svelte-inview';
	import { fade } from 'svelte/transition';
	export let data: PageData;

	$: about = data.about;
	$: locations = data.locations;
	$: ourMissions = data.missionDetails;
	$: visionMission = data.visionMission;

	let isShow: boolean = false;
	let latitude: number = 0.0;
	let longitude: number = 0.0;
	const handleChange = ({ detail }: CustomEvent<ObserverEventDetails>) => {
		if (!isShow && detail.inView) isShow = true;
	};

	if (data.locations && data.locations.length > 0) {
		for (const location of data.locations) {
			if (location && location.is_map_shown && location.latlong && location.latlong !== '') {
				const latLongSplit: string[] = location.latlong.split(',');
				if (latLongSplit.length === 2) {
					latitude = parseFloat(latLongSplit[0]);
					longitude = parseFloat(latLongSplit[1]);
				}
				break;
			}
		}
	}
</script>

<div
	class="min-h-screen"
	use:inview={{
		rootMargin: '-100px'
	}}
	on:inview_change={handleChange}
>
	{#if isShow}
		<!-- INTRO -->
		<div
			class="pt-10 pb-20 flex flex-col xl:!flex-row-reverse xl:!items-center gap-10 xl:!gap-40 container"
			transition:fade={{ duration: 500, delay: 0 }}
		>
			{#if about.main_images.length === 2}
				<!-- If there are two images, display the current grid layout -->
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
			{:else if about.main_images.length === 1}
				<!-- If there is only one image, make it larger to fill the container -->
				<div class="relative h-[400px] md:!h-[600px] lg:!h-[750px] xl:!h-[600px] w-full">
					<img
						src={pb.files.getUrl(about, about.main_images[0])}
						alt="main-about"
						class="rounded-lg object-cover w-full h-full"
					/>
				</div>
			{/if}

			<div class="flex flex-col gap-6">
				<div class="text-3xl/relaxed md:!text-5xl/relaxed font-bold">
					{about.title_text}
				</div>
				<div class="text-sm/loose md:!text-lg/loose">
					{about.subtitle_text}
				</div>
			</div>
		</div>
	{/if}

	{#if isShow}
		<!-- OUR VISION -->
		<div class="bg-primary" transition:fade={{ duration: 500, delay: 100 }}>
			<div
				class="container py-20 text-white flex flex-col xl:!flex-row xl:!items-center gap-6 xl:!py-48"
			>
				<img
					src={pb.files.getUrl(visionMission, visionMission.vision_image)}
					alt="main-vision"
					class="rounded-lg h-[445px] xl:!w-[670px] w-full object-cover"
				/>

				<div class="flex flex-col gap-6">
					<div class="text-3xl/loose md:!text-4xl/loose font-bold">
						{visionMission.vision_title}
					</div>
					<div class="leading-loose max-w-3xl">
						{visionMission.vision_description}
					</div>
				</div>
			</div>
		</div>
	{/if}

	{#if isShow}
		<!-- OUR MISSION -->
		<div
			class="container py-20 flex flex-col xl:!flex-row xl:!item-start gap-10"
			transition:fade={{ duration: 500, delay: 200 }}
		>
			<div class="flex flex-col gap-6 xl:!max-w-lg">
				<div class="text-3xl/loose md:!text-4xl/loose font-bold">{visionMission.mission_title}</div>
				<div class="leading-loose">
					{visionMission.mission_description}
				</div>
			</div>

			<div class="grid grid-cols-1 md:grid-cols-2 gap-10">
				{#each ourMissions as mission}
					<div class="flex flex-col gap-4">
						<div class="text-xl/loose font-bold">{mission.label}</div>
						<div class="text-sm/loose md:!text-base/loose">{mission.sublabel}</div>
					</div>
				{/each}
			</div>
		</div>
	{/if}

	{#if isShow}
		<!-- OUR LOCATION -->
		<div
			class="container py-20 flex flex-col gap-12"
			transition:fade={{ duration: 500, delay: 300 }}
		>
			<div class="text-4xl font-bold">Our Location</div>
			{#if browser}
				<div class="w-full h-96">
					<Map
						options={{
							center: [latitude, longitude],
							zoom: 13
						}}
					>
						<TileLayer url={'https://tile.openstreetmap.org/{z}/{x}/{y}.png'} />
						<Marker latLng={[latitude, longitude]} />
					</Map>
				</div>
			{/if}
			<div class="grid grid-cols-1 md:!grid-cols-2 gap-10">
				{#each locations as location}
					<div class="flex flex-col gap-4 items-start">
						<div class="text-xl font-bold">{location.office_name}</div>
						<div class="leading-loose">
							<div>{location.office_address}</div>
							<div>Phone: {location.phone}</div>
							<div>Email: {location.email}</div>
						</div>
						<a
							href={location.coordinate && location.coordinate != ''
								? location.coordinate
								: 'javascript:void(0);'}
							target={location.coordinate && location.coordinate != '' ? '_blank' : '_self'}
						>
							<button class="bg-black text-white rounded-full font-semibold px-6 py-3">
								Get Direction
							</button>
						</a>
					</div>
				{/each}
			</div>
		</div>
	{/if}
</div>
