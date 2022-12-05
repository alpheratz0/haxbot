import { AdministrativeCommand, GameCommandContext } from '..';
import { LanguageProvider } from '../../../langs/language-provider';
import { colors } from '../../../room/configuration';
import { Futsalx1 } from '../../../stadiums/futsal-x1';

export const x1Command = new AdministrativeCommand(
	'x1',
	({ sender, room }: GameCommandContext) => {
		if (room.getScores())
			return room.sendAnnouncement(
				LanguageProvider.get('Game cannot be started.'),
				sender.id,
				colors.error
			);

		room.setCustomStadium(Futsalx1);
	}
);
