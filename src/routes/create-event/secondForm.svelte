<script context="module">
	import { form, form_two } from './store';

	function handleClick() {
		form.set('third');
	}
	function handleClickBack() {
		form.set('first');
	}
</script>
<form on:submit|preventDefault={handleClick}>
<div class="form-temp">
	<div class="p-8 px-24">
		<h1 class="text-center font-bold text-2xl">Make offer</h1>

		<div class="text-center mb-16">
			<h1 class="text-sm inline text-white rounded-full bg-accepted px-1.5">1</h1>
			<h1 class="text-sm inline font-bold text-accepted">Event type —</h1>
			<h1 class="text-sm inline text-white rounded-full bg-accepted px-1.5">2</h1>
			<h1 class="text-sm inline font-bold text-accepted">General information</h1>
			<h1 class="text-sm inline font-bold text-unfinished">— 3 Details</h1>
		</div>

		<h1 class="font-bold mb-4">Name of the event</h1>
		<div class="input-border">
			<input class="w-full outline-none" bind:value={$form_two.eventName} placeholder="" required/>
		</div>

		<div>
			<h1 class="font-bold mb-4">Location</h1>
		</div>
		<div class="input-border">
			<input class="w-full outline-none" bind:value={$form_two.location} placeholder="" required/>
		</div>

		<div class="grid grid-cols-4 gap-3">
			<div>
				<h1 class="font-bold">Duration in hours</h1>
				<select class="input-border w-full" bind:value={$form_two.hours} name="hours" id="hours">
					<option value="1">1</option>
					<option value="2">2</option>
					<option value="3">3</option>
					<option value="4">4</option>
					<option value="5">5</option>
				</select>
			</div>

			<div>
				<h1 class="font-bold">Capacity(guests max)</h1>
				<select
					class="input-border w-full"
					bind:value={$form_two.capacity}
					name="guests"
					id="guests"
				>
					<option value="1">1</option>
					<option value="2">2</option>
					<option value="3">3</option>
					<option value="4">4</option>
					<option value="5">5</option>
				</select>
			</div>
		</div>

		<div>
			<h1 class="font-bold mb-4">Description</h1>
		</div>
		<div class="pb-12 input-border">
			<input
				class="w-full outline-none"
				bind:value={$form_two.description}
				placeholder="Describe the event"
				required
			/>
		</div>

		<div>
			<h1 class="font-bold mb-4">Menu</h1>
		</div>
		<div class="pb-12 input-border">
			<input
				class="w-full outline-none"
				bind:value={$form_two.menu}
				placeholder="Type the whole menu or describe your special"
				required
			/>
		</div>

		<div class="grid grid-cols-4 gap-3 mb-16">
			<div>
				<h1 class="font-bold">Price per person</h1>
				<input
					class="w-full outline-none input-border"
					bind:value={$form_two.price}
					name="price"
					id="price"
					type="number"
					required min="0"
					max="1000"
				/>
			</div>

			<div>
				<h1 class="font-bold">Currency*</h1>
				<select
					class="w-full outline-none input-border"
					bind:value={$form_two.currency}
					name="currency"
					id="currency"
				>
					<option value="EUR">EUR</option>
					<option value="USD">USD</option>
					<option value="SEK">SEK</option>
				</select>
			</div>
		</div>
		<div class="flex justify-center">
			<button on:click={handleClickBack} class="mx-8">
				<h1 class=" text-sm font-semibold py-4 px-16 bg-primary inline rounded-full">Back</h1>
			</button>

			<button class="mx-8" type="submit">
				<h1 class=" text-sm font-semibold py-4 px-16 bg-primary inline rounded-full">Next</h1>
			</button>
		</div>
	</div>
</div>
</form>