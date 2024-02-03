<script lang="ts">
	import { form, form_one, form_two, form_three } from './store';
	import { eventDatabaseConnection } from './connection';
	import { goto } from '$app/navigation';
	import Icon from '@iconify/svelte';

	function stringToBoolean(str: any) {
		return str;
	}
	const date = new Date().toISOString().split('T')[0];
	let popupVisible = false;

	function handleSubmit() {
		eventDatabaseConnection(
			new Date($form_three.dateStart),
			new Date($form_three.dateEnd),
			$form_two.location,
			parseInt($form_two.capacity),
			$form_two.price,
			$form_one.meal,
			$form_one.origin,
			$form_one.dishname,
			$form_two.eventName,
			parseInt($form_two.hours),
			$form_two.description,
			$form_three.start,
			$form_two.currency,
			$form_one.occasion,
			$form_two.menu,
			$form_three.agenda,
			stringToBoolean($form_three.photo),
			stringToBoolean($form_three.walking),
			stringToBoolean($form_three.smoking),
			stringToBoolean($form_three.kids),
			stringToBoolean($form_three.pet),
			stringToBoolean($form_three.alcohol)
		);
		openPopUp();
	}

	function handleClickBack() {
		form.set('second');
	}

	function openPopUp() {
		popupVisible = true;
	}

	function gotoHome() {
		$form = 'first';
		$form_three.dateStart = '';
		$form_three.dateEnd = '';
		$form_two.location = '';
		$form_two.capacity = '1';
		$form_two.price = 0;
		$form_one.meal = 'breakfast';
		$form_one.origin = '';
		$form_one.dishname = '';
		$form_two.eventName = '';
		$form_two.hours = '1';
		$form_two.description = '';
		$form_three.start = '';
		$form_one.occasion = 'Daily/normal';
		$form_two.menu = '';
		$form_three.agenda = '';
		$form_three.photo = false;
		$form_three.walking = false;
		$form_three.smoking = false;
		$form_three.kids = false;
		$form_three.pet = false;
		$form_three.alcohol = false;
		goto('/');
	}
</script>

<form on:submit|preventDefault={handleSubmit}>
	<div class="form-temp">
		<div class="p-8 px-24">
			<h1 class="text-center font-bold text-2xl">Make offer</h1>

			<div class="text-center mb-16">
				<h1 class="text-sm inline text-white rounded-full bg-accepted px-1.5">1</h1>
				<h1 class="text-sm inline font-bold text-accepted">Event type —</h1>
				<h1 class="text-sm inline text-white rounded-full bg-accepted px-1.5">2</h1>
				<h1 class="text-sm inline font-bold text-accepted">2 General information —</h1>
				<h1 class="text-sm inline text-white rounded-full bg-accepted px-1.5">3</h1>
				<h1 class="text-sm inline font-bold text-accepted">Details</h1>
			</div>

			<h1 class="font-bold mb-4">Agenda</h1>

			<div class="input-border">
				<input
					class="w-full pb-12 outline-none"
					bind:value={$form_three.agenda}
					placeholder=" "
					required
				/>
			</div>

			<div>
				<h1 class="font-bold mb-4">Regulations</h1>
			</div>
			<div class="grid grid-cols-2">
				<h1 class="mb-4 mr-2">Permitted to take photo/video</h1>
				<div class="inline-block">
					<span class="mr-2">
						<label>
							<input class="mr-2" type="radio" value={true} bind:group={$form_three.photo} />Yes
						</label>
						<label>
							<input class="mr-2" type="radio" value={false} bind:group={$form_three.photo} />No
						</label>
					</span>
				</div>

				<h1 class="mb-4 mr-2">Permitted to walk around the house</h1>
				<div class="inline-block">
					<span class="mr-2">
						<label>
							<input class="mr-2" type="radio" value={true} bind:group={$form_three.walking} />Yes
						</label>
						<label>
							<input class="mr-2" type="radio" value={false} bind:group={$form_three.walking} />No
						</label>
					</span>
				</div>

				<h1 class="mb-4 mr-2">Smoking permitted</h1>
				<div class="inline-block">
					<span class="mr-2">
						<label>
							<input class="mr-2" type="radio" value={true} bind:group={$form_three.smoking} />Yes
						</label>
						<label>
							<input class="mr-2" type="radio" value={false} bind:group={$form_three.smoking} />No
						</label>
					</span>
				</div>

				<h1 class="mb-4 mr-2">Kids allowed</h1>
				<div class="inline-block">
					<span class="mr-2">
						<label>
							<input class="mr-2" type="radio" value={true} bind:group={$form_three.kids} />Yes
						</label>
						<label>
							<input class="mr-2" type="radio" value={false} bind:group={$form_three.kids} />No
						</label>
					</span>
				</div>

				<h1 class="mb-4 mr-2">Pets allowed</h1>
				<div class="inline-block">
					<span class="mr-2">
						<label>
							<input class="mr-2" type="radio" value={true} bind:group={$form_three.pet} />Yes
						</label>
						<label>
							<input class="mr-2" type="radio" value={false} bind:group={$form_three.pet} />No
						</label>
					</span>
				</div>

				<h1 class="mb-4 mr-2">Alchol included</h1>
				<div class="inline-block">
					<span class="mr-2">
						<label>
							<input class="mr-2" type="radio" value={true} bind:group={$form_three.alcohol} />Yes
						</label>
						<label>
							<input class="mr-2" type="radio" value={false} bind:group={$form_three.alcohol} />No
						</label>
					</span>
				</div>
			</div>

			<div>
				<h1 class="font-bold mb-4">Available date</h1>
			</div>

			<div class="grid grid-cols-3">
				<input
					type="date"
					class="input-border w-full"
					min={date}
					bind:value={$form_three.dateStart}
					required
				/>
			</div>

			<div>
				<h1 class="font-bold mb-4">Available date end</h1>
			</div>

			<div class="grid grid-cols-3">
				<input
					type="date"
					class="input-border w-full"
					min={$form_three.dateStart}
					bind:value={$form_three.dateEnd}
					required
				/>
			</div>

			<div>
				<h1 class="font-bold mb-4">Event start time</h1>
			</div>
			<div class="mb-16 grid grid-cols-3">
				<input type="time" class="input-border w-full" bind:value={$form_three.start} required />
			</div>

			<div class="flex justify-center">
				<button on:click={handleClickBack} class="mx-8">
					<h1 class=" text-sm font-semibold py-4 px-16 bg-primary inline rounded-full">Back</h1>
				</button>

				<button type="submit" class="mx-8">
					<h1 class=" text-sm font-semibold py-4 px-16 bg-primary inline rounded-full">Submit</h1>
				</button>
			</div>
		</div>
	</div>
</form>

{#if popupVisible}
	<div class="fixed top-0 left-0 w-full h-full flex items-center justify-center overlay">
		<div class="bg-whitebackground rounded-2xl shadow z-30 relative w-1/3 p-8">
			<div class="flex flex-col items-center">
				<Icon class="text-accepted w-12 h-12" icon="simple-line-icons:check" />
				<p class="text-2xl mb-4 mt-2">Your offer has been created successfully!</p>
				<button
					class="bg-primary hover:bg-primaryhover text-textdark rounded-2xl h-auto w-auto px-4 py-2"
					on:click={gotoHome}
				>
					Home Page
				</button>
			</div>
		</div>
		<div class="bg-blackbackground opacity-75 absolute inset-0 z-20"></div>
	</div>
{/if}
