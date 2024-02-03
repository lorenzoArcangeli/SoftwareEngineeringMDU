<script lang="ts">
	import { goto } from '$app/navigation';
	import Icon from '@iconify/svelte';

	//VARIABLES
	let location = '';
	let dishOrigin = '';
	let dishName = '';
	let startDate = '';
	let endDate = '';
	//To validate that the user enters a correct date
	let date = new Date();
	let dateString = date.toISOString().split('T')[0];
	//Store the type of meals to display them with a foreach
	let selectedTypeOfMeals = ['breakfast'];
	let stringSelectedTypeOfMeals = '';
	$: stringSelectedTypeOfMeals = selectedTypeOfMeals.toString();
	const typeOfMeals = ['breakfast', 'brunch', 'lunch', 'dinner', 'coffe/tea time'];
	//Store the special occasions to display them with a foreach.
	//Two arrays because there are two different rows in the form
	const specialOccasion1 = ['Daily/normal', 'Birthday', 'Weeding', 'Christmas', 'New Year'];
	const specialOccasion2 = ['Easter', 'Halloween', 'National day', 'Other festival'];
	let selectedSpecialOccasion = 'Daily/normal';
	//Since the user could enter the number of guests he wanted, causing this way
	//a very large foreach, I decided to provide a user with a range of number of
	//guests between 1 and 10 in order to avoid the crashing of the webpage
	let numberGuests = 1;
	const numbers = Array.from({ length: 10 }, (_, index) => index + 1);
	let guestsAge = Array.from({ length: 10 });
	let guestsName = Array.from({ length: 10 });
	//the total prize is automatically calculated
	let budgetForPerson = 0;
	let totalPrize = 0;
	$: totalPrize = budgetForPerson * numberGuests;
	//Only four currency values for the demo
	const currencyValues = ['€', '$', '£', 'kr'];
	const currencies = ['EUR', 'USD', 'GBP', 'SEK'];
	let selectedCurrency = currencies[0];
	let guestsCanJoin = false;
	let comments = '';

	let popupVisible = false;

	function openPopUp() {
		popupVisible = true;
	}

	function gotoHome() {
		goto('/');
	}
</script>

