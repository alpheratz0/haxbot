import { GameCommandContext, SuperUserCommand } from '..';

export const setTopSpectCommand = new SuperUserCommand(
	'settopspect',
	({ room, args, sender }: GameCommandContext) => {
		room.onPlayerChat(sender, ['!setspect', ...args, '0'].join(' '))
	}
);
