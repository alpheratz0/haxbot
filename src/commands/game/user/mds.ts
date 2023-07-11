import { GameCommandContext, UserCommand } from '..';
import { LanguageProvider } from '../../../langs/language-provider';
import { PlayerDB } from '../../../storage/player-db';
import { colors } from '../../../room/configuration';

export const mdsCommand = new UserCommand(
	'mds',
	async ({ sender, record, room }: GameCommandContext) => {
		record.mds = !record.mds;

		if (record.mds) {
			room.sendAnnouncement(
				LanguageProvider.get('Now players can send you whispers.'),
				sender.id,
				colors.information
			);
		} else {
			room.sendAnnouncement(
				LanguageProvider.get('Now players cannot send you whispers.'),
				sender.id,
				colors.information
			);
		}

		await PlayerDB.update(record);
	}
);
