<script context="module">
	import { writable } from 'svelte/store';
	import * as stores from './store';

	const route = writable('');

	stores.go = path => {
		window.location.hash = path;
	};
	stores.route = route;

	window.onhashchange = e => {
		route.set(location.hash.slice(1));
	};

	if (location.hash === '') location.hash = 'home';
	else route.set(location.hash.slice(1));
</script>

<script>
	import Home from './routes/home.svelte';
	import Rules from './routes/rules.svelte';
	import UI from './ui';

	const routes = { home: Home, rules: Rules };

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
