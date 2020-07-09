<script>
	import { go, route } from './store';

	const links = [
		{ route: 'rules', display: 'Rules' },
		{ route: 'team-generator', display: 'Team Generator' },
	];
</script>

<div class="nav">
	<div class="title" on:click={() => go('home')}>Smugglers Cove</div>
	<div class="links">
		{#each links as link}
			<div class="link" on:click={() => go(link.route)}>
				{link.display}
				{#if $route === link.route}
					<div class="line" />
				{/if}
			</div>
		{/each}
	</div>
</div>

<style>
	.nav {
		background: rgba(0, 0, 0, 0.5);
	}
	.title {
		font-size: 30px;
		opacity: 0.8;
		padding: 10px;
		user-select: none;
		cursor: pointer;
		display: inline-block;
	}
	.links {
		float: right;
	}
	.link {
		display: inline-block;
		padding: 18px;
		position: relative;
		user-select: none;
		cursor: pointer;
	}
	.line {
		position: absolute;
		bottom: 12px;
		right: 10px;
		left: 10px;
		height: 3px;
		background: #a46b1d;
		z-index: 3;
	}

	@media (max-width: 480px) {
		.links {
			display: none;
		}
	}
</style>
