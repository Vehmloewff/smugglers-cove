<script>
	import Router from './router.svelte';
	import Nav from './nav.svelte';
	import { route } from './store';
</script>

<div class="backdrop">
	<div class="filter cover" />
	<div class="content cover">
		<div style="min-height: 100%">
			{#if $route === 'home'}
				<div class="pad80" />
			{:else}
				<Nav />
			{/if}

			<Router />

			<div class="pad50" />

			<div class="credit">
				Backdrop photo by
				<a href="https://unsplash.com/@karlleephoto?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Karl Lee</a>
				on
				<a href="https://unsplash.com/?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText" target="_blank">
					Unsplash
				</a>
			</div>
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
		background: rgba(0, 0, 0, 0.5);
	}
	.content {
		z-index: 2;
		overflow-y: auto;
	}
	.cover {
		position: absolute;
		top: 0;
		right: 0;
		left: 0;
		bottom: 0;
	}

	.credit {
		opacity: 0.6;
		position: absolute;
		right: 10px;
		bottom: 10px;
		z-index: 200;
	}
</style>
