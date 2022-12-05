import { UserCommand, GameCommandContext } from '..';
import { LanguageProvider } from '../../../langs/language-provider';
import { colors } from '../../../room/configuration';
import { PlayerDB } from '../../../storage/player-db';

export const celebrationCommand = new UserCommand(
	'celebration',
	({ sender, args, room, record }: GameCommandContext) => {
		record.scoreMessage = args.join(' ').trim() || null;
		room.sendAnnouncement(
			LanguageProvider.get('Celebration message updated.'),
			sender.id,
			colors.user
		);
		PlayerDB.update(record);
	}
);
