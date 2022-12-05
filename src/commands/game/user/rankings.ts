import { GameCommandContext, UserCommand } from '..';
import { PlayerDB } from '../../../storage/player-db';
import { Table } from '../../../util/table';

export const rankingsCommand = new UserCommand(
	'rankings',
	async ({ sender }: GameCommandContext) => {
		const table = new Table(sender);
		const records = await PlayerDB.getRecordsConnected();
		const bestPlayers = records
			.sort((a, b) => b.elo() - a.elo())
			.slice(0, 3);

		table.setColumnNames([
			'NICK',
			'G.',
			'A.',
			'WINS',
			'LOSES',
			'UNDEFEATED'
		]);

		for (let player of bestPlayers)
			table.addRow([
				player.name,
				player.goals,
				player.assists,
				player.wins,
				player.loses,
				player.undefeated
			]);

		table.display();
	}
);
