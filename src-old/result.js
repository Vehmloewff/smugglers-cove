export default function (team1, team2, players) {
	const team1Players = [];

	loop(team1, i => {
		const picked = pickRandomArrItem(players);
		players = players.filter(player => player !== picked);
		team1Players.push(picked);
	});

	return {
		team1: team1Players,
		team2: players,
	};
}

function loop(n, cb) {
	for (let i = 0; i < n; i++) cb(i);
}

function pickRandomArrItem(arr) {
	return arr[getRndInteger(0, arr.length - 1)];
}

// Returns a number between min and max (both included)
function getRndInteger(min, max) {
	return Math.floor(Math.random() * (max - min + 1)) + min;
}
