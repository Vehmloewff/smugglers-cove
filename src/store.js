import { writable } from 'svelte/store';

export let go = () => {};
export let route = null;

export function setGo(func) {
	go = func;
}
export function setRoute(store) {
	route = store;
}

export const players = writable(JSON.parse(localStorage.getItem('players') || `[]`) || []);
players.subscribe(players => localStorage.setItem('players', JSON.stringify(players)));

export const auditLog = writable(JSON.parse(localStorage.getItem('auditLog') || `[]`) || []);
auditLog.subscribe(auditLog => localStorage.setItem('auditLog', JSON.stringify(auditLog)));

export const drawings = writable(JSON.parse(localStorage.getItem('drawings') || `[]`) || []);
drawings.subscribe(drawings => localStorage.setItem('drawings', JSON.stringify(drawings)));

export function addLog(body, drawingId) {
	auditLog.update(log => {
		log.push({
			body,
			drawingId,
			children: [],
		});
		return log;
	});
}

export function addMinorLog(content) {
	auditLog.update(log => {
		log[log.length - 1].children.push(content);
		return log;
	});
}
