import { GameCommandContext, SuperUserCommand } from '..';
import { PlayerDB } from '../../../storage/player-db';
import { Table } from '../../../util/table';

export const searchCommand = new SuperUserCommand(
	'search',
	async ({ args, sender }: GameCommandContext) => {
		const query = args.join(' ').trim();
		const results = await PlayerDB.where(
			(record) =>
				record.names.some((name) =>
					name.toLowerCase().includes(query.toLowerCase())
				),
			4
		);
		const table = new Table(sender, true);

		table.setColumnNames(['NICK', 'AUTH']);

		for (let record of results) table.addRow([record.name, record.auth]);

		table.display();
	}
);
