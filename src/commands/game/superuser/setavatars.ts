import { GameCommandContext, SuperUserCommand } from '..';
import { LanguageProvider } from '../../../langs/language-provider';
import { colors } from '../../../room/configuration';

export const setAvatarsCommand = new SuperUserCommand(
	'setavatars',
	({ room, args, sender }: GameCommandContext) => {
		const players = room.getPlayerList();
		const avatar = args.shift().trim() || null;

		for (let player of players) room.setPlayerAvatar(player.id, avatar);

		room.sendAnnouncement(
			LanguageProvider.get('Avatars updated.'),
			sender.id,
			colors.superuser
		);
	}
);
