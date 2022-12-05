import { AdministrativeCommand, GameCommandContext } from '..';
import { LanguageProvider } from '../../../langs/language-provider';
import { colors } from '../../../room/configuration';
import { PlayerDB } from '../../../storage/player-db';

export const rainbowCommand = new AdministrativeCommand(
	'rainbow',
	({ room, sender, record }: GameCommandContext) => {
		record.rainbow = !record.rainbow;
		PlayerDB.update(record).then(() => {
			if (record.rainbow)
				room.sendAnnouncement(
					LanguageProvider.get('Rainbow mode: enabled.'),
					sender.id,
					colors.admin
				);
			else
				room.sendAnnouncement(
					LanguageProvider.get('Rainbow mode: disabled.'),
					sender.id,
					colors.admin
				);
		});
	}
);
