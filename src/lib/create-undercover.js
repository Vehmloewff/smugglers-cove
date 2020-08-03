import { repeat, getRandInteger } from './utils';

export default (team1, team2, team3) => {
	const numberOfAgents = Math.floor(Math.min(team1.length, team2.length, team3.length) / 3);

	const [regular1, undercover1] = getRandomAgents(numberOfAgents, team1);
	const [regular2, undercover2] = getRandomAgents(numberOfAgents, team2);
	const [regular3, undercover3] = getRandomAgents(numberOfAgents, team3);

	const team1True = ageOrder([...regular1, ...undercover3]);
	const team2True = ageOrder([...regular2, ...undercover1]);
	const team3True = ageOrder([...regular3, ...undercover2]);

	const buddies = [...buddyOut(team1True), ...buddyOut(team2True), ...buddyOut(team3True)];

	return [...team1, ...team2, ...team3].map(player => {
		const undercover = [...undercover1, undercover2, undercover3];

		if (undercover.find(agent => agent.id === player.id)) player.isUndercover = true;

		player.buddies = buddies
			.find(arr => arr.find(maybeBuddy => maybeBuddy.id === player.id))
			.filter(buddy => buddy.id !== player.id)
			.map(player => ({ name: player.name, id: player.id, age: player.age }));

		return player;
	});
};

function getRandomAgents(amount, players) {
	const result = [];

	repeat(amount, () => {
		const index = getRandInteger(0, players.length - 1);
		result.push(players[index]);
		players = players.splice(index, 1);
	});

	return [players, result];
}

function ageOrder(players) {
	return players.sort((a, b) => a.age - b.age);
}

function buddyOut(players) {
	const buddies = [];

	if (players.length === 1 || players.length === 2 || players.length === 3) return [players];

	while (players.length) {
		const buddieTeam = [];

		if (players.length === 3) {
			buddieTeam.push(players.shift());
			buddieTeam.push(players.shift());
			buddieTeam.push(players.shift());
		} else {
			buddieTeam.push(players.shift());
			buddieTeam.push(players.shift());
		}

		buddies.push(buddieTeam);
	}

	return buddies;
}
