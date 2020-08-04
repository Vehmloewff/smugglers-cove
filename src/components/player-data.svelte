<script>
	import { drawings } from '../store';
	import Modal from '../ui/modal.svelte';

	export let playerId;
	export let drawingId;
	export let goToDrawing;

	$: drawing = $drawings.find(({ id }) => id === drawingId);
	$: player = drawing.players.find(player => player.id === playerId);
	$: buddies = getBuddies(player);

	function getBuddies(player) {
		const buddies = player.buddies.map(({ id }) => drawing.players.find(player => player.id === id));

		// If there is a triple buddy team, don't let those on the same team know each other
		if (buddies.length === 2 && buddies.find(buddy => buddy.isUndercover) && buddies.find(buddy => !buddy.isUndercover))
			return buddies.filter(buddy => buddy.isUndercover);

		return buddies;
	}

	function getTeam(id) {
		const isInside = arr => arr.find(player => player.id === id);

		if (isInside(drawing.team1)) return 'Cop';
		else if (isInside(drawing.team2)) return 'Robber';
		else if (isInside(drawing.team3)) return 'Smuggler';
	}

	function defectionTeam(team) {
		if (team === 'Cop') return 'Smuggler';
		else if (team === 'Robber') return 'Cop';
		else if (team === 'Smuggler') return 'Robber';
	}

	let seconds = 10.0;

	const interval = setInterval(() => {
		seconds -= 0.1;

		if (seconds <= 0) done();
	}, 100);

	function done() {
		goToDrawing(drawingId);
		clearInterval(interval);
	}
</script>

<Modal onCancel={() => done()}>
	<div class="container center">
		<h1>{player.name}</h1>
		<h3>
			Dismissing in
			<big>{seconds.toFixed(1)}</big>
		</h3>
		{#if player.isUndercover}
			You are a {defectionTeam(getTeam(player.id))} playing the part of a {getTeam(player.id)}.
			<br />
			<br />
			<b>You are undercover!</b>
		{:else}A {getTeam(player.id)} through and through.{/if}

		<div class="pad20" />

		{#if buddies.length === 1}Your buddy is...{:else}Your buddies are...{/if}

		{#each buddies as buddy}
			<div class="buddy-wrapper">
				{buddy.name}, a
				{#if buddy.isUndercover}
					{defectionTeam(getTeam(buddy.id))} undercover as a {getTeam(buddy.id)}.
				{:else}{getTeam(buddy.id)}.{/if}
			</div>
		{/each}

		<div class="pad20" />
	</div>
</Modal>

<style>
	big {
		font-size: 25px;
	}
	.buddy-wrapper {
		padding: 8px;
		margin: 8px;
		border-radius: 4px;
		background: #a46c1d49;
	}
</style>
