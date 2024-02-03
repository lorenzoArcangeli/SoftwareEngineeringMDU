<script lang="ts">
	//ID_event, username, nationality, start_date, end_date, time, description, title, state
	export let ID_application: number;
	export let ID_event: number;
	export let username: string;
	export let languages: string;
	export let start_date: string;
	export let end_date: string;
	export let time: string;
	export let description: string;
	export let title: string;
	export let initialState: string;
	import '../../app.css';

	let states = [
		{ state: 'idle', borderColor: 'border-idle', textColor: 'text-idle' },
		{ state: 'accepted', borderColor: 'border-accepted', textColor: 'text-accepted' },
		{ state: 'rejected', borderColor: 'border-rejected', textColor: 'text-rejected' }
	];

	//Already accepted or rejected
	let stateAlreadyPresent = false;
	if (initialState != 'waiting') stateAlreadyPresent = true;

	let state = states[0];
	if (stateAlreadyPresent) {
		if (initialState == 'true') {
			state = states[1];
		} else {
			state = states[2];
		}
	}

	async function handleAccept() {
		state = states[1];

		await fetch('api/set-notification', {
			method: 'POST',
			body: JSON.stringify({ state: 'true', ID_application }),
			headers: {
				'content-type': 'application/json'
			}
		});
	}

	async function handleReject() {
		state = states[2];

		await fetch('api/set-notification', {
			method: 'POST',
			body: JSON.stringify({ state: 'false', ID_application }),
			headers: {
				'content-type': 'application/json'
			}
		});
	}
</script>

<div
	class=" border-l-[7px] {state.borderColor} py-24 flex flex-row items-center justify-center gap-3 rounded-3xl bg-back shadow-md max-w-[1150px] mx-auto mt-12 relative border'"
>
	<div class="absolute top-10 left-8 flex items-center">
		<h1 class="mr-2">Request for</h1>
		<p class="font-bold mb-1 text-xl underline">{title}</p>
	</div>
	<input type="hidden" bind:value={ID_event} />
	<div class="absolute bottom-0 right-1/2 mb-2.5 transform translate-x-1/2">
		<div class="flex space-x-2">
			{#if state == states[0]}
				<button
					on:click={handleAccept}
					class="px-8 py-3 rounded-full border-2 border-textdark text-[1vw] font-semibold"
					disabled={stateAlreadyPresent}
				>
					<span>Accept</span>
				</button>
				<button
					on:click={handleReject}
					class="px-8 py-3 rounded-full border-2 border-textdark text-[1vw] font-semibold"
					disabled={stateAlreadyPresent}
				>
					<span>Reject</span>
				</button>
			{:else if state == states[1]}
				<span class="{state.textColor} p-4">✓ Accepted</span>
			{:else}
				<span class="{state.textColor} p-4">✗ Rejected</span>
			{/if}
		</div>
	</div>

	<div class="w-7/8 p-4 bg-front rounded-3xl">
		<div class="grid grid-cols-2">
			<div class="flex">
				<div class="w-6 h-6 bg-back rounded-full mr-4"></div>
				<div>
					<p class="font-bold mb-1">{username}</p>
					<p>{languages}</p>
				</div>
			</div>
			<div class=" flex flex-col items-center">
				<div class=" flex flex-row items-center">
					<p><span class="font-bold">Start date:</span> {start_date}</p>
					<p><span class="font-bold">&nbsp&nbspEnd date:</span> {end_date}</p>
					<p><span class="font-bold">&nbsp&nbspTime:</span> {time}</p>
				</div>
				<p><span class="font-bold">Description:</span> {description}</p>
			</div>
		</div>
	</div>
</div>
