<script>
	import UI from '../ui';
	import { players, drawings } from '../store';
	import { createTeams, createUndercover } from '../lib';

	export let goToDrawing;
	export let focusPlayers;

	function generate() {
		const result = createTeams($players);
		const playersWithRoles = createUndercover(result.team1, result.team2, result.team3);

		const id = Date.now();

		drawings.update(drawings => {
			drawings.push({
				...result,
				players: playersWithRoles,
				id,
			});
			return drawings;
		});

		goToDrawing(id);
	}
</script>

<div class="center-container">
	<div class="center">
		{#if $players.length < 6}
			<div class="players-info">
				At least
				<big>6</big>
				players are required to generate
				<big>3</big>
				teams
			</div>
			<div class="generate" />
		{:else}
			<div class="players-info">
				Divide
				<big>{$players.length}</big>
				players into
				<big>3</big>
				teams
			</div>
			<div class="generate">
				<UI.Button on:click={generate}>Generate Teams</UI.Button>
			</div>
		{/if}
		<div class="ps">
			P.S. You can perform all CRUD operations on players in the
			<a href={location.hash} on:click={focusPlayers}>players tab</a>
			down below.
		</div>
	</div>
</div>

<style>
	.center-container {
		display: flex;
		align-items: center;
		justify-content: center;
		height: 100%;
	}

	.players-info {
		font-size: 20px;
	}
	big {
		font-size: 30px;
	}
	.generate {
		padding: 30px;
	}
	.ps {
		opacity: 0.8;
	}
</style>
