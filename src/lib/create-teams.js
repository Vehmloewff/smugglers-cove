import { sum, pickRandArrItem } from './utils';

export default players => {
	const result = {
		warnings: [],
		errors: [],
		team1: [],
		team2: [],
		team3: [],
	};

	while (players.length) {
		const nextPlayer = getBestPlayer(players);
		result[nextPortion(result.team1, result.team2, result.team3)].push(nextPlayer);

		players = players.filter(player => player.name !== nextPlayer.name);
	}

	return result;
};

function getBestPlayer(players) {
	let best = players[0];
	players.forEach(player => {
		if (player.weight > best) best = player;
	});

	return best;
}

function nextPortion(team1, team2, team3) {
	let randPicks = [];

	if (!team1.length) randPicks.push('team1');
	if (!team2.length) randPicks.push('team2');
	if (!team3.length) randPicks.push('team3');

	if (randPicks.length) return pickRandArrItem(randPicks);

	const team1Sum = sum(team1, player => player.weight);
	const team2Sum = sum(team2, player => player.weight);
	const team3Sum = sum(team3, player => player.weight);
	const sums = [
		{ name: 'team1', sum: team1Sum },
		{ name: 'team2', sum: team2Sum },
		{ name: 'team3', sum: team3Sum },
	];

	let leastSum = [sums[0]];
	sums.forEach((sum, index) => {
		if (index === 0) return;

		if (sum.sum < leastSum[0].sum) leastSum = [sum];
		else if (sum.sum === leastSum[0].sum) leastSum.push(sum);
	});

	return pickRandArrItem(leastSum).name;
}
