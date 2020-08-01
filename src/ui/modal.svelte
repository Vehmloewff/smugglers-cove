<script>
	export let width = 500;
	export let preventCancel = false;
	export let onCancel = () => {};

	let innerClickFired = false;

	function keyup(e) {
		if (e.keyCode === 27) onCancel();
	}

	function click() {
		if (innerClickFired) innerClickFired = false;
		else onCancel();
	}

	function innerClick() {
		innerClickFired = true;
	}

	function closeModal() {
		if (!preventCancel) onCancel();
	}
</script>

<svelte:window on:keyup={keyup} on:click={click} />

<div class="background" />
<div class="container">
	<div class="modal" on:click={innerClick} style="max-width: {width}px">
		<slot />
	</div>
</div>

<style>
	.background {
		position: fixed;
		top: 0;
		right: 0;
		left: 0;
		bottom: 0;
		z-index: 100;
		background: rgba(0, 0, 0, 0.4);
	}
	.container {
		position: fixed;
		top: 0;
		bottom: 0;
		right: 0;
		left: 0;
		display: flex;
		justify-content: center;
		align-items: center;
		z-index: 101;
	}
	.modal {
		max-height: calc(100vh - 40px);
		background: #22251b;
		border-radius: 4px;
	}
</style>
