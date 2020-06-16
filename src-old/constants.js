import { writable } from 'svelte/store';

function parse(data) {
	try {
		return JSON.parse(data);
	} catch (_) {
		return [];
	}
}

export const players = writable(parse(localStorage.getItem('players') || '[]'));

players.subscribe(players => {
	localStorage.setItem('players', JSON.stringify(players));
});
