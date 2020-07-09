<script>
	import UI from '../ui';
</script>

<div class="centered center">
	<div class="pad80" />
	<h1 class="center">Smugglers Cove</h1>
	<p>An action game for the great outdoors</p>

	<div class="pad80" />

	<UI.Button route="rules">Rules</UI.Button>
	<span class="dot">•</span>
	<UI.Button route="team-generator">Team Generator</UI.Button>
</div>

<style>
	.dot {
		padding: 10px;
		position: relative;
		top: -1px;
	}
</style>
