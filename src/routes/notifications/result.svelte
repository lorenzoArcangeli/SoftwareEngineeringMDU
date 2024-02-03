<script lang="ts">
	import type { ApplicationResult, NotificationUser } from '$lib/server/db/types';
	import NotificationResult from './applicationResult.svelte';
	import Icon from '@iconify/svelte';
	import SwitchPageButtons from './switch-page.svelte';

	export let data: {
		notificationsLoad: NotificationUser[];
		applicationResults: ApplicationResult[];
		user_id: number;
	};

	let dataArray = Array.isArray(data) ? data : data.applicationResults;
	let applicationResults = dataArray.map((event) => ({
		full_name: event.full_name,
		name_of_event: event.name_of_event,
		state: event.state
	}));
</script>

<main class="bg-front p-5 relative">
	<Icon class="text-primary w-12 h-12 absolute left-0 top-5 ml-5" icon="mdi:bell" />

	<h1 class="text-2xl font-bold relative z-10 ml-14 mt-2">Result Notifications</h1>

	<h1 class="border-b border-textdark pb-2 w-full">&nbsp;</h1>

	<SwitchPageButtons />

	{#each applicationResults as { full_name, name_of_event, state }, i}
		<NotificationResult {full_name} {name_of_event} {state} />
	{/each}
</main>
