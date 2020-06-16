<script>
	export let name;
	export let updatePlayer;
	export let removePlayer;

	let editing = false;
	let input;

	let timesClicked = 0;
	let innerClick = false;
	let timeout;
	function spanClick() {
		innerClick = true;

		if (timesClicked === 0) {
			clearTimeout(timeout);
			timeout = setTimeout(() => (timesClicked = 0), 1000);
		}

		timesClicked++;

		if (timesClicked >= 2) {
			timesClicked = 0;
			startEdit();
		}
	}

	function windowClick() {
		if (!innerClick) editing = false;
		else innerClick = false;
	}

	function startEdit() {
		editing = true;
	}

	function inputChange() {}

	function keyup(e) {
		if (e.keyCode === 13) {
			editing = false;
			updatePlayer(name);
		}
	}
</script>

<svelte:window on:click={windowClick} />

<div class="player">
	{#if editing}
		<input bind:value={name} placeholder="name" on:click={() => (innerClick = true)} on:input={inputChange} on:keyup={keyup} />
	{:else}
		<div>
			<span on:click={spanClick}>{name}</span>
			<span class="remove" on:click={removePlayer}>x</span>
		</div>
	{/if}
</div>

<style>
	.player input {
		margin: 0;
	}
	.player div {
		padding: 2px 10px;
		user-select: none;
	}
	.remove {
		color: red;
		cursor: pointer;
		padding-left: 10px;
		opacity: 0;
		transition: 0.3s;
	}
	.remove:hover {
		opacity: 1;
	}
</style>
