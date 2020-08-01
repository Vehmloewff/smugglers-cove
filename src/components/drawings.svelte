<script>
	import { drawings } from '../store';
	import UI from '../ui';

	export let goToDrawing;
	export let focusGenerate;
</script>

{#if $drawings.length}
	<div class="top">
		<UI.Button on:click={focusGenerate}>New</UI.Button>
	</div>
{/if}

{#each $drawings as drawing}
	<div class="drawing" on:click={() => goToDrawing(drawing.id)}>{drawing.name}</div>
{:else}
	<div class="center-container">
		<div class="center">
			<div class="none-yet">No Drawings Yet</div>
			<UI.Button on:click={focusGenerate}>Create a new one</UI.Button>
		</div>
	</div>
{/each}

<style>
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
