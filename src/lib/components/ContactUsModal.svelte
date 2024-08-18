<script lang="ts">
	import closeLogo from '$lib/icons/close-logo.svg?raw';

	export let showModal: boolean = false; // boolean

	let dialog: HTMLDialogElement; // HTMLDialogElement

	$: if (dialog && showModal) dialog.showModal();

	const forms = [
		{
			row: [
				{
					type: 'input',
					label: 'First Name',
					placeholder: 'Enter your first name',
					name: 'firstName'
				},
				{
					type: 'input',
					label: 'Last Name',
					placeholder: 'Enter your last name',
					name: 'lastName'
				}
			]
		},
		{
			row: [
				{
					type: 'input',
					label: 'Email',
					placeholder: 'Enter your email',
					name: 'email'
				},
				{
					type: 'input',
					label: 'Phone Number',
					placeholder: 'Enter your phone number',
					name: 'phone'
				}
			]
		},
		{
			row: [
				{
					type: 'input',
					label: 'Subject',
					placeholder: 'Enter your email subject',
					name: 'subject'
				}
			]
		},
		{
			row: [
				{
					type: 'area',
					label: 'Message',
					placeholder: 'Type your message...',
					name: 'message'
				}
			]
		}
	];
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
		<div on:click|stopPropagation class="w-full p-6 flex flex-col gap-6">
			<!-- TITLE -->
			<div class="flex justify-between">
				<div class="text-2xl font-bold">Inquiry Forms</div>
				<button class="h-6 w-6 md:!h-8 md:!w-8" on:click={() => dialog.close()}>
					{@html closeLogo}
				</button>
			</div>

			<!-- FORM -->
			<form class="flex flex-col gap-6">
				{#each forms as form}
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
								/>
							</div>
						{/each}
					</div>
				{/each}

				<div class="flex flex-col gap-4 md:!flex-row md:!justify-end">
					<button class="px-6 py-3 bg-black text-white rounded-full font-semibold"
						>Submit Message</button
					>
					<button class="px-6 py-3 font-semibold" on:click={() => dialog.close()} type="button"
						>Cancel</button
					>
				</div>
			</form>
		</div>
	</dialog>
</div>

<style>
	dialog {
		max-width: 670px;
		border-radius: 0.6em;
		border: none;
		padding: 0;
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
