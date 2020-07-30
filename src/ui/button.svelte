<script>
	import { go } from '../store';

	export let route = null;
	export let href = null;
	export let blank = true;

	function click() {
		if (route) go(route);
		else if (path) {
			if (blank) window.open(href);
			else window.location = href;
		}
	}
</script>

<button on:click={click}>
	<slot />
</button>

<style>
	button {
		background: rgba(0, 0, 0, 0.5);
		border: none;
		border-radius: 4px;
		margin: 0;
		padding: 4px 8px 4px 8px;
		color: rgba(233, 241, 248, 0.8);
	}
</style>
