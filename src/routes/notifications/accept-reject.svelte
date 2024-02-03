<!-- +page.svelte -->
<script lang="ts">
	import { onMount } from 'svelte';
	import Notifications from './notification.svelte';
	import { goto } from '$app/navigation';
	import Icon from '@iconify/svelte';
	import type { NotificationUser, ApplicationResult } from '$lib/server/db/types';
	import SwitchPageButtons from './switch-page.svelte';

	export let data: {
		notificationsLoad: NotificationUser[];
		applicationResults: ApplicationResult[];
		user_id: number;
	};

	// If data is an object, extract the array
	let dataArray = Array.isArray(data) ? data : data.notificationsLoad;

	let notifications = dataArray.map((event) => ({
		ID_application: event.ID_application,
		ID_event: event.ID_event,
		username: event.requestUserName,
		languages: event.languages,
		start_date: new Date(event.available_start_date).toLocaleDateString('en-US', {
			year: 'numeric',
			month: '2-digit',
			day: '2-digit'
		}),
		end_date: new Date(event.available_end_date).toLocaleDateString('en-US', {
			year: 'numeric',
			month: '2-digit',
			day: '2-digit'
		}),
		time: event.start_time,
		description: event.description,
		title: event.name_of_event,
		initialState: event.state
	}));

	onMount(async () => {
		if (data.user_id == null) {
			goto('/');
		}
	});
</script>

<main class="bg-front p-5 relative">
	<Icon class="text-primary w-12 h-12 absolute left-0 top-5 ml-5" icon="mdi:bell" />

	<h1 class="text-2xl font-bold relative z-10 ml-14 mt-2">Request Notifications</h1>

	<h1 class="border-b border-textdark pb-2 w-full">&nbsp;</h1>

	<SwitchPageButtons />

	{#each notifications as { ID_application, ID_event, username, languages, start_date, end_date, time, description, title, initialState }}
		<Notifications
			{ID_application}
			{ID_event}
			{username}
			{languages}
			{start_date}
			{end_date}
			{time}
			{description}
			{title}
			{initialState}
		/>
	{/each}
</main>
