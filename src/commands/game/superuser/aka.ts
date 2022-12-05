import { GameCommandContext, SuperUserCommand } from '..';
import { LanguageProvider } from '../../../langs/language-provider';
import { colors } from '../../../room/configuration';
import { PlayerDB } from '../../../storage/player-db';

export const akaCommand = new SuperUserCommand(
	'aka',
	({ sender, args, room }: GameCommandContext) => {
		const targetId = parseInt(args.shift());
		const targetPlayer = room.getPlayer(targetId);

		if (!targetPlayer)
			return room.sendAnnouncement(
				LanguageProvider.get('Player not found.'),
				sender.id,
				colors.error
			);

		PlayerDB.findByName(targetPlayer.name).then((record) => {
			room.sendAnnouncement(
				`${targetPlayer.name}: ${record.names.join(', ')}`,
				sender.id,
				colors.superuser
			);
		});
	}
);
