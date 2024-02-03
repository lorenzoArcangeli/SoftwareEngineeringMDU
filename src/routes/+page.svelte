<script>
	import LandingPage from './landing-page/landing-page.svelte';
	import SearchPage from './search-page/home.svelte';

	export let data;

	$: data, console.log('reloaded!');
</script>

{#if data.user_id}
	<SearchPage {data} />
{:else}
	<LandingPage {data} />
{/if}
