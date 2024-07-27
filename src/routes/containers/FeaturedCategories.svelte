<script lang="ts">
	const categories = [
		{
			label: 'Hydraulic Hose',
			image:
				'https://s3-alpha-sig.figma.com/img/1011/9fd5/236f3b93ee435678d7dddedbff4c31dc?Expires=1722816000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=DCYDk-twB06-~GPUx0hFMfCVChQMY4IVQcSvd~Dp67jXxxm32q32pA3SPQKQRd6ruY5AHa4N1xgCCXLWKrSW6zOnyp-MIF3B0VKiYP9F-heQ68Cpwv3fHjohTIAQSBiJALfP058KFjP6zQE1Moj~P63VoCBLommwAYFUDArn9doK7Ew8qgmf5QbwVHRrS2hzNf~-rK~JXMbQGtldDdK0gvu~nGloJKnOpQjo07GsqdMC65zHXsKJ~Z1nR6rnzlWz44ndA~9aNz5q0TMHAV-sQeQcS6awn4vro4r4dDNveY6hd7U4InaRpwmTq7sMKpnhuf0I-qyY7uiQNf5XnX54Eg__'
		},
		{
			label: 'Connector',
			image:
				'https://s3-alpha-sig.figma.com/img/8c0b/ae9f/31f6ffd1543f0586fcfbb0ccae1cf3b3?Expires=1722816000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=cFgDq85l4RR2UUyH8NU3gPnKRxk252K4UF59f8g4R2NR430UKvOEEWelDYbNQh6ivsy8mdXVYi1Z4Ab0-VO5xlm6I1K3Mh1wjqVaNUGTYuhw-6sZ3j6ZshVL8iNlVCSYprO3X0cPiZf~Z~cDJZrAAqb0UZN6hZC2gV14A6~6lMbkD5qYVIBriWI2ZThiNxRumEWf-qXlF23lyLBuIZMYUZVQzkLH1jQ6S9umJnZfkxqtaBM1l-byoash1QE5e6t3qtcrqCvS-jqDIg4ulFQ6NJnbFpgXPq~hMj7YSZc-NlnpXNq2OSJRTvJ-6p4uP4SMPtnEOgPKT9SBzFaQ7mmmlA__'
		},
		{
			label: 'Crimping Machine',
			image:
				'https://s3-alpha-sig.figma.com/img/ded6/2452/7385d28049bc902db270450c370a5eb0?Expires=1722816000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Vt97fLljNJy2H6X6e7v7n~cKnAD3NBJ247pSTfduB46xm-owhLWz~qjkPcQDratOOF~1sYDb2MX6CsKUCEL6eckzFWvYMgMyI6~uZ9DfLzNAqp7LUvfDuDaVa~KgYK4isgcbsW8-0cJ6NT6bAA3yjy0b9QJT9sdgxROLPhOS4qWa1KOBzNC71EhxPjUa46P4XKcwKTbqT-7zDFULrnXRc4ftSwjNRiNjbchmG2BW753x1D2mCN1qC5UB3kvt3KEyP~te1LEDmnwnDg0hcYED6ogFsaCaKljJcSMdcN77phLLR0R80BOU1unNaPNs-9mX8UkuhPD5bSi4yzbt5ckUSQ__'
		},
		{
			label: 'Industrial Connector',
			image:
				'https://s3-alpha-sig.figma.com/img/1011/9fd5/236f3b93ee435678d7dddedbff4c31dc?Expires=1722816000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=DCYDk-twB06-~GPUx0hFMfCVChQMY4IVQcSvd~Dp67jXxxm32q32pA3SPQKQRd6ruY5AHa4N1xgCCXLWKrSW6zOnyp-MIF3B0VKiYP9F-heQ68Cpwv3fHjohTIAQSBiJALfP058KFjP6zQE1Moj~P63VoCBLommwAYFUDArn9doK7Ew8qgmf5QbwVHRrS2hzNf~-rK~JXMbQGtldDdK0gvu~nGloJKnOpQjo07GsqdMC65zHXsKJ~Z1nR6rnzlWz44ndA~9aNz5q0TMHAV-sQeQcS6awn4vro4r4dDNveY6hd7U4InaRpwmTq7sMKpnhuf0I-qyY7uiQNf5XnX54Eg__'
		},
		{
			label: 'Industrial Connector',
			image:
				'https://s3-alpha-sig.figma.com/img/1011/9fd5/236f3b93ee435678d7dddedbff4c31dc?Expires=1722816000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=DCYDk-twB06-~GPUx0hFMfCVChQMY4IVQcSvd~Dp67jXxxm32q32pA3SPQKQRd6ruY5AHa4N1xgCCXLWKrSW6zOnyp-MIF3B0VKiYP9F-heQ68Cpwv3fHjohTIAQSBiJALfP058KFjP6zQE1Moj~P63VoCBLommwAYFUDArn9doK7Ew8qgmf5QbwVHRrS2hzNf~-rK~JXMbQGtldDdK0gvu~nGloJKnOpQjo07GsqdMC65zHXsKJ~Z1nR6rnzlWz44ndA~9aNz5q0TMHAV-sQeQcS6awn4vro4r4dDNveY6hd7U4InaRpwmTq7sMKpnhuf0I-qyY7uiQNf5XnX54Eg__'
		},
		{
			label: 'Industrial Connector',
			image:
				'https://s3-alpha-sig.figma.com/img/1011/9fd5/236f3b93ee435678d7dddedbff4c31dc?Expires=1722816000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=DCYDk-twB06-~GPUx0hFMfCVChQMY4IVQcSvd~Dp67jXxxm32q32pA3SPQKQRd6ruY5AHa4N1xgCCXLWKrSW6zOnyp-MIF3B0VKiYP9F-heQ68Cpwv3fHjohTIAQSBiJALfP058KFjP6zQE1Moj~P63VoCBLommwAYFUDArn9doK7Ew8qgmf5QbwVHRrS2hzNf~-rK~JXMbQGtldDdK0gvu~nGloJKnOpQjo07GsqdMC65zHXsKJ~Z1nR6rnzlWz44ndA~9aNz5q0TMHAV-sQeQcS6awn4vro4r4dDNveY6hd7U4InaRpwmTq7sMKpnhuf0I-qyY7uiQNf5XnX54Eg__'
		},
		{
			label: 'Industrial Connector',
			image:
				'https://s3-alpha-sig.figma.com/img/1011/9fd5/236f3b93ee435678d7dddedbff4c31dc?Expires=1722816000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=DCYDk-twB06-~GPUx0hFMfCVChQMY4IVQcSvd~Dp67jXxxm32q32pA3SPQKQRd6ruY5AHa4N1xgCCXLWKrSW6zOnyp-MIF3B0VKiYP9F-heQ68Cpwv3fHjohTIAQSBiJALfP058KFjP6zQE1Moj~P63VoCBLommwAYFUDArn9doK7Ew8qgmf5QbwVHRrS2hzNf~-rK~JXMbQGtldDdK0gvu~nGloJKnOpQjo07GsqdMC65zHXsKJ~Z1nR6rnzlWz44ndA~9aNz5q0TMHAV-sQeQcS6awn4vro4r4dDNveY6hd7U4InaRpwmTq7sMKpnhuf0I-qyY7uiQNf5XnX54Eg__'
		},
		{
			label: 'Industrial Connector',
			image:
				'https://s3-alpha-sig.figma.com/img/1011/9fd5/236f3b93ee435678d7dddedbff4c31dc?Expires=1722816000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=DCYDk-twB06-~GPUx0hFMfCVChQMY4IVQcSvd~Dp67jXxxm32q32pA3SPQKQRd6ruY5AHa4N1xgCCXLWKrSW6zOnyp-MIF3B0VKiYP9F-heQ68Cpwv3fHjohTIAQSBiJALfP058KFjP6zQE1Moj~P63VoCBLommwAYFUDArn9doK7Ew8qgmf5QbwVHRrS2hzNf~-rK~JXMbQGtldDdK0gvu~nGloJKnOpQjo07GsqdMC65zHXsKJ~Z1nR6rnzlWz44ndA~9aNz5q0TMHAV-sQeQcS6awn4vro4r4dDNveY6hd7U4InaRpwmTq7sMKpnhuf0I-qyY7uiQNf5XnX54Eg__'
		}
	];
</script>

<div class="bg-white">
	<div class="container py-28">
		<div class="flex flex-col md:flex-row md:justify-between md:items-center items-start gap-6">
			<div class="flex flex-col item-s gap-2">
				<div class="text-3xl/relaxed md:text-4xl/relaxed font-bold">Featured Categories</div>
				<div class="leading-relaxed">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</div>
			</div>
			<button class="px-6 py-3 border border-solid border-black rounded-full hover:bg-gray-500 hover:bg-opacity-10"
				>View All Products</button
			>
		</div>

		<div class="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
			{#each categories as category}
				<div class="relative">
					<img
						src={category.image}
						alt="category"
						class="h-[380px] lg:h-[260px] xl:h-[380px] w-full object-cover rounded-xl"
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
			url(<path-to-image>) transparent 50% / cover no-repeat;
	}
</style>
