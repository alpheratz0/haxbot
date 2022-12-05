import { AdministrativeCommand, GameCommandContext } from '..';
import { LanguageProvider } from '../../../langs/language-provider';
import { colors } from '../../../room/configuration';
import { FutsalPenalties } from '../../../stadiums/futsal-penalties';

export const penaltiesCommand = new AdministrativeCommand(
	'penalties',
	({ sender, room }: GameCommandContext) => {
		if (room.getScores())
			return room.sendAnnouncement(
				LanguageProvider.get('Game cannot be started.'),
				sender.id,
				colors.error
			);

		room.setCustomStadium(FutsalPenalties);
	}
);
