<script lang="ts">
	import Icon from '@iconify/svelte';
	import CardGrid from './card-grid.svelte';
	import Map from './map.svelte';
	import AddEventRequestButton from './addeventrequest.svelte';
	import type { LandingPageEvent, LandingPageRequest } from '$lib/server/db/types.js';
	import { search } from './store';
	import LandingPage from '../landing-page/landing-page.svelte';
	import { connectStorageEmulator } from 'firebase/storage';

	export let data;

	let dataEvent = Array.isArray(data) ? data : data.eventCard;
	let dataRequest = Array.isArray(data) ? data : data.requestCard;

	let eventCards = dataEvent.map((event: LandingPageEvent) => ({
		imageSrc: `https://res.cloudinary.com/coopsverige/image/upload/f_auto,fl_progressive,q_90,g_center,h_800,w_800/v1679315482/cloud/277230.jpg`,
		title: event.name_of_event,
		subtitle: event.location,
		profileImageSrc: 'https://hips.hearstapps.com/hmg-prod/images/gettyimages-1148433914.jpg',
		profileName: event.name,
		ID: event.ID,
		currency: event.currency,
		budget: event.guest_price
	}));

	console.log(data);

	//Location missing
	let requestCards = dataRequest.map((event: LandingPageRequest) => ({
		title: event.dish_name,
		startDate: event.available_start_date,
		endDate: event.available_end_date,
		budget: event.budget,
		description: event.description,
		location: event.location,
		profileImageSrc: 'https://hips.hearstapps.com/hmg-prod/images/gettyimages-1148433914.jpg',
		profileName: event.name,
		currency: event.currency,
		ID: event.ID
	}));
</script>

<div class="flex flex-col items-center font-bold">
	<div class="flex items-center [&>*]:mx-6">
		<span>Destination: 23</span>
		<span>Members: 150 000</span>

		<div class="flex">
			<span>National dishes: </span>
			<Icon icon="openmoji:flag-sweden" />
			<Icon icon="openmoji:flag-ukraine" />
			<Icon icon="openmoji:flag-united-states" />
		</div>
	</div>

	<Map />

	<div class="outline-none rounded-full bg-white border-2 p-2 px-6 mt-8 mb-2">
		<input class="outline-none" placeholder="Search" bind:value={$search} />
	</div>
	<div class="w-4/5 mb-4">
		<AddEventRequestButton />
	</div>

	<div class="w-4/5">
		<hr class="w-full border-2 mb-4" />

		<div class="my-4">
			<h1>Offers</h1>
		</div>
		<CardGrid
			cards={$search == ''
				? eventCards
				:eventCards.filter((item) =>
						item.title.toLowerCase().includes($search.toLocaleLowerCase())
				  )}
		/>
		{#if eventCards.filter(item => item.title.toLowerCase().includes($search.toLowerCase())).length === 0}
		<h1 class="mb-8 text-center font-semibold text-[1vw]">There were no offers for <span class="font-bold"> "{$search}" </span> </h1>
		{/if}

		<div class="my-4">
			<h1>Requests</h1>
		</div>
		<CardGrid
			cardType={false}
			cards={$search == ''
				? requestCards
				: requestCards.filter((item) =>
						item.title.toLowerCase().includes($search.toLocaleLowerCase())
				  )}
		/>
		{#if requestCards.filter(item => item.title.toLowerCase().includes($search.toLowerCase())).length === 0}
		<h1 class="mb-8 text-center font-semibold text-[1vw]">There were no requests for <span class="font-bold"> "{$search}" </span></h1>
		{/if}

	</div>
</div>
