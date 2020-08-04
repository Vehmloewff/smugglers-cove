export function sum(arr, finder) {
	let total = 0;
	arr.forEach(item => {
		total += finder(item);
	});

	return total;
}

export function pickRandArrItem(arr) {
	if (!arr.length) return null;
	if (arr.length === 1) return arr[0];

	return arr[getRandInteger(0, arr.length - 1)];
}

export function getRandInteger(min, max) {
	return Math.floor(Math.random() * (max - min + 1)) + min;
}

export function repeat(number, cb) {
	for (let x = 0; x < number; x++) {
		cb(x + 1);
	}
}

export function randomizeArray(arr) {
	arr = Array.from(arr);
	let newArr = [];

	repeat(arr.length, () => {
		let index = getRandInteger(0, arr.length - 1);
		newArr.push(arr[index]);
		arr.splice(index, 1);
	});
	return newArr;
}
