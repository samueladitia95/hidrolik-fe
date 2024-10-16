<script lang="ts">
	import emailLogo from '$lib/icons/email-logo.svg?raw';
	import phoneLogo from '$lib/icons/phone-logo.svg?raw';
	import officeLogo from '$lib/icons/office-logo.svg?raw';

	import ContactUsModal from '$lib/components/ContactUsModal.svelte';

	import { page } from '$app/stores';
	import type { PageData } from '../$types';
	import { inview } from 'svelte-inview';
	import { fade } from 'svelte/transition';

	let data = $page.data as PageData;
	let showModal: boolean = false;

	const contacts = [
		{
			logo: emailLogo,
			type: 'Email',
			info: data.contactUs.company_email,
			description: data.contactUs.company_email_description
		},
		{
			logo: phoneLogo,
			type: 'Phone',
			info: data.contactUs.company_phone_number,
			description: data.contactUs.company_phone_number_description
		},
		{
			logo: officeLogo,
			type: 'Office',
			info: data.contactUs.office_address,
			description: data.contactUs.office_address_description
		}
	];

	let isShow: boolean = false;
	const handleChange = ({ detail }: CustomEvent<ObserverEventDetails>) => {
		if (!isShow && detail.inView) isShow = true;
	};
</script>

<div
	class="bg-white text-black min-h-screen lg:!flex lg:!flex-col lg:!justify-center"
	id="contact-us-homepage"
	use:inview={{
		rootMargin: '-100px'
	}}
	on:inview_change={handleChange}
>
	{#if isShow}
		<div class="container py-28 lg:!py-0" transition:fade={{ duration: 500, delay: 500 }}>
			<div class="flex flex-col gap-4 items-start">
				<div class="text-3xl/relaxed md:!text-5xl/relaxed font-bold">
					{data.groupHeader.eighth_group_header}
				</div>
				<div class="leading-relaxed md:!text-lg/relaxed">
					{data.groupHeader.eighth_group_description}
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
							<div class="text-sm/relaxed md:!text-base/relaxed flex-grow">
								{contact.description}
							</div>
						</div>
						<div class="text-sm/relaxed underline md:!text-base/relaxed">{contact.info}</div>
					</div>
				{/each}
			</div>
		</div>
	{/if}
</div>

<ContactUsModal bind:showModal />
