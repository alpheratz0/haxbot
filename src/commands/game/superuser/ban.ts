import { GameCommandContext, SuperUserCommand } from '..';
import { LanguageProvider } from '../../../langs/language-provider';
import { colors } from '../../../room/configuration';

export const banCommand = new SuperUserCommand(
	'ban',
	({ args, room, sender }: GameCommandContext) => {
		const targetId = parseInt(args.shift());
		const reason = args.join(' ').trim();

		if (!room.getPlayer(targetId))
			return room.sendAnnouncement(
				LanguageProvider.get('Player not found.'),
				sender.id,
				colors.error
			);

		room.kickPlayer(targetId, reason, true);
	}
);
