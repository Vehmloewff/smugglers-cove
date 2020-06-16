<script>
	import Router from './router.svelte';
	import Nav from './nav.svelte';
	import { route } from './store';
</script>

<div class="backdrop">
	<div class="filter cover" />
	<div class="content cover">
		{route}
		{#if route === 'home'}
			<div class="pad80" />
		{:else}
			<Nav />
		{/if}

		<Router />

		<div class="credit">
			Backdrop photo by
			<a href="https://unsplash.com/@karlleephoto?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Karl Lee</a>
			on
			<a href="https://unsplash.com/?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText" target="_blank">Unsplash</a>
		</div>
	</div>
</div>

<style>
	.backdrop {
		background: url('/backdrop.jpg');
		position: fixed;
		top: 0;
		right: 0;
		left: 0;
		bottom: 0;
		background-position: center;
		background-size: cover;
		background-repeat: no-repeat;
		color: rgb(233, 241, 248);
	}
	.filter {
		z-index: 1;
		background: rgba(0, 0, 0, 0.336);
	}
	.content {
		z-index: 2;
		overflow-y: scroll;
	}
	.cover {
		position: absolute;
		top: 0;
		right: 0;
		left: 0;
		bottom: 0;
	}

	.content::-webkit-scrollbar-track {
		-webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
		box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
		background-color: rgb(29, 34, 32);
	}

	.content::-webkit-scrollbar {
		width: 10px;
		background-color: #f5f5f5;
	}

	.content::-webkit-scrollbar-thumb {
		background-color: #a46b1d;
		background-image: -webkit-linear-gradient(
			45deg,
			rgba(255, 255, 255, 0.2) 25%,
			transparent 25%,
			transparent 50%,
			rgba(255, 255, 255, 0.2) 50%,
			rgba(255, 255, 255, 0.2) 75%,
			transparent 75%,
			transparent
		);
	}

	.credit {
		opacity: 0.6;
		position: absolute;
		right: 10px;
		bottom: 10px;
	}
</style>
