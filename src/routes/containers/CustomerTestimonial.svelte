<script lang="ts">
	import { Marquee } from '@selemondev/svelte-marquee';
	import '@selemondev/svelte-marquee/dist/style.css';

	const testimonials = [
		{
			content:
				"HAMMERSPIR's hoses are incredibly durable and reliable, perfect for our heavy machinery needs. Highly recommended!",
			profileImg:
				'https://s3-alpha-sig.figma.com/img/c405/2b93/7b21a5ac0f3a7fbab06b5f36010e1dfa?Expires=1722816000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=flijo6iJSaqoW1pkjKb~N7E0HC4KhBvfuFGY4iC9mtat7m4Lvy9Q5bBOcMUMDv4rhSmOmfgRTuxNw7oH58nJaPMU6CriVhIdteYKUvWN7XNje2Dm2erIZgXAEQzv2NwAHvuFxZOFvy4VP8PBnruzhgNC0njokAaVQbisROu9dDZXb0Q~lPhP0JzOYf8woPwR4tn9~XmLgeOHnW2KOcbFWn3-C2cXVvWQ4PUr8AUF7LbPluOPJwU0OZV77pH~1A-oX9nag8u26CKToHVQDwGcj5GbKMOnhHS99TN2zUoSkAWUGuQ76NrEep2ZQu10D1E94rZlR4vLPXLAJnhCkhgflw__',
			name: 'John D.',
			role: 'Heavy Machinery Operator'
		},
		{
			content:
				"HAMMERSPIR's hoses are incredibly durable and reliable, perfect for our heavy machinery needs. Highly recommended!",
			profileImg:
				'https://s3-alpha-sig.figma.com/img/c405/2b93/7b21a5ac0f3a7fbab06b5f36010e1dfa?Expires=1722816000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=flijo6iJSaqoW1pkjKb~N7E0HC4KhBvfuFGY4iC9mtat7m4Lvy9Q5bBOcMUMDv4rhSmOmfgRTuxNw7oH58nJaPMU6CriVhIdteYKUvWN7XNje2Dm2erIZgXAEQzv2NwAHvuFxZOFvy4VP8PBnruzhgNC0njokAaVQbisROu9dDZXb0Q~lPhP0JzOYf8woPwR4tn9~XmLgeOHnW2KOcbFWn3-C2cXVvWQ4PUr8AUF7LbPluOPJwU0OZV77pH~1A-oX9nag8u26CKToHVQDwGcj5GbKMOnhHS99TN2zUoSkAWUGuQ76NrEep2ZQu10D1E94rZlR4vLPXLAJnhCkhgflw__',
			name: 'John D.',
			role: 'Heavy Machinery Operator'
		},
		{
			content:
				"HAMMERSPIR's hoses are incredibly durable and reliable, perfect for our heavy machinery needs. Highly recommended!",
			profileImg:
				'https://s3-alpha-sig.figma.com/img/c405/2b93/7b21a5ac0f3a7fbab06b5f36010e1dfa?Expires=1722816000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=flijo6iJSaqoW1pkjKb~N7E0HC4KhBvfuFGY4iC9mtat7m4Lvy9Q5bBOcMUMDv4rhSmOmfgRTuxNw7oH58nJaPMU6CriVhIdteYKUvWN7XNje2Dm2erIZgXAEQzv2NwAHvuFxZOFvy4VP8PBnruzhgNC0njokAaVQbisROu9dDZXb0Q~lPhP0JzOYf8woPwR4tn9~XmLgeOHnW2KOcbFWn3-C2cXVvWQ4PUr8AUF7LbPluOPJwU0OZV77pH~1A-oX9nag8u26CKToHVQDwGcj5GbKMOnhHS99TN2zUoSkAWUGuQ76NrEep2ZQu10D1E94rZlR4vLPXLAJnhCkhgflw__',
			name: 'John D.',
			role: 'Heavy Machinery Operator'
		},
		{
			content:
				"HAMMERSPIR's hoses are incredibly durable and reliable, perfect for our heavy machinery needs. Highly recommended!",
			profileImg:
				'https://s3-alpha-sig.figma.com/img/c405/2b93/7b21a5ac0f3a7fbab06b5f36010e1dfa?Expires=1722816000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=flijo6iJSaqoW1pkjKb~N7E0HC4KhBvfuFGY4iC9mtat7m4Lvy9Q5bBOcMUMDv4rhSmOmfgRTuxNw7oH58nJaPMU6CriVhIdteYKUvWN7XNje2Dm2erIZgXAEQzv2NwAHvuFxZOFvy4VP8PBnruzhgNC0njokAaVQbisROu9dDZXb0Q~lPhP0JzOYf8woPwR4tn9~XmLgeOHnW2KOcbFWn3-C2cXVvWQ4PUr8AUF7LbPluOPJwU0OZV77pH~1A-oX9nag8u26CKToHVQDwGcj5GbKMOnhHS99TN2zUoSkAWUGuQ76NrEep2ZQu10D1E94rZlR4vLPXLAJnhCkhgflw__',
			name: 'John D.',
			role: 'Heavy Machinery Operator'
		}
	];
</script>

<div class="bg-white text-black min-h-screen lg:flex lg:flex-col lg:justify-center">
	<div class="container py-28 lg:py-0">
		<div class="flex flex-col gap-2 md:text-center">
			<div class="text-3xl/relaxed md:text-4xl/relaxed lg:text-5xl/relaxed font-bold">
				Customers Testimonials
			</div>
			<div class="leading-relaxed lg:text-lg">
				Lorem ipsum dolor sit amet, consectetur adipiscing elit.
			</div>
		</div>

		<div class="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6 lg:hidden">
			{#each testimonials as testimonial}
				<div class="rounded-lg border border-solid border-black px-8 py-6 md:py-8">
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
	<div class="mt-16 hidden lg:block">
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
