import { GameCommandContext, UserCommand } from '..';
import { LanguageProvider } from '../../../langs/language-provider';
import { colors } from '../../../room/configuration';

export const replyCommand = new UserCommand(
	'r',
	async ({ sender, args, record, room }: GameCommandContext) => {
		if (record.lastWhisperId == -1) {
			return room.sendAnnouncement(
				LanguageProvider.get('Nobody sent you a whisper recently.'),
				sender.id,
				colors.error
			);
		}

		args.unshift(record.lastWhisperId.toString());
		room.onPlayerChat(sender, ['!w', ...args].join(' '));
	}
);
