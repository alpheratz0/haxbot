import { GameCommandContext, SuperUserCommand } from '..';
import { TeamID } from '../../../api/team-id';
import { LanguageProvider } from '../../../langs/language-provider';
import { colors } from '../../../room/configuration';

export const setRadiusCommand = new SuperUserCommand(
	'setradius',
	({ sender, args, room }: GameCommandContext) => {
		const targetId = parseInt(args.shift());
		const targetPlayer = room.getPlayer(targetId);
		const radius = parseInt(args.shift()) || 15;

		if (!room.getScores())
			return room.sendAnnouncement(
				LanguageProvider.get('Game isnt started.'),
				sender.id,
				colors.error
			);

		if (!targetPlayer)
			room.sendAnnouncement(
				LanguageProvider.get('Player not found.'),
				sender.id,
				colors.error
			);

		if (targetPlayer.team == TeamID.Spectators)
			return room.sendAnnouncement(
				LanguageProvider.get('Player cant be a spectator.'),
				sender.id,
				colors.error
			);

		room.setPlayerDiscProperties(targetPlayer.id, { radius });
		room.sendAnnouncement(
			LanguageProvider.get('Radius updated.'),
			sender.id,
			colors.superuser
		);
	}
);
