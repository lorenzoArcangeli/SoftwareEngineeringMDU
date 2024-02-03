	<script lang="ts">
		import Icon from '@iconify/svelte';
		export let ID_event = 0;
		export let profileImageSrc = '';
		export let profileName = '';
		export let title = '';
		export let startDate: any;
		export let endDate: any;
		export let budget = '';
		export let description = '';
		export let currency: string;
		export let location = '';

		function getCurrency()
		{
		switch (currency.toUpperCase()) {
			case 'SEK':
				currency = "kr";
				break;

			case 'EUR':
				currency = "€"
				break;

			case 'GBP':
				currency = "£";
			break;

			default:
				currency = "$";
			break;
		}
		return currency;
	}

		let displayStartDate = new Intl.DateTimeFormat('en-GB', { day: '2-digit', month: '2-digit', year: '2-digit' }).format(startDate);
		let displayEndDate = new Intl.DateTimeFormat('en-GB', { day: '2-digit', month: '2-digit', year: '2-digit' }).format(endDate);
	
		let isFavorited = false;

		function toggleIconColor() {
			isFavorited = !isFavorited;
		}
		
	</script>

	<div class="border border-complementary rounded-[1vw] shadow-md w-[16vw] h-[23vw] p-2 flex flex-col">
		<div class="grid-cols-2 grid mb-4 ">
			<span class="">  
			<p class="bg-white inline border-request border text-request px-4 py-1 rounded-full font-bold text-[0.8vw]">Request</p>
			</span>

			<button class="drop-shadow-xl place-self-end"
			on:click={toggleIconColor}>
			<Icon
				class="text-textlight w-[3VW] h-[3VW] heart-icon"
				icon="mdi:heart"
				style="color: {isFavorited ? 'red' : 'white'}"
			/>
		</button>
		</div>
		<h2 class="mb-2 text-[1vw]">{title}</h2>
		<div class="justify-between flex bg-blue-100 py-1 mb-2">
			<p class="text-[0.8vw] inline">Available dates:</p> 
			<p class="text-[0.8vw] inline font-normal">{displayStartDate} - {displayEndDate}</p>
		</div>

		<p class="text-[0.8vw] leading-none mb-4">Description: <span class="font-normal">{description}</span></p>
	
		<div class="mt-auto">

			<div class="justify-between flex text-[1vw] mb-2">
				<div class="flex">
				<Icon class="w-[1.4VW] h-[1.4VW]" icon="system-uicons:location"/>
				<p class="font-normal  inline mb-0">{location}</p>
				</div>
				<Icon icon="openmoji:flag-sweden" class="w-[1.4VW] h-[1.4VW]"/>
			</div>

			<div class="justify-between flex text-[0.8vw] mb-2">
				<p class="font-bold inline">Budget for person:</p>
				<p class="font-normal inline">{budget} <span class="font-bold">{getCurrency()}</span></p>
			</div>
		
			<hr class="w-full border-1 mb-2 border-textgray" /> 

			<div class="grid grid-cols-5">
				<img src={profileImageSrc} alt="bg-gray-500" class="w-[2vw] h-[2vw] rounded-full object-cover" />
				<div class="text-[0.8vw] font-normal col-span-2">
					<p class="text-textgray text-[0.7vw]">Requested by:</p>
					<p class="text-[0.7vw]">{profileName}</p>
				</div>
				<!--
				<button
				class="col-span-2 ml-auto h-[4vh] w-[5vw] text-[0.7vw] text-textdark font-semibold px-[0.8vw] py-[0.2vw] bg-primary rounded-full"
				on:click={applyEvent}>Offer</button
			>-->

			</div>
	

		</div>
	</div>
