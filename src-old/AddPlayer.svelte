<script>
	import { tick } from 'svelte';
	import Input from './Input.svelte';

	export let addPlayer;

	let adding = false;
	let value = '';

	let input;

	function keyup(e) {
		if (e.keyCode === 13) {
			addPlayer(value);
			adding = false;
			value = '';
		}
	}
</script>

{#if adding}
	<Input placeholder="name" bind:value on:keyup={keyup} bind:this={input} />
{:else}
	<button
		on:click={async () => {
			adding = true;
			await tick();
			input.focus();
		}}>
		Add Player
	</button>
{/if}
