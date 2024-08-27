<script lang="ts">
	import emailLogo from '$lib/icons/email-logo.svg?raw';
	import phoneLogo from '$lib/icons/phone-logo.svg?raw';
	import officeLogo from '$lib/icons/office-logo.svg?raw';

	import ContactUsModal from '$lib/components/ContactUsModal.svelte';

	let showModal: boolean = false;

	const contacts = [
		{
			logo: emailLogo,
			type: 'Email',
			description:
				'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in ero.',
			info: 'hello@relume.io'
		},
		{
			logo: phoneLogo,
			type: 'Phone',
			description:
				'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in ero.',
			info: '+1 (555) 000-0000'
		},
		{
			logo: officeLogo,
			type: 'Office',
			description:
				'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in ero.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in ero.',
			info: '123 Sample St, Sydney NSW 2000 AU'
		}
	];
</script>

<div
	class="bg-white text-black min-h-screen lg:!flex lg:!flex-col lg:!justify-center"
	id="contact-us-homepage"
>
	<div class="container py-28 lg:!py-0">
		<div class="flex flex-col gap-4 items-start">
			<div class="text-3xl/relaxed md:!text-5xl/relaxed font-bold">Contact us</div>
			<div class="leading-relaxed md:!text-lg/relaxed">
				Our friendly team would love to hear from you.
			</div>
			<button
				class="px-6 py-3 rounded-full bg-black text-white font-semibold hover:bg-opacity-75 cursor-pointer"
				on:click={() => (showModal = true)}
			>
				Inquiry Now
			</button>
		</div>

		<div class="mt-8 grid grid-cols-2 md:!grid-cols-3 gap-6 md:!gap-8 lg:!gap-12 items-stretch">
			{#each contacts as contact}
				<div class="flex flex-col gap-6 h-full">
					<div class="w-8 h-8 md:!w-12 md:!h-12">
						{@html contact.logo}
					</div>
					<div class="flex flex-col gap-4 flex-grow">
						<div class="font-bold md:!text-3xl/relaxed">{contact.type}</div>
						<div class="text-sm/relaxed md:!text-base/relaxed flex-grow">{contact.description}</div>
					</div>
					<div class="text-sm/relaxed underline md:!text-base/relaxed">{contact.info}</div>
				</div>
			{/each}
		</div>
	</div>
</div>

<ContactUsModal bind:showModal />
