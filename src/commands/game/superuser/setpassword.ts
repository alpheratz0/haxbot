import { GameCommandContext, SuperUserCommand } from '..';
import { LanguageProvider } from '../../../langs/language-provider';
import { colors } from '../../../room/configuration';

export const setPasswordCommand = new SuperUserCommand(
	'setpassword',
	({ sender, args, room }: GameCommandContext) => {
		const password = args.join(' ').trim() || null;

		if (!password)
			room.sendAnnouncement(
				LanguageProvider.get('Password cleared.'),
				sender.id,
				colors.superuser
			);
		else
			room.sendAnnouncement(
				LanguageProvider.get('Password updated to: ') + password + '.',
				sender.id,
				colors.superuser
			);

		room.setPassword(password);
	}
);
