<script>
	export let number = null;
	export let placeholder = null;
</script>

<input bind:value={number} {placeholder} type="number" />
