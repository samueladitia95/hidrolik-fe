<script lang="ts">
	import { fly } from 'svelte/transition';
	import { superForm, defaults, message } from 'sveltekit-superforms';
	import { zod } from 'sveltekit-superforms/adapters';
	import { schemaContactUs } from '$lib/schema';
	import { pb } from '$lib/pocketbase';

	import closeLogo from '$lib/icons/close-logo.svg?raw';
	import clsx from 'clsx';

	export let showModal: boolean = false; // boolean

	let dialog: HTMLDialogElement; // HTMLDialogElement
	let isFinshed: boolean = false;

	$: if (dialog && showModal) dialog.showModal();

	const { form, enhance, constraints, errors, reset } = superForm(defaults(zod(schemaContactUs)), {
		SPA: true,
		validators: zod(schemaContactUs),
		resetForm: true,
		onUpdate: async function onUpdate({ form }) {
			console.log(form);
			if (form.valid) {
				const body = {
					first_name: form.data.firstName,
					last_name: form.data.lastName,
					email: form.data.email,
					phone: form.data.phone,
					subjects: form.data.subjects,
					message: form.data.message
				};
				await pb.collection('Inquiry_Forms').create(body);
				isFinshed = true;
			}
		}
	});

	// type Form = {
	// 	type: string;
	// 	label: string;
	// 	placeholder: string;
	// 	name: 'firstName' | 'lastName' | 'email' | 'phone' | 'subjects' | 'message';
	// };

	// type FormRow = {
	// 	row: Form[];
	// };

	// const forms: FormRow[] = [
	// 	{
	// 		row: [
	// 			{
	// 				type: 'input',
	// 				label: 'First Name',
	// 				placeholder: 'Enter your first name',
	// 				name: 'firstName'
	// 			},
	// 			{
	// 				type: 'input',
	// 				label: 'Last Name',
	// 				placeholder: 'Enter your last name',
	// 				name: 'lastName'
	// 			}
	// 		]
	// 	},
	// 	{
	// 		row: [
	// 			{
	// 				type: 'input',
	// 				label: 'Email',
	// 				placeholder: 'Enter your email',
	// 				name: 'email'
	// 			},
	// 			{
	// 				type: 'input',
	// 				label: 'Phone Number',
	// 				placeholder: 'Enter your phone number',
	// 				name: 'phone'
	// 			}
	// 		]
	// 	},
	// 	{
	// 		row: [
	// 			{
	// 				type: 'input',
	// 				label: 'Subject',
	// 				placeholder: 'Enter your email subject',
	// 				name: 'subjects'
	// 			}
	// 		]
	// 	},
	// 	{
	// 		row: [
	// 			{
	// 				type: 'area',
	// 				label: 'Message',
	// 				placeholder: 'Type your message...',
	// 				name: 'message'
	// 			}
	// 		]
	// 	}
	// ];
</script>

