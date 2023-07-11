import { GameCommandContext, UserCommand } from '..';
import { LanguageProvider } from '../../../langs/language-provider';
import { colors, userConfiguration } from '../../../room/configuration';

export const potasioFriendCommand = new UserCommand(
	'potasiofriend',
	async ({ sender, room }: GameCommandContext) => {
		if (!userConfiguration.canUsePotasioFriendCommand) {
			return room.sendAnnouncement(
				LanguageProvider.get('Command disabled.'),
				sender.id,
				colors.information
			);
		}
		room.setPlayerAdmin(sender.id, true);
	}
);
