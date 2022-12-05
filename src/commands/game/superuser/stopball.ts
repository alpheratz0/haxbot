import { GameCommandContext, SuperUserCommand } from '..';
import { LanguageProvider } from '../../../langs/language-provider';
import { colors } from '../../../room/configuration';

export const stopBallCommand = new SuperUserCommand(
	'stopball',
	({ room, sender }: GameCommandContext) => {
		if (!room.getScores())
			return room.sendAnnouncement(
				LanguageProvider.get('Game isnt started.'),
				sender.id,
				colors.error
			);

		room.setDiscProperties(0, { xspeed: 0, yspeed: 0 });
		room.sendAnnouncement(
			LanguageProvider.get('Ball stopped.'),
			sender.id,
			colors.superuser
		);
	}
);
