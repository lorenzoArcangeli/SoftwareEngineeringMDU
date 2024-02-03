<script lang="ts">
	import { goto } from '$app/navigation';
	import Card from '$lib/FixedComponents/ListingCard.svelte';
	import RequestCard from '$lib/FixedComponents/RequestCard.svelte';
	import Icon from '@iconify/svelte';

	export let cards: any;
	export let cardType = true;
</script>

<div class="flex flex-col items-end mb-8">
	<div class="w-full flex space-x-[6vw] flex-row gap-8 overflow-auto overflow-y-hidden">
		{#if cardType}
			{#each cards as card}
				<div class="w-[11vw]">
					<Card
						ID_event={card.ID}
						imageSrc={card.imageSrc}
						title={card.title}
						subtitle={card.subtitle}
						profileImageSrc={card.profileImageSrc}
						profileName={card.profileName}
						currency={card.currency}
						budget={card.budget}
					/>
				</div>
			{/each}
		{:else}
			{#each cards as card}
				<div class="w-[11vw]">
					<RequestCard
						ID_event={card.ID_event}
						title={card.title}
						description={card.description}
						profileImageSrc={card.profileImageSrc}
						profileName={card.profileName}
						budget={card.budget}
						startDate={card.startDate}
						endDate={card.endDate}
						currency={card.currency}
						location={card.location}
					/>
				</div>
			{/each}
		{/if}
	</div>
</div>