<!-- svelte-ignore a11y-click-events-have-key-events a11y-no-noninteractive-element-interactions -->
<div class="container">
	<dialog
		bind:this={dialog}
		on:close={() => (showModal = false)}
		on:click|self={() => dialog.close()}
		class="w-full"
	>
		<!-- svelte-ignore a11y-no-static-element-interactions -->
		<div on:click|stopPropagation class="w-full px-2">
			<div class="flex flex-col gap-6 bg-white p-6 rounded-lg">
				<!-- TITLE -->
				<div class={clsx(`flex items-center`, isFinshed ? 'justify-end' : 'justify-between')}>
					{#if !isFinshed}
						<div class="text-2xl font-bold">Inquiry Forms</div>
					{/if}
					<button class="h-6 w-6 md:!h-8 md:!w-8" on:click={() => dialog.close()}>
						{@html closeLogo}
					</button>
				</div>

				<!-- FORM -->
				{#if !isFinshed}
					<form use:enhance class="flex flex-col gap-6">
						<!-- {#each forms as form}
						 <div class="flex flex-col md:!flex-row gap-6">
							 {#each form.row as row}
								 <div class="flex flex-col gap-1 flex-grow">
									 <div class="text-sm flex gap-1">
										 <div>{row.label}</div>
										 <div class="text-error">*</div>
									 </div>
									 <input
										 name={row.name}
										 placeholder={row.placeholder}
										 class="py-2.5 px-4 rounded border border-solid border-black"
										 {...$constraints[row.name]}
										 bind:value={$form[row.name]}
									 />
									 {#if $errors[row.name] && $errors[row.name]?.length}
										 <div transition:fly={{ y: -20, duration: 300 }} class="text-xs text-error pt-2">
											 {$errors[row.name]?.[0]}
										 </div>
									 {/if}
								 </div>
							 {/each}
						 </div>
					 {/each} -->

						<!-- !! SOMEHOW I CANT MAKE THIS INTO ARRAY -->
						<div class="flex flex-col md:!flex-row gap-6">
							<!-- ?? FIRST NAME -->
							<div class="flex flex-col gap-1 flex-grow">
								<div class="text-sm flex gap-1">
									<div>First Name</div>
									<div class="text-error">*</div>
								</div>
								<input
									name="firstName"
									placeholder="Enter your first name"
									class="py-2.5 px-4 rounded border border-solid border-black"
									{...$constraints.firstName}
									bind:value={$form.firstName}
								/>
								{#if $errors.firstName && $errors.firstName?.length}
									<div transition:fly={{ y: -20, duration: 300 }} class="text-xs text-error pt-2">
										{$errors.firstName?.[0]}
									</div>
								{/if}
							</div>

							<!-- ?? LAST NAME -->
							<div class="flex flex-col gap-1 flex-grow">
								<div class="text-sm flex gap-1">
									<div>Last Name</div>
									<div class="text-error">*</div>
								</div>
								<input
									name="lastName"
									placeholder="Enter your last name"
									class="py-2.5 px-4 rounded border border-solid border-black"
									{...$constraints.lastName}
									bind:value={$form.lastName}
								/>
								{#if $errors.lastName && $errors.lastName?.length}
									<div transition:fly={{ y: -20, duration: 300 }} class="text-xs text-error pt-2">
										{$errors.lastName?.[0]}
									</div>
								{/if}
							</div>
						</div>

						<div class="flex flex-col md:!flex-row gap-6">
							<!-- ?? EMAIL -->
							<div class="flex flex-col gap-1 flex-grow">
								<div class="text-sm flex gap-1">
									<div>Email</div>
									<div class="text-error">*</div>
								</div>
								<input
									name="email"
									placeholder="Enter your email"
									class="py-2.5 px-4 rounded border border-solid border-black"
									{...$constraints.email}
									bind:value={$form.email}
								/>
								{#if $errors.email && $errors.email?.length}
									<div transition:fly={{ y: -20, duration: 300 }} class="text-xs text-error pt-2">
										{$errors.email?.[0]}
									</div>
								{/if}
							</div>

							<!-- ?? PHONE NUMBER -->
							<div class="flex flex-col gap-1 flex-grow">
								<div class="text-sm flex gap-1">
									<div>Phone Number</div>
									<div class="text-error">*</div>
								</div>
								<input
									name="phone"
									placeholder="Enter your phone number"
									class="py-2.5 px-4 rounded border border-solid border-black"
									{...$constraints.phone}
									bind:value={$form.phone}
								/>
								{#if $errors.phone && $errors.phone?.length}
									<div transition:fly={{ y: -20, duration: 300 }} class="text-xs text-error pt-2">
										{$errors.phone?.[0]}
									</div>
								{/if}
							</div>
						</div>

						<div class="flex flex-col md:!flex-row gap-6">
							<!-- ?? Subject -->
							<div class="flex flex-col gap-1 flex-grow">
								<div class="text-sm flex gap-1">
									<div>Subject</div>
									<div class="text-error">*</div>
								</div>
								<input
									name="subjects"
									placeholder="Enter your email subject"
									class="py-2.5 px-4 rounded border border-solid border-black"
									{...$constraints.subjects}
									bind:value={$form.subjects}
								/>
								{#if $errors.subjects && $errors.subjects?.length}
									<div transition:fly={{ y: -20, duration: 300 }} class="text-xs text-error pt-2">
										{$errors.subjects?.[0]}
									</div>
								{/if}
							</div>
						</div>

						<div class="flex flex-col md:!flex-row gap-6">
							<!-- ?? MESSAGE -->
							<div class="flex flex-col gap-1 flex-grow">
								<div class="text-sm flex gap-1">
									<div>Message</div>
									<div class="text-error">*</div>
								</div>

								<textarea
									class="py-2.5 px-4 rounded border border-solid border-black"
									placeholder="Type your message..."
									name="message"
									rows="4"
								>
									{$form.message}
								</textarea>
								{#if $errors.message && $errors.message?.length}
									<div transition:fly={{ y: -20, duration: 300 }} class="text-xs text-error pt-2">
										{$errors.message?.[0]}
									</div>
								{/if}
							</div>
						</div>

						<div class="flex flex-col gap-4 md:!flex-row md:!justify-end">
							<button type="submit" class="px-6 py-3 bg-black text-white rounded-full font-semibold"
								>Submit Message</button
							>
							<button class="px-6 py-3 font-semibold" on:click={() => dialog.close()} type="button"
								>Cancel</button
							>
						</div>
					</form>
				{/if}

				<!-- FINISH PAGE -->
				{#if isFinshed}
					<div class="py-60 flex flex-col items-center gap-6">
						<div class="flex flex-col gap-4">
							<div class="text-center font-bold text-2xl">Thank you!</div>
							<div class="text-center">We will get back to you as soon as possible</div>
						</div>
						<button
							class="px-6 py-3 bg-black text-white rounded-full font-semibold hover:opacity-75"
							on:click={() => {
								isFinshed = false;
							}}
						>
							Send New Message
						</button>
					</div>
				{/if}
			</div>
		</div>
	</dialog>
</div>

<style>
	dialog {
		max-width: 670px;
		border-radius: 0.6em;
		border: none;
		padding: 0;
		background-color: transparent;
	}
	dialog::backdrop {
		background: rgba(0, 0, 0, 0.3);
	}
	dialog > div {
		padding: 1em;
	}
	dialog[open] {
		animation: zoom 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
	}
	@keyframes zoom {
		from {
			transform: scale(0.95);
		}
		to {
			transform: scale(1);
		}
	}
	dialog[open]::backdrop {
		animation: fade 0.2s ease-out;
	}
	@keyframes fade {
		from {
			opacity: 0;
		}
		to {
			opacity: 1;
		}
	}
	button {
		display: block;
	}
</style>
