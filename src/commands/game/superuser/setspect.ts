import { GameCommandContext, SuperUserCommand } from '..';
import { TeamID } from '../../../api/team-id';
import { LanguageProvider } from '../../../langs/language-provider';
import { colors } from '../../../room/configuration';

export const setSpectCommand = new SuperUserCommand(
	'setspect',
	({ room, args, sender }: GameCommandContext) => {
		const targetId = parseInt(args.shift());
		const targetPlayer = room.getPlayer(targetId);

		if (!targetPlayer)
			return room.sendAnnouncement(
				LanguageProvider.get('Player not found.'),
				sender.id,
				colors.error
			);

		if (targetPlayer.team != TeamID.Spectators)
			return room.sendAnnouncement(
				LanguageProvider.get('Player must be spectator.'),
				sender.id,
				colors.error
			);

		const spectIds = room
			.getPlayerList()
			.filter((p) => p.team == TeamID.Spectators && p.id != targetId)
			.map((p) => p.id);

		const newPosition = Math.max(
			0,
			Math.min(parseInt(args.shift()) || 0, spectIds.length)
		);
		const reorderedSpectators = [
			...spectIds.slice(0, newPosition),
			targetId,
			...spectIds.slice(newPosition)
		];

		room.reorderPlayers(reorderedSpectators, true);
		room.sendAnnouncement(
			LanguageProvider.get(
				'{0} moved to spect position #{1}',
				targetPlayer.name,
				String(newPosition)
			),
			sender.id,
			colors.superuser
		);
	}
);
