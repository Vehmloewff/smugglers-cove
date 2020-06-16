<script>
	import { onMount } from 'svelte';

	export let value;
	export let type = 'text';
	export let placeholder = null;

	let input;

	onMount(() => input.focus());
</script>

{#if type === 'number'}
	<input bind:value type="number" bind:this={input} />
{:else}
	<input bind:value type="text" bind:this={input} {placeholder} />
{/if}

<style>
	input {
		margin: 0;
	}

	input[type='number'] {
		width: 50px;
	}
	input[type='text'] {
		width: 200px;
	}
</style>
