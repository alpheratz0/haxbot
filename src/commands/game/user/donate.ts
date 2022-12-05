import { GameCommandContext, UserCommand } from '..';
import { LanguageProvider } from '../../../langs/language-provider';
import { colors } from '../../../room/configuration';
import { PlayerDB } from '../../../storage/player-db';

export const donateCommand = new UserCommand(
	'donate',
	({ args, sender, room, record }: GameCommandContext) => {
		const targetId = parseInt(args.shift());
		const targetPlayer = room.getPlayer(targetId);
		const ammount = Math.max(1, parseInt(args.shift()) || 0);

		if (!targetPlayer)
			return room.sendAnnouncement(
				LanguageProvider.get('Player not found.'),
				sender.id,
				colors.error
			);

		if (targetId == sender.id)
			return room.sendAnnouncement(
				LanguageProvider.get('Cant donate to yourself.'),
				sender.id,
				colors.error
			);

		if (ammount > record.cash || ammount <= 0)
			return room.sendAnnouncement(
				LanguageProvider.get('Invalid ammount to donate.'),
				sender.id,
				colors.error
			);

		PlayerDB.findByName(targetPlayer.name).then((targetRecord) => {
			targetRecord.cash += ammount;
			record.cash -= ammount;

			PlayerDB.update(targetRecord);
			PlayerDB.update(record);
		});

		room.sendAnnouncement(
			LanguageProvider.get(
				'Sent ${0} to {1}.',
				String(ammount),
				targetPlayer.name
			),
			sender.id,
			colors.user
		);
		room.sendAnnouncement(
			LanguageProvider.get(
				'Received ${0} from {1}.',
				String(ammount),
				sender.name
			),
			targetPlayer.id,
			colors.user
		);
	}
);
