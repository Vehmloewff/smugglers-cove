<script>
	import { drawings, addLog } from '../store';
	import { randomizeArray } from '../lib/utils';
	import { onMount } from 'svelte';
	import PlayerData from './player-data.svelte';

	export let drawingId;

	$: drawing = $drawings.find(({ id }) => id === drawingId);
	$: log(drawingId);

	function joinPlayers(players) {
		return players.map(player => player.name).join(', ');
	}

	function log() {
		addLog(`${drawing.name} was just opened.`, drawingId);
	}

	let playerId = null;
</script>

{#if !drawing}
	<div class="center-container">
		<div class="center">
			<p>This drawing doesn't exist!</p>
		</div>
	</div>
{:else}
	<div class="pad50" />
	<div class="whole">
		<div class="third">
			<div class="container">
				<h3>Cops</h3>
				{joinPlayers(drawing.team1)}
			</div>
		</div>
		<div class="third">
			<div class="container">
				<h3>Robbers</h3>
				{joinPlayers(drawing.team2)}
			</div>
		</div>
		<div class="third">
			<div class="container">
				<h3>Smugglers</h3>
				{joinPlayers(drawing.team3)}
			</div>
		</div>
	</div>

	<div class="pad50" />

	<div style="padding: 8px;" class="center">
		{#each drawing.players.sort((a, b) => b.age - a.age) as player}
			<div class="player-view" on:click={() => setTimeout(() => (playerId = player.id), 50)}>{player.name}</div>
		{/each}
	</div>
{/if}

{#if playerId}
	<PlayerData {playerId} {drawing} remove={() => (playerId = null)} />
{/if}

<style>
	.whole {
		margin: auto;
		max-width: 900px;
		/* padding: 8px; */
		overflow: auto;
	}
	.third {
		/* padding: 8px; */
		float: left;
		width: 33.3%;
		text-align: center;
	}

	.player-view {
		background: rgba(0, 0, 0, 0.8);
		border-radius: 4px;
		padding: 8px;
		user-select: none;
		cursor: pointer;
		margin: 8px;
		display: inline-block;
	}
</style>
