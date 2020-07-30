<script>
	import { players } from '../store';
	import Player from '../components/player.svelte';
</script>

<div class="players">
	{#each $players as player}
		<Player {...player} />
	{/each}
</div>
<div class="other-results">players</div>
