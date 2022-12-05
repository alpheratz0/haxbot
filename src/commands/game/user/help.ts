import {
	AdministrativeCommand,
	GameCommandContext,
	GameCommandFactory,
	UserCommand
} from '..';
import { colors } from '../../../room/configuration';

export const helpCommand = new UserCommand(
	'help',
	({ record, sender, room }: GameCommandContext) => {
		let commandsToShow: string[];

		if (record.isSuperUser)
			commandsToShow = GameCommandFactory.where((cmd) => true).map(
				(cmd) => cmd.name
			);
		else if (sender.admin)
			commandsToShow = GameCommandFactory.where(
				(cmd) =>
					cmd instanceof UserCommand ||
					cmd instanceof AdministrativeCommand
			).map((cmd) => cmd.name);
		else
			commandsToShow = GameCommandFactory.where(
				(cmd) => cmd instanceof UserCommand
			).map((cmd) => cmd.name);

		room.sendAnnouncement(
			commandsToShow.map((cmd) => `!${cmd}`).join(', '),
			sender.id,
			colors.user
		);
	}
);
