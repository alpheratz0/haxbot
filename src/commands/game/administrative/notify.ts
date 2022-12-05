import { AdministrativeCommand, GameCommandContext } from '..';
import { LanguageProvider } from '../../../langs/language-provider';
import { colors } from '../../../room/configuration';
import { Color } from '../../../util/color';

export const notifyCommand = new AdministrativeCommand(
	'notify',
	({ args, room, sender }: GameCommandContext) => {
		const message = args.join(' ').trim();
		const color = Color.random();

		if (message.length == 0)
			return room.sendAnnouncement(
				LanguageProvider.get('Message is too short.'),
				sender.id,
				colors.error
			);

		room.sendAnnouncement(message, undefined, color, 'normal', 2);
	}
);
