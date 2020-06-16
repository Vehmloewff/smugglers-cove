<script>
	import Player from './Player.svelte';
	import AddPlayer from './AddPlayer.svelte';

	export let players;

	function addPlayer(name) {
		$players.push(name);
		$players = $players;
	}
	function updatePlayer(index, newName) {
		$players[index] = newName;
	}
	function removePlayer(index) {
		console.log(index);
		$players.splice(index, 1);
		$players = $players;
	}
</script>

{#each $players as player, index}
	<div class="player">
		<Player name={player} updatePlayer={newVal => updatePlayer(index, newVal)} removePlayer={_ => removePlayer(index)} />
	</div>
{/each}

<br />

<AddPlayer {addPlayer} />
