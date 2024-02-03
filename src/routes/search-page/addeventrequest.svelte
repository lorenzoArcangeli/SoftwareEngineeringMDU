<script>
	import { goto } from '$app/navigation';

	let popupVisible = false;

	function openPopUp() {
		popupVisible = true;
	}

	function closePopUp() {
		popupVisible = false;
	}

	function handleOffer() {
		goto('../create-event');
	}

	function handleRequest() {
		goto('../request-form');
	}
</script>

<button
	class="bg-primary text-black text-[1vw] font-semibold py-2 px-8 rounded-full hover:bg-primaryhover"
	on:click={openPopUp}
	>Add offer/request
</button>

{#if popupVisible}
	<div class="fixed top-0 left-0 w-full h-full flex items-center justify-center overlay">
		<div class="bg-whitebackground rounded-2xl shadow z-10 relative w-1/3 p-8">
			<button class="absolute top-0 right-0 mr-3 mt-1 text-textdark" on:click={closePopUp}>X</button
			>
			<div class="flex flex-col items-center">
				<p class="text-[2vw] font-semibold mb-4">Are you</p>
				<div class="flex flex-row space-x-4">
					<button
						class="bg-primary text-black text-[1vw] font-semibold py-2 px-8 rounded-2xl hover:bg-primaryhover"
						on:click={handleOffer}
					>
					<span class="font-bold">Host</span> <br /> <span class="text-center text-[1vw]">(Make Offer)</span>
					</button>
					<div class="justify-center items-center flex">
						<p class="text-center">or</p>
					</div>
					<button
						class="bg-primary text-black text-[1vw] font-semibold py-2 px-8 rounded-2xl hover:bg-primaryhover"
						on:click={handleRequest}	
					>
						<span class="font-bold">Guest</span> <br /> <span class="text-center text-[1vw]">(Add Request)</span>
					</button>
				</div>
			</div>
		</div>
		<div class="bg-blackbackground opacity-75 absolute inset-0 z-0"></div>
	</div>
{/if}
