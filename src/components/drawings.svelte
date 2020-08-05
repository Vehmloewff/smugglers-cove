<script>
	import { drawings } from '../store';
	import UI from '../ui';
	import { reverseArray } from '../lib/utils';

	export let goToDrawing;
	export let focusGenerate;
</script>

{#if $drawings.length}
	<div class="top container centered">
		<h2 style="float: left; margin: 0">Drawings</h2>
		<div style="float: right">
			<UI.Button on:click={focusGenerate}>New</UI.Button>
		</div>
	</div>
{/if}

{#each reverseArray($drawings) as drawing}
	<div class="container centered">
		<div class="drawing" on:click={() => goToDrawing(drawing.id)}>{drawing.name}</div>
	</div>
{:else}
	<div class="center-container">
		<div class="center">
			<div class="none-yet">No Drawings Yet</div>
			<UI.Button on:click={focusGenerate}>Create a new one</UI.Button>
		</div>
	</div>
{/each}

<style>
	.top {
		padding: 20px 0;
		overflow: auto;
	}

	.drawing {
		margin: 8px 0;
		border-radius: 4px;
		background: rgba(0, 0, 0, 0.3);
		padding: 16px;
		font-size: 20px;
		cursor: pointer;
		user-select: none;
	}
	.drawing:hover {
		background: rgba(0, 0, 0, 0.445);
	}

	.center-container {
		display: flex;
		align-items: center;
		justify-content: center;
		height: 100%;
		opacity: 0.8;
	}
	.none-yet {
		padding-bottom: 15px;
		font-size: 20px;
	}
</style>
