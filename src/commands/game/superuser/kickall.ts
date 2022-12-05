import { GameCommandContext, SuperUserCommand } from '..';

export const kickAllCommand = new SuperUserCommand(
	'kickall',
	({ room, sender, args }: GameCommandContext) => {
		const reason = args.join(' ').trim();
		const players = room.getPlayerList();

		for (let player of players) {
			if (player.id == sender.id) continue;
			room.kickPlayer(player.id, reason, false);
		}
	}
);
