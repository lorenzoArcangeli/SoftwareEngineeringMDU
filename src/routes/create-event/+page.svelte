<script lang="ts">
	import FirstForm from './firstForm.svelte';
	import SecondForm from './secondForm.svelte';
	import ThirdForm from './thirdForm.svelte';
	import { form, form_one, form_two, form_three } from './store';
	import '../../app.css';
</script>

{#if $form == 'first'}
	<FirstForm />
{:else if $form == 'second'}
	<SecondForm />
{:else if $form == 'third'}
	<ThirdForm />
{/if}
