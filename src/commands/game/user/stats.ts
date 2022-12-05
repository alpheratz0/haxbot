import { GameCommandContext, UserCommand } from '..';
import { PlayerDB } from '../../../storage/player-db';
import { Table } from '../../../util/table';

export const statsCommand = new UserCommand(
	'stats',
	async ({ sender, record, room, args }: GameCommandContext) => {
		const table = new Table(sender);

		const targetId = parseInt(args.shift());
		const targetPlayer = room.getPlayer(targetId);
		const targetRecord = targetPlayer
			? await PlayerDB.findByName(targetPlayer.name)
			: record;

		table.setColumnNames([
			'NICK',
			'G.',
			'A.',
			'WINS',
			'LOSES',
			'CASH',
			'UNDEFEATED'
		]);
		table.addRow([
			targetRecord.name,
			targetRecord.goals,
			targetRecord.assists,
			targetRecord.wins,
			targetRecord.loses,
			'$' + targetRecord.cash,
			targetRecord.undefeated
		]);

		table.display();
	}
);
