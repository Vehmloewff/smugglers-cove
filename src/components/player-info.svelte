<script>
	import UI from '../ui';
	import { createEventDispatcher } from 'svelte';

	export let name;
	export let age;
	export let weight;
</script>

<div>
	<label>
		<span class="label">Name</span>
		<div>
			<UI.Input bind:value={name} />
		</div>
	</label>
</div>

<div>
	<label>
		<span class="label">Age</span>
		<div>
			<UI.NumberInput bind:number={age} />
		</div>
	</label>
</div>

<div>
	<label>
		<span class="label">Weight</span>
		<div>
			<UI.NumberInput bind:number={weight} />
		</div>
	</label>
</div>

<style>
	.label {
		font-size: 14px;
	}
</style>
