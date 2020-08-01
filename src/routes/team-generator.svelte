<script>
	import { players, auditLog } from '../store';
	import UI from '../ui';

	import Player from '../components/player.svelte';
	import AddPlayer from '../components/add-player.svelte';

	import LogItem from '../components/log-item.svelte';
	import Drawings from '../components/drawings.svelte';
	import Generate from '../components/generate.svelte';
	import Drawing from '../components/drawing.svelte';
	import PlayerData from '../components/player-data.svelte';

	let addingPlayer = false;
	let displaying = 'players';

	let currentSection = 'drawings'; // or 'generate', 'drawing', 'player-data'
	let drawingId = null;
	let playerIndex = null;

	function goToDrawing(drawing, player) {
		if (player) {
			playerIndex = player;
			currentSection = 'player';
		}
		if (drawing) {
			drawingId = drawing;
		}

		if (drawing && !player) {
			currentSection = 'drawing';
		}
	}
</script>

{#if currentSection === 'drawings'}
	<Drawings {goToDrawing} />
{:else if currentSection === 'generate'}
	<Generate {goToDrawing} />
{:else if currentSection === 'drawing'}
	<Drawing {goToDrawing} {drawingId} />
{:else if currentSection === 'player-data'}
	<PlayerData {goToDrawing} {drawingId} {playerIndex} />
{/if}

<div class="footer-panel">
	<div class="options">
		<div class="tab" class:active={displaying === 'players'} on:click={() => (displaying = 'players')}>Players</div>
		<div class="tab" class:active={displaying === 'log'} on:click={() => (displaying = 'log')}>Log</div>
	</div>
	<div class="footer-content">
		{#if displaying === 'players'}
			<div class="players">
				<div style="padding: 8px">
					{#each $players as player}
						<Player {...player} />
					{/each}
				</div>

				<div class="container">
					<div class="pad20" />
					<AddPlayer />
				</div>
			</div>
		{:else if displaying === 'log'}
			{#each $auditLog as item}
				<LogItem {...item} {goToDrawing} />
			{/each}
		{/if}
	</div>
</div>

<style>
	.footer-panel {
		position: fixed;
		background: rgba(0, 0, 0, 0.5);
		bottom: 0;
		right: 0;
		left: 0;
		height: 300px;
		border-top: 5px solid black;
	}

	.options {
		margin-bottom: 57px;
	}
	.tab {
		width: 50%;
		float: left;
		font-size: 20px;
		text-align: center;
		border-bottom: 3px solid rgba(0, 0, 0, 0);
		padding: 10px 0;
		user-select: none;
		cursor: pointer;
	}
	.tab.active {
		border-bottom: 3px solid #a46b1d;
	}

	.footer-content {
		overflow-y: auto;
		height: 243px;
	}
</style>
