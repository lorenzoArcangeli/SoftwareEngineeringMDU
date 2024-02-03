<script lang="ts">
	import { onMount, onDestroy } from 'svelte';
	import { isSignUp, showLoginForm as showLoginFormStore } from '$lib/Login/store.js';

	let canClose = false;
	let showSignIn = true;

	let signInVisible = 'visible';
	let signUpVisible = 'hidden';

	isSignUp.subscribe((value) => {
		if (value) {
			console.log('Sign up true');
			showSignIn = false;
			signInVisible = 'hidden';
			signUpVisible = 'visible';
		}
	});

	const toggleForm = () => {
		showSignIn = !showSignIn;

		setTimeout(() => {
			signInVisible = signInVisible === 'visible' ? 'hidden' : 'visible';
			signUpVisible = signUpVisible === 'visible' ? 'hidden' : 'visible';
		}, 350);
	};

	function handleClickOutside(event: Event) {
		if (event.target instanceof HTMLElement) {
			if (
				(event.target.matches('.close-button') || !event.target.closest('#popup-window')) &&
				canClose
			) {
				showLoginFormStore.update((value) => false);
			}
		}
	}

	async function loginFunction() {
		var emailValue = (document.getElementById('emailInput') as HTMLInputElement).value;
		var passwordValue = (document.getElementById('passwordInput') as HTMLInputElement).value;
		console.log('email: ' + emailValue);
		console.log('password: ' + passwordValue);

		fetch('api/login', {
			method: 'POST',
			body: JSON.stringify({ email: emailValue, password: passwordValue }),
			headers: {
				'content-type': 'application/json'
			}
		})
			.then((response) => response.json())
			.then((data) => {
				if (data.success) {
					window.alert('Succesfully logged in!');
					window.location.reload();
				} else {
					window.alert('Unsuccesful login.');
				}
			})
			.catch((error) => console.error('Error:', error));
	}

	function signUpFunction() {
		const nameValue = (document.getElementById('nameInput') as HTMLInputElement).value;

		const emailValue = (document.getElementById('emailInputSignUp') as HTMLInputElement).value;

		const passwordValue = (document.getElementById('passwordInputSignUp') as HTMLInputElement)
			.value;

		const confirmPasswordValue = (
			document.getElementById('confirmPasswordInput') as HTMLInputElement
		).value;
		if (passwordValue === confirmPasswordValue) {
			fetch('api/register', {
				method: 'POST',
				body: JSON.stringify({ name: nameValue, email: emailValue, password: passwordValue }),
				headers: {
					'content-type': 'application/json'
				}
			})
				.then((response) => response.json())
				.then((data) => {
					if (data.success) {
						window.alert('Succesfully registered!');
					} else {
						window.alert('Unsuccesful registration.');
					}
				})
				.catch((error) => console.error('Error:', error));
		} else {
			window.alert('Confirm password and password dont match');
		}
	}

	onMount(() => {
		if (typeof window !== 'undefined') {
			window.addEventListener('click', handleClickOutside);
			setTimeout(() => {
				canClose = true;
			}, 1);
		}
	});

	onDestroy(() => {
		if (typeof window !== 'undefined') {
			window.removeEventListener('click', handleClickOutside);
		}
	});
</script>

