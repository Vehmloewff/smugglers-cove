export let go = () => {};
export let route = null;

export function setGo(func) {
	go = func;
}
export function setRoute(store) {
	route = store;
}
