import { writable } from 'svelte/store';

export let go = () => {};
export let route = null;

export function setGo(func) {
	go = func;
}
export function setRoute(store) {
	route = store;
}

export const players = writable(JSON.parse(localStorage.getItem('players')) || []);
players.subscribe(players => localStorage.setItem('players', JSON.stringify(players)));
