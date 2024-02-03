<script>
	export let ID_event = 0;
	export let imageSrc = '';
	export let title = '';
	export let subtitle = '';
	export let profileImageSrc = '';
	export let profileName = '';
	export let currency = '';
	export let budget = 0;

	import Icon from '@iconify/svelte';
	let isFavorited = false;

	function toggleIconColor() {
		isFavorited = !isFavorited;
	}

	function applyEvent() {
		const requestData = {
			ID_event
		};

		// Make a POST request to the /insert-event endpoint using fetch
		fetch('api/apply-event', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(requestData)
		})
			.then((response) => response.json())
			.then((data) => {
				if (data.success) {
					window.alert('Succesfully applied to event.');
				} else {
					window.alert('You are already applied to this event.');
				}
			})
			.catch((error) => console.error('Error:', error));
	}

	function getCurrency() {
		switch (currency.toUpperCase()) {
			case 'SEK':
				currency = 'kr';
				break;

			case 'EUR':
				currency = '€';
				break;

			case 'GBP':
				currency = '£';
				break;

			default:
				currency = '$';
				break;
		}
		return currency;
	}
</script>

<div class="border border-complementary rounded-[2vw] shadow-md w-[16vw] h-[23vw]">
	<!--SO WHEN I CLICK ON THE CARD I CAN GET THE EVENT ID-->
	<input type="hidden" bind:value={ID_event} />
	<div class="relative">
		<div class="h-1/4">
			<img src={imageSrc} alt="" class="w-full h-[12vw] rounded-t-lg object-cover" />
		</div>
		<div
			class="absolute left-[0.8vw] top-[0.8vw] bg-whitebackground opacity-1 border border-offer w-[5vw] h-[1.7vw] drop-shadow-xl text-center flex items-center justify-center rounded-full font-bold"
		>
			<p class=" text-[0.8vw] text-offer">Offer</p>
		</div>
		<button class="absolute top-[0.5vw] drop-shadow-xl right-[0.5vw]" on:click={toggleIconColor}>
			<Icon
				class="text-textlight w-[3VW] h-[3VW] heart-icon"
				icon="mdi:heart"
				style="color: {isFavorited ? 'red' : 'white'}"
			/>
		</button>
	</div>
	<div class="px-2">
		<h2 class="font-bold text-[1vw] my-2">
			{title}
		</h2>
		<div class="mt-auto">
			<div class="justify-between flex text-[1vw] mb-4">
				<div class="flex">
					<Icon class="w-[1.4VW] h-[1.4VW]" icon="system-uicons:location" />
					<p class="font-normal inline mb-0">{subtitle}</p>
				</div>
				<Icon icon="openmoji:flag-sweden" class="w-[1.4VW] h-[1.4VW]" />
			</div>

			<div class="justify-between flex text-[0.8vw] mb-2">
				<p class="font-bold inline">Price per person:</p>
				<p class="font-normal inline">{budget} <span class="font-bold">{getCurrency()}</span></p>
			</div>
			<hr class="w-full border-1 mb-2 border-textgray" />
			<div class="grid grid-cols-5">
				<img
					src={profileImageSrc}
					alt="profile-image"
					class="w-[2vw] h-[2vw] rounded-full object-cover"
				/>
				<div class="text-[0.8vw] font-normal col-span-2">
					<p class="text-textgray text-[0.7vw]">Created by:</p>
					<p class="text-[0.7vw]">{profileName}</p>
				</div>

				<button
					class="col-span-2 ml-auto h-[4vh] w-[5vw] text-[0.7vw] text-textdark font-semibold px-[0.8vw] py-[0.2vw] bg-primary rounded-full"
					on:click={applyEvent}>Apply</button
				>
			</div>
		</div>
	</div>
</div>
