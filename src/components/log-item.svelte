<script>
	import AddPlayer from './add-player.svelte';
	import { onMount, tick } from 'svelte';
	import { auditLog } from '../store';

	export let body;
	export let children = [];
	export let drawingId;
	export let goToDrawing;
	export let lastOne;
	export let scrollDown;

	function logClick() {
		if (children.length) showingChildren = !showingChildren;
	}

	let showingChildren = lastOne;

	onMount(() => {
		auditLog.subscribe(async () => {
			if (!lastOne) return;

			await tick();
			scrollDown();
		});
	});
</script>

<div class="log">
	<span on:click={logClick}>
		{#if children.length}
			{#if showingChildren}&bigtriangledown;{:else}&gt;{/if}
		{/if}
		{body}
	</span>
	{#if drawingId}
		<span class="view" on:click={() => goToDrawing(drawingId)}>view</span>
	{/if}
</div>

{#if showingChildren}
	{#each children as log}
		<div class="log">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{log}</div>
	{/each}
{/if}

<style>
	.log {
		padding: 5px 14px;
		user-select: none;
	}
	.log:hover {
		background: rgba(255, 255, 255, 0.1);
	}

	.view {
		padding-left: 15px;
		font-size: 14px;
		font-style: italic;
		cursor: pointer;
	}
</style>
