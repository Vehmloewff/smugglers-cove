<script>
	import UI from '../ui';
	import PlayerInfo from '../components/player-info.svelte';
	import { tick } from 'svelte';
	import Button from '../ui/button.svelte';
	import { players } from '../store';

	let addingPlayer = false;

	let name = null;
	let age = null;
	let weight = null;

	function click() {
		setTimeout(() => (addingPlayer = true), 30);
	}

	function cancel() {
		addingPlayer = false;
	}

	function done() {
		players.update(players => {
			players.push({
				name,
				age,
				weight,
				id: Date.now(),
			});
			return players;
		});
		addingPlayer = false;
	}
</script>

<UI.Button on:click={click}>Add Player</UI.Button>
{#if addingPlayer}
	<UI.Modal onCancel={cancel}>
		<div class="container">
			<h3>Add Player</h3>

			<PlayerInfo bind:name bind:weight bind:age />

			<div class="pad20" />

			<div style="text-align: right">
				<UI.Button on:click={cancel}>Cancel</UI.Button>
				&nbsp;&nbsp;
				<UI.Button on:click={done}>Save</UI.Button>
			</div>

			<div class="pad20" />
		</div>
	</UI.Modal>
{/if}