<div class="form-temp">
	<form method="post" enctype="multipart/form-data" on:submit={openPopUp} class="p-8 px-24">
		<h1 class="text-center font-bold text-2xl">Add request</h1>

		<!--LOCATION-->
		<div class="my-2">
			<h2 class="font-bold mb-2">Location</h2>
			<div class="rounded-md border-2 border-[#C6C6C6] p-2">
				<input
					name="location"
					type="text"
					class="w-full outline-none"
					bind:value={location}
					placeholder=""
				/>
			</div>
		</div>
		<!--DISH ORIGIN-->
		<div class="my-2">
			<h2 class="font-bold mb-2">Dish origin</h2>
			<div class="rounded-md border-2 border-[#C6C6C6] p-2">
				<input
					name="dishOrigin"
					type="text"
					class="w-full outline-none"
					onkeydown="return /[^0-9]/.test(event.key)"
					bind:value={dishOrigin}
					placeholder=""
				/>
			</div>
		</div>

		<!--DISH NAME-->
		<div class="my-2">
			<h2 class="font-bold mb-2">Dish name</h2>
			<div class="rounded-md border-2 border-[#C6C6C6] p-2">
				<input
					name="dishName"
					type="text"
					class="w-full outline-none"
					onkeydown="return /[^0-9]/.test(event.key)"
					bind:value={dishName}
					placeholder=""
				/>
			</div>
		</div>

		<!--AVAILABLE DATES-->
		<div class="my-2">
			<h2 class="font-bold">Available dates</h2>
			<div class="flex flex-row">
				<div class="flex flex-col">
					<label for="startDate" class="mb-1">From:</label>
					<div class="rounded-md mr-2 border-2 border-[#C6C6C6] p-2">
						<input
							name="startDate"
							type="date"
							class="w-full outline-none"
							min={dateString}
							bind:value={startDate}
						/>
					</div>
				</div>
				<div class="flex flex-col">
					<label for="endDate" class="mb-1">To:</label>
					<div class="rounded-md border-2 border-[#C6C6C6] p-2">
						<input
							name="endDate"
							type="date"
							class="w-full outline-none"
							min={startDate}
							bind:value={endDate}
						/>
					</div>
				</div>
			</div>
		</div>

		<!--TYPE OF MEAL-->
		<div class="my-2">
			<h2 class="font-bold mb-1">Type of meal</h2>
			{#each typeOfMeals as meal}
				<span class="mr-2">
					<input
						name="typeOfMeal"
						type="checkbox"
						id="typeOfMeal"
						value={meal}
						bind:group={selectedTypeOfMeals}
					/>
					<label for="coffe/tea time">{meal}</label>
				</span>
			{/each}
		</div>
		<input hidden name="stringTypeOfMeal" value={stringSelectedTypeOfMeals} />

		<!--SPECIAL OCCASION-->
		<div class="my-2">
			<h2 class="font-bold mb-1">Special occasion</h2>
			<div class="flex flex-col">
				<div class="flex flex-row">
					{#each specialOccasion1 as ocasion}
						<span class="mr-2">
							<input
								name="specialOccasion"
								type="radio"
								value={ocasion}
								bind:group={selectedSpecialOccasion}
							/>
							<label for="newYear">{ocasion}</label>
						</span>
					{/each}
				</div>
				<div class="flex flex-row">
					{#each specialOccasion2 as ocasion}
						<span class="mr-2">
							<input
								type="radio"
								name="specialOccasion"
								value={ocasion}
								bind:group={selectedSpecialOccasion}
							/>
							<label for="newYear">{ocasion}</label>
						</span>
					{/each}
				</div>
				<!--<input hidden name='specialOccasion' value={selectedSpecialOccasion}/>-->
			</div>
		</div>

		<!--NUMBER OF GUESTS-->
		<h2 class="font-bold mb-2">Number of guests</h2>
		<div class="flex flex-row">
			<div class="my-2 mr-16">
				<div class="rounded-md border-2 border-[#C6C6C6] p-2">
					<select class="w-full outline-none px-2" name="numberOfGuests" bind:value={numberGuests}>
						{#each numbers as number}
							<option value={number}>{number}</option>
						{/each}
					</select>
				</div>
			</div>
			<div class="my-2">
				{#each { length: numberGuests } as _, i}
					<div class="flex flex-row mb-2">
						<div class="rounded-md border-2 border-[#C6C6C6] p-2 mr-4">
							<input
								name="name"
								type="text"
								class="w-full outline-none"
								placeholder="Name"
								bind:value={guestsName[i]}
							/>
						</div>
						<div class="rounded-md border-2 border-[#C6C6C6] p-2">
							<input
								name="age"
								type="number"
								class="w-full outline-none"
								placeholder="Age"
								bind:value={guestsAge[i]}
								min="1"
								max="100"
							/>
						</div>
					</div>
				{/each}
			</div>
			<input hidden name="nameArray" value={guestsName} />
			<input hidden name="ageArray" value={guestsAge} />
		</div>

		<!--BUDGET-->
		<div class="flex flex-row">
			<div class="my-2 mr-5">
				<h2 class="font-bold mb-2">Budget for person</h2>
				<div class="rounded-md border-2 border-[#C6C6C6] p-2 flex flex-row">
					<input
						name="budget"
						type="number"
						id="budget"
						min="0"
						class="w-full outline-none"
						bind:value={budgetForPerson}
					/>
					<label class="font-bold" for="budget"
						>{currencyValues[currencies.indexOf(selectedCurrency)]}</label
					>
				</div>
			</div>

			<div class="my-2">
				<h2 class="font-bold mb-2">Currency</h2>
				<div class="rounded-md border-2 border-[#C6C6C6] p-2">
					<select name="currency" class="w-full outline-none" bind:value={selectedCurrency}>
						{#each currencies as currency}
							<option value={currency}>{currency}</option>
						{/each}
					</select>
				</div>
				<div class="flex flex-row p my-1 justify-end">
					Total:&nbsp
					<p class="font-bold">
						{totalPrize}{currencyValues[currencies.indexOf(selectedCurrency)]}
					</p>
				</div>
			</div>
		</div>

		<!--OTHER GUESTS CAN JOIN-->
		<div class="my-2 flex flex-row">
			<h2 class="font-bold mb-2">Other guests can join?</h2>
			<div class="ml-4">
				<span class="mr-2">
					<input
						id="guestCanJoin"
						type="radio"
						name="guestsCanJoin"
						value="true"
						bind:group={guestsCanJoin}
					/>
					<label for="nationalDay">Yes</label>
				</span>

				<span class="mr-2">
					<input type="radio" name="guestsCanJoin" value="false" bind:group={guestsCanJoin} />
					<label for="oterFestival">No</label>
				</span>

				<!--COMMENTS-->
				<div class="my-2">
					<h2 class="font-bold mb-2">Comments for the host</h2>
					<div class="rounded-md border-2 border-[#C6C6C6] p-2">
						<input
							name="comments"
							type="text"
							class="w-full outline-none"
							bind:value={comments}
							placeholder=""
						/>
					</div>
				</div>

				<!--SUBMIT BUTTON-->
				<div class="flex justify-center items-center w-full my-6">
					<button
						class="bg-primary text-black font-bold py-2 px-8 rounded-full hover:bg-primaryhover"
						type="submit"
						formaction="?/insertRequest"
					>
						Preview
					</button>
				</div>
			</div>
		</div>
	</form>
</div>

{#if popupVisible}
	<div class="fixed top-0 left-0 w-full h-full flex items-center justify-center overlay">
		<div class="bg-whitebackground rounded-2xl shadow z-30 relative w-1/3 p-8">
			<div class="flex flex-col items-center">
				<Icon class="text-accepted w-12 h-12" icon="simple-line-icons:check" />
				<p class="text-2xl mb-4 mt-2">Your request has been sent successfully!</p>
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
