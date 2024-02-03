<script>
	import '../app.css';
	import Header from '$lib/FixedComponents/Header.svelte';
	import Footer from '$lib/FixedComponents/Footer.svelte';

	export let data;
</script>

<Header {data} />
<slot />
<Footer />
