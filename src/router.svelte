<script context="module">
	import { writable } from 'svelte/store';
	import { setGo, setRoute } from './store';

	const route = writable('');

	setGo(path => {
		window.location.hash = path;
	});
	setRoute(route);

	window.onhashchange = e => {
		route.set(location.hash.slice(1));
	};

	if (location.hash === '') location.hash = 'home';
	else route.set(location.hash.slice(1));
</script>

<script>
	import Home from './routes/home.svelte';
	import Rules from './routes/rules.svelte';
	import TeamGenerator from './routes/team-generator.svelte';

	const routes = { home: Home, rules: Rules, 'team-generator': TeamGenerator };

	import UI from './ui';

	$: component = routes[$route];
</script>

{#if component}
	<svelte:component this={component} />
{:else}
	<div class="container center">
		<div class="large">404</div>
		<h3>Opps, we couldn't find that page!</h3>
		<UI.Button route="home">Go Home</UI.Button>
	</div>
{/if}

<style>
	.large {
		opacity: 0.5;
		font-size: 100px;
	}
</style>
