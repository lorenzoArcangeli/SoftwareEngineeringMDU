<script lang="ts">
	import type { NotificationUser, ApplicationResult } from '$lib/server/db/types';
	import AcceptReject from './accept-reject.svelte';
	import Result from './result.svelte';
	import { page } from './store.ts';

	export let data: {
		notificationsLoad: NotificationUser[];
		applicationResults: ApplicationResult[];
		user_id: number;
	};
</script>

{#if $page == 0}
	<AcceptReject {data} />
{:else}
	<Result {data} />
{/if}
