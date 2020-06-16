<script>
	import { go, route } from './store';

	const links = [{ route: 'rules', display: 'Rules' }, { route: 'team-generator', display: 'Team Generator' }];
</script>

<div class="nav">
	<div class="title" on:click={() => go('home')}>Smugglers Cove</div>
	<div class="links">
		{#each links as link}
			<div class="link" on:click={() => link.route}>{link.display}</div>
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
	}
</style>
