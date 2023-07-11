import { GameCommandContext, SuperUserCommand } from '..';
import { Chat } from '../../../util/chat';

export const sayRainbowCommand = new SuperUserCommand(
	'sayrainbow',
	({ args }: GameCommandContext) => {
		Chat.rainbowFull(args.join(' '));
	}
);
