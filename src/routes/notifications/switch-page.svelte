<script>
	import { page } from './store.ts';

	function change() {
		page.set(1);
	}
</script>

<div class="mt-12 flex w-full justify-center">
	<div>
		<button
			class="mt-[2vw] px-[2vw] py-[1vw] text-[1vw] bg-primary text-textdark font-semibold rounded-full {$page == 0
				? 'bg-primaryhover'
				: 'bg-primary'}"
			on:click={() => {
				page.set(0);
			}}>Accept or Reject</button
		>

		<button
			class="mt-[2vw] px-[2vw] py-[1vw] text-[1vw] bg-primary text-textdark font-semibold rounded-full {$page == 1
				? 'bg-primaryhover'
				: 'bg-primary'}"
			on:click={() => {
				page.set(1);
			}}>Results</button
		>
	</div>
</div>
