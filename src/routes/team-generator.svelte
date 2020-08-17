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
	let footerDisplaying = 'players';

	let currentSection = 'drawings'; // or 'generate', 'drawing'
	let drawingId = null;

	function goToDrawing(drawing) {
		drawingId = drawing;
		currentSection = 'drawing';
	}

	function focusPlayers() {
		footerDisplaying = 'players';
	}

	function focusGenerate() {
		currentSection = 'generate';
	}

	function goHome() {
		currentSection = 'drawings';
	}

	let footerEl;
	function scrollDown() {
		footerEl.scrollTop = footerEl.scrollHeight;
	}
</script>

<div class="section">
	{#if currentSection === 'drawings'}
		<Drawings {goToDrawing} {focusGenerate} />
	{:else if currentSection === 'generate'}
		<Generate {goToDrawing} {focusPlayers} />
	{:else if currentSection === 'drawing'}
		<Drawing {drawingId} />
	{/if}
</div>

{#if currentSection !== 'drawings'}
	<div class="cancel" on:click={goHome}>X</div>
{/if}

<div class="footer-panel">
	<div class="options">
		<div class="tab" class:active={footerDisplaying === 'players'} on:click={() => (footerDisplaying = 'players')}>Players</div>
		<div class="tab" class:active={footerDisplaying === 'log'} on:click={() => (footerDisplaying = 'log')}>Log</div>
	</div>
	<div class="footer-content" bind:this={footerEl}>
		{#if footerDisplaying === 'players'}
			<div class="players">
				<div style="padding: 8px">
					{#each $players.sort((a, b) => b.age - a.age) as player}
						<Player age={player.age} name={player.name} weight={player.weight} id={player.id} />
					{:else}
						<div class="no-players nothing">No players yet!</div>
					{/each}
				</div>

				<div class="container">
					<div class="pad20" />
					<AddPlayer />
				</div>
			</div>
		{:else if footerDisplaying === 'log'}
			{#each $auditLog as item, index}
				<LogItem {...item} {goToDrawing} lastOne={$auditLog.length === index + 1} {scrollDown} />
			{:else}
				<div class="no-logs nothing">No logs yet!</div>
			{/each}
			<div class="pad20" />
		{/if}
	</div>
</div>

<style>
	.section {
		overflow-y: auto;
		height: calc(100vh - calc(55px + 305px));
	}

	.cancel {
		position: fixed;
		top: 85px;
		right: 30px;
		font-size: 30px;
		width: 40px;
		height: 40px;
		text-align: center;
		line-height: 40px;
		border-radius: 4px;
		background: rgba(163, 27, 27, 0.24);
		user-select: none;
		cursor: pointer;
	}
	.cancel:hover {
		background: rgba(163, 27, 27, 0.534);
	}

	.no-players {
		padding: 20px 8px;
		opacity: 0.8;
	}
	.no-logs {
		padding: 20px 16px;
	}
	.nothing {
		opacity: 0.8;
	}

	.footer-panel {
		position: fixed;
		background: rgba(0, 0, 0, 0.5);
		bottom: 0;
		right: 0;
		left: 0;
		height: 300px;
		border-top: 5px solid black;
		z-index: 50;
	}

	.options {
		margin-bottom: 57px;
		padding: 0 16px;
	}
	.tab {
		float: left;
		font-size: 20px;
		text-align: center;
		border-bottom: 3px solid rgba(0, 0, 0, 0);
		padding: 10px 16px;
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
