<script>
	import { players } from '../store';
	import UI from '../ui';
	import PlayerInfo from './player-info.svelte';
	import { tick } from 'svelte';

	export let name;
	export let age;
	export let weight;
	export let id;

	let editing = false;
	let editName = name;
	let editAge = age;
	let editWeight = weight;

	function edit() {
		setTimeout(() => (editing = true), 50);
	}

	function del() {
		$players = $players.filter(player => player.id !== id);
	}

	function cancel() {
		editing = false;
		editName = name;
		editAge = age;
		editWeight = weight;
	}

	function done() {
		editing = false;
		$players = $players.map(player => {
			if (player.id === id) return { name: editName, age: editAge, weight: editWeight, id };
			else return player;
		});
	}
</script>

<div class="over">
	{name} - {age} ({weight})
	<div class="popover">
		<div class="half edit" on:click={edit}>E</div>
		<div class="half delete" on:click={del}>D</div>
	</div>
</div>

{#if editing}
	<UI.Modal onCancel={cancel}>
		<div class="container">
			<h3>Add Player</h3>

			<PlayerInfo bind:name={editName} bind:weight={editWeight} bind:age={editAge} />

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

<style>
	.over {
		background: rgba(225, 225, 225, 0.1);
		margin: 8px;
		display: inline-block;
		padding: 8px;
		border-radius: 4px;
	}

	.popover {
		display: none;
		position: absolute;
		top: -10px;
		right: -25px;
		height: 25px;
		width: 50px;
		border-radius: 4px;
		overflow: hidden;
		z-index: 30;
	}

	.over:hover .popover {
		display: block;
	}

	.half {
		float: left;
		width: 50%;
		user-select: none;
		cursor: pointer;
		text-align: center;
		width: 25px;
		height: 25px;
	}

	.edit {
		background: rgba(0, 0, 0, 0.8);
	}
	.delete {
		background: rgba(128, 0, 0, 0.521);
	}
</style>
