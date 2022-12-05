import { AdministrativeCommand, GameCommandContext } from '..';
import { LanguageProvider } from '../../../langs/language-provider';
import { colors } from '../../../room/configuration';
import { PlayerDB } from '../../../storage/player-db';

export const unmuteCommand = new AdministrativeCommand(
	'unmute',
	({ args, sender, room }: GameCommandContext) => {
		const targetId = parseInt(args.shift());
		const targetPlayer = room.getPlayer(targetId);

		if (!targetPlayer)
			return room.sendAnnouncement(
				LanguageProvider.get('Player not found.'),
				sender.id,
				colors.error
			);

		PlayerDB.findByName(targetPlayer.name).then(async (record) => {
			if (record.isMuted()) {
				record.unmute();
				await PlayerDB.update(record);
				room.sendAnnouncement(
					LanguageProvider.get(
						'{0} removed your silence penalty.',
						sender.name
					),
					targetPlayer.id,
					colors.user
				);
				room.sendAnnouncement(
					LanguageProvider.get(
						'You removed the silence penalty of {0}.',
						targetPlayer.name
					),
					sender.id,
					colors.admin
				);
			} else
				room.sendAnnouncement(
					LanguageProvider.get(
						'{0} isnt silenced.',
						targetPlayer.name
					),
					sender.id,
					colors.admin
				);
		});
	}
);
