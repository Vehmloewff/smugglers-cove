<script>
	import { go } from '../store';
	import { createEventDispatcher } from 'svelte';

	const dispatch = createEventDispatcher();

	export let route = null;
	export let href = null;
	export let blank = true;

	function click() {
		if (route) go(route);
		else if (href) {
			if (blank) window.open(href);
			else window.location = href;
		}
		dispatch('click');
	}
</script>

<button on:click={click}>
	<slot />
</button>

<style>
	button {
		background: #a46b1d;
		border: none;
		border-radius: 4px;
		margin: 0;
		padding: 4px 8px 4px 8px;
		color: rgba(233, 241, 248, 0.8);
	}
</style>
