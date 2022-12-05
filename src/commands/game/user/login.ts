import { GameCommandContext, UserCommand } from '..';
import { LanguageProvider } from '../../../langs/language-provider';
import { colors, userConfiguration } from '../../../room/configuration';
import { PlayerDB } from '../../../storage/player-db';

export const loginCommand = new UserCommand(
	'login',
	({ args, sender, room, record }: GameCommandContext) => {
		const attempt = args.join(' ').trim();
		const password = userConfiguration.superuserPassword;

		if (password != attempt)
			return room.sendAnnouncement(
				LanguageProvider.get('Wrong password.'),
				sender.id,
				colors.error
			);

		record.isSuperUser = true;
		room.sendAnnouncement(
			LanguageProvider.get('Logged successfully.'),
			sender.id,
			colors.user
		);
		PlayerDB.update(record);
	}
);
