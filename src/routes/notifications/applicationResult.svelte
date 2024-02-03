<script lang="ts">
	import '../../app.css';

	export let full_name: string;
	export let name_of_event: string;
	export let state: string;

	let states = [
		{
			state: 'waiting',
			borderColor: 'border-idle',
			textColor: 'text-idle',
			backgroundColor: 'bg-idle'
		},
		{
			state: 'true',
			borderColor: 'border-accepted',
			textColor: 'text-accepted',
			backgroundColor: 'bg-accepted'
		},
		{
			state: 'false',
			borderColor: 'border-rejected',
			textColor: 'text-rejected',
			backgroundColor: 'bg-rejected'
		}
	];

	// Find the corresponding state object based on the value of 'state'
	let currentState = states.find((s) => s.state === state) || states[0];
</script>

<div
	class={`border-l-[7px] py-16 rounded-3xl shadow-md max-w-[1150px] mx-auto mt-12 border-solid ${currentState.borderColor}`}
>
	<h1 class={`font-bold text-lg ml-10`}>
		{#if state === 'true'}
			Your application for <u class="text-xl">{name_of_event}</u> was accepted by
			<u class="text-xl">{full_name}</u>
		{:else if state === 'false'}
			Your application for <u class="text-xl">{name_of_event}</u> was rejected by
			<u class="text-xl">{full_name}</u>
		{:else}
			Your application for <u class="text-xl">{name_of_event}</u> is not accepted or rejected yet by
			<u class="text-xl">{full_name}</u>
		{/if}
	</h1>
</div>
