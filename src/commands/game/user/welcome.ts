import { GameCommandContext, UserCommand } from '..';
import { LanguageProvider } from '../../../langs/language-provider';
import { colors } from '../../../room/configuration';
import { PlayerDB } from '../../../storage/player-db';

export const welcomeCommand = new UserCommand(
	'welcome',
	({ record, args, sender, room }: GameCommandContext) => {
		record.welcomeMessage = args.join(' ').trim() || null;
		room.sendAnnouncement(
			LanguageProvider.get('Welcome message updated.'),
			sender.id,
			colors.user
		);
		PlayerDB.update(record);
	}
);
