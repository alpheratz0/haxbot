import { GameCommandContext, SuperUserCommand } from '..';
import { LanguageProvider } from '../../../langs/language-provider';
import { colors } from '../../../room/configuration';
import { Camera } from '../../../util/camera';

export const saveRecCommand = new SuperUserCommand(
	'saverec',
	({ room, sender }: GameCommandContext) => {
		if (!Camera.save())
			return room.sendAnnouncement(
				LanguageProvider.get('No game recorded.'),
				sender.id,
				colors.error
			);
		room.sendAnnouncement(
			LanguageProvider.get('Saving...'),
			sender.id,
			colors.superuser
		);
	}
);
