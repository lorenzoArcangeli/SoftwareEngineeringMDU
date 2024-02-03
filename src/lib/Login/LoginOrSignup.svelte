<script lang="ts">
	import { onMount, onDestroy, createEventDispatcher } from 'svelte';
	import { showLoginForm, isSignUp } from '$lib/Login/store.js';

	const dispatch = createEventDispatcher();
	let canClose = false;

	function handleClickOutside(event: Event) {
		if (event.target instanceof HTMLElement) {
			if (canClose && !event.target.closest('.login-container')) {
				dispatch('close');
			}
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

	function showSignUpForm() {
		isSignUp.set(true);
		showLoginForm.set(true);
	}

	function showLoginFormFunction() {
		isSignUp.set(false);
		showLoginForm.set(true);
	}
</script>

<div class="fixed top-[4vw] right-[8.9vw] flex items-center z-50">
	<div
		class="p-[0.5vw] rounded shadow-lg flex flex-col border border-b border-complementary bg-opacity-50 backdrop-blur-md bg-transparent"
	>
		<button
			on:click={showLoginFormFunction}
			class="ml-auto mb-[0.5vw] w-[6vw] h-[2.3vw] text-[0.65vw] font-bold px-[1.5vw] bg-primary rounded"
			>Log in</button
		>
		<button
			on:click={showSignUpForm}
			class="ml-auto w-[6vw] h-[2.3vw] text-[0.65vw] font-bold px-[1.5vw] bg-whitebackground rounded border-[1px] border-complementary"
			>Sign up</button
		>
	</div>
</div>
