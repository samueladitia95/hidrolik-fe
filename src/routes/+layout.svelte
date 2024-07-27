<script>
	import '../app.css';
	import Header from '$lib/components/Header.svelte';
	import Footer from '$lib/components/Footer.svelte';
</script>

<div class="font-inter">
	<Header />
	<slot />
	<Footer />
</div>
