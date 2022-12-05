import { GameCommandContext, SuperUserCommand } from '..';
import { LanguageProvider } from '../../../langs/language-provider';
import { colors } from '../../../room/configuration';

export const setBallCommand = new SuperUserCommand(
	'setball',
	({ sender, args, room }: GameCommandContext) => {
		if (!room.getScores())
			return room.sendAnnouncement(
				LanguageProvider.get('Game isnt started.'),
				sender.id,
				colors.error
			);

		room.setDiscProperties(0, {
			x: parseInt(args.shift()) || 0,
			y: parseInt(args.shift()) || 0
		});

		room.sendAnnouncement(
			LanguageProvider.get('Ball position updated.'),
			sender.id,
			colors.superuser
		);
	}
);
