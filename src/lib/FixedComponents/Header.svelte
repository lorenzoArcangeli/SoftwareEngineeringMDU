<script lang="ts">
	import logo from '../../logo.svg';
	import Icon from '@iconify/svelte';
	import Login from '$lib/Login/LoginOrSignup.svelte';
	import { showLoginForm } from '$lib/Login/store.js';

	import LoginForm from '$lib/Login/Login.svelte';
	import { goto } from '$app/navigation';

	let showLogin = false;
	let linkNotifications = '/';

	export let data: { user_id: Number };

	$: {
		if (data.user_id) {
			linkNotifications = '/notifications';
		}
	}

	function closeLogin() {
		showLogin = false;
	}

	function showLoginFunction() {
		showLogin = true;
	}

	async function logout() {
		await fetch('api/logout', { method: 'POST' });
		window.location.reload();
	}
</script>

<header
	class="bg-whitebackground sticky top-0 left-0 w-full flex items-center justify-start px-[80px] py-[1vw] z-50 border-b border-complementary bg-opacity-30 backdrop-blur-md bg-transparent h-[5vw]"
>
	<a href="/">
		<img src={logo} alt="Logo" class="h-[3vw]" />
	</a>

	<div class="absolute right-[10vw] flex items-center space-x-[1.5vw]">
		<a href="/">
			<Icon class="text-textdark w-[1.8vw] h-[1.8vw]" icon="ph:wallet" />
		</a>
		<a href="/">
			<Icon class="text-textdark w-[1.8vw] h-[1.8vw]" icon="mdi:heart-outline" />
		</a>
		<a href={linkNotifications}>
			<Icon class="text-textdark w-[1.8vw] h-[1.8vw]" icon="tabler:messages" />
		</a>

		{#if data.user_id}
			<a href="/profile/figma">
				<img
					src="https://img.freepik.com/premium-photo/handsome-young-businessman-shirt-eyeglasses_85574-6228.jpg"
					alt=""
					class="w-[2vw] h-[2vw] rounded-full object-cover border-complementary border-2"
				/>
			</a>

			<button
				on:click={logout}
				class="ml-auto h-[2.3vw] text-[0.65vw] font-bold px-[1.5vw] bg-primary rounded-full"
			>
				Log out
			</button>
		{:else}
			<button
				on:click={showLoginFunction}
				class="ml-auto h-[2.3vw] text-[0.65vw] font-bold px-[1.5vw] bg-primary rounded-full"
			>
				Log in/Sign up
			</button>
		{/if}
	</div>

	{#if $showLoginForm}
		<div class="absolute left-0 h-[1000vw] w-[100vw] bg-blackbackground bg-opacity-80"></div>
		<LoginForm />
	{/if}

	{#if showLogin}
		<Login on:close={closeLogin} />
	{/if}
</header>
