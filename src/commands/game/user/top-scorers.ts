import { GameCommandContext, UserCommand } from '..';
import { PlayerDB } from '../../../storage/player-db';
import { Table } from '../../../util/table';

export const topScorersCommand = new UserCommand(
	'topscorers',
	async ({ sender }: GameCommandContext) => {
		const table = new Table(sender);
		const records = await PlayerDB.getRecordsConnected();
		const topScorers = records
			.sort((a, b) => b.goals - a.goals)
			.slice(0, 3);

		table.setColumnNames(['NICK', 'GOALS']);

		for (let player of topScorers)
			table.addRow([player.name, player.goals]);

		table.display();
	}
);
