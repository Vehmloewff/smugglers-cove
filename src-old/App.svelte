<script>
	import Players from './Players.svelte';
	import { players } from './constants.js';
	import makeResult from './result.js';

	let team1 = 0;
	let team2 = 0;

	players.subscribe(_ => {
		team1 = Math.floor($players.length / 2);
		equalTeams('team1');
	});

	function equalTeams(lastUpdated) {
		if (lastUpdated === 'team1') team2 = $players.length - team1;
		else if (lastUpdated === 'team2') team1 = $players.length - team2;
	}

	let result;

	function getResult() {
		result = makeResult(team1, team2, $players);
	}
</script>

<h1>Random Player Picker</h1>

{#if $players.length}
	<h3>Players:</h3>
{:else}
	<h3>No players yet!</h3>
	<p>Hit the "+" button to add one</p>
{/if}

<Players {players} />

{#if $players.length}
	<p>That's a grand total of {$players.length} players.</p>
{/if}

{#if $players.length >= 2}
	<br />
	<br />

	<hr />

	<br />
	<br />
	One team will have
	<input class="number" type="number" bind:value={team1} on:input={() => equalTeams('team1')} />
	players, and the other team
	<input class="number" type="number" bind:value={team2} on:input={() => equalTeams('team2')} />
	players.
	<br />
	<br />

	<button on:click={getResult}>Create the teams</button>

	{#if result}
		<div class="result">
			Ok, after some random picks, the teams have been decided.
			<br />
			<div class="team">{result.team1.join(', ')}</div>
			<div class="team">{result.team2.join(', ')}</div>
		</div>
	{/if}
{/if}

<style>
	.number {
		width: 80px;
	}

	.team {
		width: 40%;
		display: inline-block;
		border: 1px solid black;
		margin: 1%;
		border-radius: 4px;
		padding: 5px;
	}
</style>
