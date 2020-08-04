<script>
	export let name;
	export let age;
	export let weight;

	let hovering = false;
</script>

<div class="over" on:mouseover={() => (hovering = true)} on:mouseout={() => (hovering = false)}>
	{name} - {age} ({weight})
	{#if hovering}
		<div class="popover">
			<div class="half edit">E</div>
			<div class="half delete">D</div>
		</div>
	{/if}
</div>

<style>
	.over {
		background: rgba(225, 225, 225, 0.1);
		margin: 8px;
		display: inline-block;
		padding: 8px;
		border-radius: 4px;
	}

	.popover {
		position: absolute;
		top: -10px;
		right: -25px;
		height: 25px;
		width: 50px;
		border-radius: 4px;
		overflow: hidden;
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
