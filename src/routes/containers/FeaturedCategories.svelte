<script lang="ts">
	const categories = [
		{
			label: 'Hydraulic Hose',
			image:
				'https://s3-alpha-sig.figma.com/img/1011/9fd5/236f3b93ee435678d7dddedbff4c31dc?Expires=1724025600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=qBqZBOg8VFvIkXVHoOIJMtzOle~Fjq2HwfGRF~t06vtMT~RK50y27eG9iotgCDgN8ZXS3-sSXVQQfdb8HFVcgvf8YlPPLhrZrBFZpEunK0OvyowuYSwkL-2HUSTI1p18dQlvdbo4Uyvyw7o6GKBP2T5Rfpggw8VcVdvV7lnuaKs~Jo5bsGtE2qc17hobYYNzWsdREmLuHs-LQ24hFOIPzsC-piLTHlittHxuntTfJrKxQcNWp6PWssqwHUwdq3u9GgL7dH33bXBJo1A8CPUAfoR4DHKtWkssTIRsPvjHSqpxO-zdrBcxvSoAzRrzKD~0xpllIC~q~Mz7h6FIpWcKmw__'
		},
		{
			label: 'Connector',
			image:
				'https://s3-alpha-sig.figma.com/img/1011/9fd5/236f3b93ee435678d7dddedbff4c31dc?Expires=1724025600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=qBqZBOg8VFvIkXVHoOIJMtzOle~Fjq2HwfGRF~t06vtMT~RK50y27eG9iotgCDgN8ZXS3-sSXVQQfdb8HFVcgvf8YlPPLhrZrBFZpEunK0OvyowuYSwkL-2HUSTI1p18dQlvdbo4Uyvyw7o6GKBP2T5Rfpggw8VcVdvV7lnuaKs~Jo5bsGtE2qc17hobYYNzWsdREmLuHs-LQ24hFOIPzsC-piLTHlittHxuntTfJrKxQcNWp6PWssqwHUwdq3u9GgL7dH33bXBJo1A8CPUAfoR4DHKtWkssTIRsPvjHSqpxO-zdrBcxvSoAzRrzKD~0xpllIC~q~Mz7h6FIpWcKmw__'
		},
		{
			label: 'Crimping Machine',
			image:
				'https://s3-alpha-sig.figma.com/img/1011/9fd5/236f3b93ee435678d7dddedbff4c31dc?Expires=1724025600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=qBqZBOg8VFvIkXVHoOIJMtzOle~Fjq2HwfGRF~t06vtMT~RK50y27eG9iotgCDgN8ZXS3-sSXVQQfdb8HFVcgvf8YlPPLhrZrBFZpEunK0OvyowuYSwkL-2HUSTI1p18dQlvdbo4Uyvyw7o6GKBP2T5Rfpggw8VcVdvV7lnuaKs~Jo5bsGtE2qc17hobYYNzWsdREmLuHs-LQ24hFOIPzsC-piLTHlittHxuntTfJrKxQcNWp6PWssqwHUwdq3u9GgL7dH33bXBJo1A8CPUAfoR4DHKtWkssTIRsPvjHSqpxO-zdrBcxvSoAzRrzKD~0xpllIC~q~Mz7h6FIpWcKmw__'
		},
		{
			label: 'Industrial Connector',
			image:
				'https://s3-alpha-sig.figma.com/img/1011/9fd5/236f3b93ee435678d7dddedbff4c31dc?Expires=1724025600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=qBqZBOg8VFvIkXVHoOIJMtzOle~Fjq2HwfGRF~t06vtMT~RK50y27eG9iotgCDgN8ZXS3-sSXVQQfdb8HFVcgvf8YlPPLhrZrBFZpEunK0OvyowuYSwkL-2HUSTI1p18dQlvdbo4Uyvyw7o6GKBP2T5Rfpggw8VcVdvV7lnuaKs~Jo5bsGtE2qc17hobYYNzWsdREmLuHs-LQ24hFOIPzsC-piLTHlittHxuntTfJrKxQcNWp6PWssqwHUwdq3u9GgL7dH33bXBJo1A8CPUAfoR4DHKtWkssTIRsPvjHSqpxO-zdrBcxvSoAzRrzKD~0xpllIC~q~Mz7h6FIpWcKmw__'
		},
		{
			label: 'Industrial Connector',
			image:
				'https://s3-alpha-sig.figma.com/img/1011/9fd5/236f3b93ee435678d7dddedbff4c31dc?Expires=1724025600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=qBqZBOg8VFvIkXVHoOIJMtzOle~Fjq2HwfGRF~t06vtMT~RK50y27eG9iotgCDgN8ZXS3-sSXVQQfdb8HFVcgvf8YlPPLhrZrBFZpEunK0OvyowuYSwkL-2HUSTI1p18dQlvdbo4Uyvyw7o6GKBP2T5Rfpggw8VcVdvV7lnuaKs~Jo5bsGtE2qc17hobYYNzWsdREmLuHs-LQ24hFOIPzsC-piLTHlittHxuntTfJrKxQcNWp6PWssqwHUwdq3u9GgL7dH33bXBJo1A8CPUAfoR4DHKtWkssTIRsPvjHSqpxO-zdrBcxvSoAzRrzKD~0xpllIC~q~Mz7h6FIpWcKmw__'
		},
		{
			label: 'Industrial Connector',
			image:
				'https://s3-alpha-sig.figma.com/img/1011/9fd5/236f3b93ee435678d7dddedbff4c31dc?Expires=1724025600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=qBqZBOg8VFvIkXVHoOIJMtzOle~Fjq2HwfGRF~t06vtMT~RK50y27eG9iotgCDgN8ZXS3-sSXVQQfdb8HFVcgvf8YlPPLhrZrBFZpEunK0OvyowuYSwkL-2HUSTI1p18dQlvdbo4Uyvyw7o6GKBP2T5Rfpggw8VcVdvV7lnuaKs~Jo5bsGtE2qc17hobYYNzWsdREmLuHs-LQ24hFOIPzsC-piLTHlittHxuntTfJrKxQcNWp6PWssqwHUwdq3u9GgL7dH33bXBJo1A8CPUAfoR4DHKtWkssTIRsPvjHSqpxO-zdrBcxvSoAzRrzKD~0xpllIC~q~Mz7h6FIpWcKmw__'
		},
		{
			label: 'Industrial Connector',
			image:
				'https://s3-alpha-sig.figma.com/img/1011/9fd5/236f3b93ee435678d7dddedbff4c31dc?Expires=1724025600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=qBqZBOg8VFvIkXVHoOIJMtzOle~Fjq2HwfGRF~t06vtMT~RK50y27eG9iotgCDgN8ZXS3-sSXVQQfdb8HFVcgvf8YlPPLhrZrBFZpEunK0OvyowuYSwkL-2HUSTI1p18dQlvdbo4Uyvyw7o6GKBP2T5Rfpggw8VcVdvV7lnuaKs~Jo5bsGtE2qc17hobYYNzWsdREmLuHs-LQ24hFOIPzsC-piLTHlittHxuntTfJrKxQcNWp6PWssqwHUwdq3u9GgL7dH33bXBJo1A8CPUAfoR4DHKtWkssTIRsPvjHSqpxO-zdrBcxvSoAzRrzKD~0xpllIC~q~Mz7h6FIpWcKmw__'
		},
		{
			label: 'Industrial Connector',
			image:
				'https://s3-alpha-sig.figma.com/img/1011/9fd5/236f3b93ee435678d7dddedbff4c31dc?Expires=1724025600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=qBqZBOg8VFvIkXVHoOIJMtzOle~Fjq2HwfGRF~t06vtMT~RK50y27eGiotgCDgN8ZXS3-sSXVQQfdb8HFVcgvf8YlPPLhrZrBFZpEunK0OvyowuYSwkL-2HUSTI1p18dQlvdbo4Uyvyw7o6GKBP2T5Rfpggw8VcVdvV7lnuaKs~Jo5bsGtE2qc17hobYYNzWsdREmLuHs-LQ24hFOIPzsC-piLTHlittHxuntTfJrKxQcNWp6PWssqwHUwdq3u9GgL7dH33bXBJo1A8CPUAfoR4DHKtWkssTIRsPvjHSqpxO-zdrBcxvSoAzRrzKD~0xpllIC~q~Mz7h6FIpWcKmw__'
		}
	];