<div class="flex justify-center items-center h-screen bg-gray z-50 w-[100vw]">
	<div
		id="popup-window"
		class="relative w-[65vw] min-w-[65vw] h-[40vw] bg-whitebackground shadow-lg rounded-lg overflow-hidden top-[20vw]"
	>
		<!-- Cannot change bg-white to bg-whitebackground, causes issues -->

		<!-- Sign Up Form -->
		<div
			style="visibility: {signUpVisible};"
			class={`absolute top-0 w-[40vw] h-full p-[1vw] bg-whitebackground transition-transform duration-1000 ease-in-out ${
				showSignIn ? 'translate-x-0' : 'translate-x-[65%]'
			}`}
		>
			<form id="a-form" class="flex flex-col justify-center items-center h-full">
				<h2 class="text-[2vw] font-bold mb-[1vw]">Create Account</h2>
				<input
					id="nameInput"
					class="input w-[23vw] h-[3vw] text-[1vw] mt-[1vw]"
					type="text"
					placeholder="Name"
				/>
				<input
					id="emailInputSignUp"
					class="input w-[23vw] h-[3vw] text-[1vw] mt-[1vw]"
					type="text"
					placeholder="Email"
				/>
				<input
					id="passwordInputSignUp"
					class="input w-[23vw] h-[3vw] text-[1vw] mt-[1vw]"
					type="password"
					placeholder="Password"
				/>
				<input
					id="confirmPasswordInput"
					class="input w-[23vw] h-[3vw] text-[1vw] mt-[1vw]"
					type="password"
					placeholder="Confirm Password"
				/>
				<button
					on:click={signUpFunction}
					class="mt-[2vw] px-[2vw] py-[1vw] text-[1vw] bg-primary text-textdark font-semibold rounded-full"
					>Sign up</button
				>
			</form>
		</div>

		<!-- Sign In Form -->
		<div
			style="visibility: {signInVisible};"
			class={`absolute top-0 w-[40vw] h-full p-[1vw] bg-whitebackground transition-transform duration-1000 ease-in-out ${
				showSignIn ? 'translate-x-0' : 'translate-x-[65%]'
			}`}
		>
			<form id="b-form" class="flex flex-col justify-center items-center h-full">
				<h2 class="text-[2vw] font-bold mb-[1vw]">Welcome back!</h2>
				<input
					id="emailInput"
					class="input w-[23vw] h-[3vw] text-[1vw] mt-[1vw]"
					type="text"
					placeholder="Email"
				/>
				<input
					id="passwordInput"
					class="input w-[23vw] h-[3vw] text-[1vw] mt-[1vw]"
					type="password"
					placeholder="Password"
				/>
				<button
					on:click={loginFunction}
					class="mt-[2vw] px-[2vw] py-[1vw] text-[1vw] bg-primary text-textdark font-semibold rounded-full"
					>Log in</button
				>
			</form>
		</div>

		<!-- Sign In Panel -->
		<div
			style="visibility: {signUpVisible};"
			class={`absolute top-0 w-[26vw] h-full p-[3vw] shadow bg-whitebackground transition-transform duration-1000 ease-in-out ${
				showSignIn ? 'translate-x-[150%]' : 'translate-x-0'
			}`}
		>
			<form id="b-form" class="flex flex-col justify-center items-center h-full">
				<h2 class="text-[2vw] font-semibold">Have an account?</h2>
				<p class="text-center text-[1vw] mt-[1vw]">
					Log in with your personal information to fully use our services
				</p>
				<button
					class="mt-[2vw] px-[2vw] py-[1vw] text-[1vw] bg-primary text-textdark font-semibold rounded-full"
					on:click={toggleForm}>Log in</button
				>
			</form>
		</div>

		<!-- Sign Up Panel -->
		<div
			style="visibility: {signInVisible};"
			class={`absolute top-0 w-[26vw] shadow h-full p-[3vw]  bg-whitebackground transition-transform duration-1000 ease-in-out ${
				showSignIn ? 'translate-x-[150%]' : 'translate-x-0'
			}`}
		>
			<form id="b-form" class="flex flex-col justify-center items-center h-full">
				<h2 class="text-[2vw] font-semibold">No account?</h2>
				<p class="text-center text-[1vw] mt-[1vw]">
					Enter your personal information to start your journey with us
				</p>
				<button
					class="mt-[2vw] px-[2vw] py-[1vw] text-[1vw] bg-primary text-textdark font-semibold rounded-full"
					on:click={toggleForm}>Sign up</button
				>
			</form>
		</div>
		<button
			class="absolute top-[1vw] right-[2vw] text-[2vw] font-bold text-gray close-button"
			on:click={handleClickOutside}>X</button
		>
	</div>
</div>
