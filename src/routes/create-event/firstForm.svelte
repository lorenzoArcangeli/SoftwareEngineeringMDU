<script context="module">
	import { form, form_one } from './store';

	function handleClick() {
		form.set('second');
	}
</script>

<form on:submit|preventDefault={handleClick}>
<div class="form-temp">
	<div class="p-8 px-24">
		<h1 class="text-center font-bold text-2xl">Make offer</h1>

		<div class="text-center mb-16">
			<h1 class="text-sm inline text-white rounded-full bg-accepted px-1.5">1</h1>
			<h1 class="text-sm inline font-bold text-accepted">Event type</h1>
			<h1 class="text-sm inline font-bold text-unfinished">— 2 General information</h1>
			<h1 class="text-sm inline font-bold text-unfinished">— 3 Details</h1>
		</div>

		<h1 class="font-bold">Type of meal</h1>

		<div class="my-4 w-4/5">
			{#each $form_one.meals as mymeal}
				<div class="mr-2 inline-block">
					<label>
						<input class="mr-2" type="radio" value={mymeal} bind:group={$form_one.meal} required/>{mymeal}
					</label>
				</div>
			{/each}
		</div>

		<div>
			<h1 class="font-bold mb-4">Dish origin</h1>
		</div>
		<div class="input-border">
			<input onkeydown="return /[^0-9]/.test(event.key)"
			class="w-full outline-none" bind:value={$form_one.origin} placeholder=" " required/>
		</div>

		<div>
			<h1 class="font-bold mb-4">Dishname</h1>
		</div>
		<div class="input-border">
			<input onkeydown="return /[^0-9]/.test(event.key)"
			class="w-full outline-none" bind:value={$form_one.dishname} placeholder=" " required/>
		</div>

		<div>
			<h1 class="font-bold mb-4">Special occasion</h1>
		</div>


		<div class="w-4/5 mb-16">
			{#each $form_one.occasions as myoccasion}
				<div class="mr-2 inline-block">
					<label>
						<input
							class="mr-2"
							type="radio"
							value={myoccasion}
							bind:group={$form_one.occasion}
							required
						/>{myoccasion}
					</label>
				</div>
			{/each}
			
		</div>
	

		<div class="flex justify-center">
			<button type="submit" >
				<h1 class=" text-sm font-semibold py-4 px-16 bg-primary inline rounded-full">Next</h1>
			</button>
		</div>
	</div>
</div>
</form>