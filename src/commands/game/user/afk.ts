import { GameCommandContext, UserCommand } from '..';
import { TeamID } from '../../../api/team-id';
import { LanguageProvider } from '../../../langs/language-provider';
import { PlayerDB } from '../../../storage/player-db';
import { colors } from '../../../room/configuration';

export const afkCommand = new UserCommand(
	'afk',
	async ({ sender, record, room }: GameCommandContext) => {
		if (sender.team != TeamID.Spectators) {
			return room.sendAnnouncement(
				LanguageProvider.get(
					'You must be a spectator to enter afk mode.'
				),
				sender.id,
				colors.error
			);
		}

		record.afk = !record.afk;

		room.sendAnnouncement(
			record.afk
				? LanguageProvider.get('{0} is afk now.', sender.name)
				: LanguageProvider.get('{0} is not afk now.', sender.name),
			sender.id,
			colors.information
		);

		await PlayerDB.update(record);
	}
);
