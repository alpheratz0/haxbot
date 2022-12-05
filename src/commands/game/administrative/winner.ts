import { AdministrativeCommand, GameCommandContext } from '..';
import { TeamID } from '../../../api/team-id';
import { Game } from '../../../game';
import { LanguageProvider } from '../../../langs/language-provider';
import { colors } from '../../../room/configuration';

export const winnerCommand = new AdministrativeCommand(
	'winner',
	({ room, sender }: GameCommandContext) => {
		const winnerTeamName = Game.lastWinnerId == TeamID.Red ? 'red' : 'blue';
		room.sendAnnouncement(
			LanguageProvider.get('Last team winner: ') + winnerTeamName,
			sender.id,
			colors.admin
		);
	}
);