</script>

<div class="bg-white">
	<div class="container py-28">
		<div class="flex flex-col md:!flex-row md:!justify-between md:!items-center items-start gap-6">
			<div class="flex flex-col gap-2">
				<div class="text-3xl/relaxed md:!text-4xl/relaxed font-bold">Featured Categories</div>
				<div class="leading-relaxed">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</div>
			</div>
			<button
				class="px-6 py-3 border border-solid border-black rounded-full hover:bg-gray-500 hover:bg-opacity-10"
				>View All Products</button
			>
		</div>

		<div class="mt-12 grid grid-cols-1 md:!grid-cols-2 lg:!grid-cols-4 gap-6">
			{#each categories as category}
				<div class="relative">
					<img
						src={category.image}
						alt="category"
						class="h-[380px] lg:!h-[260px] xl:!h-[380px] w-full object-cover rounded-xl"
					/>
					<div class="absolute top-0 left-0 w-full h-full gradient-overlay rounded-xl" />
					<div class="absolute bottom-6 left-6 text-2xl font-semibold text-white">
						{category.label}
					</div>
				</div>
			{/each}
		</div>
	</div>
</div>

<style>
	.gradient-overlay {
		background:
			linear-gradient(180deg, #00000000 45.79%, #000 100%),
			transparent 50% / cover no-repeat;
	}
</style>
