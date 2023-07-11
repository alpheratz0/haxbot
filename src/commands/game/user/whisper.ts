import { GameCommandContext, UserCommand } from '..';
import { LanguageProvider } from '../../../langs/language-provider';
import { colors } from '../../../room/configuration';
import { PlayerDB } from '../../../storage/player-db';

export const whisperCommand = new UserCommand(
	'w',
	async ({ room, record, sender, args }: GameCommandContext) => {
		const targetId = parseInt(args.shift());
		const targetPlayer = room.getPlayer(targetId);
		const message = args.join(' ').trim();

		if (!record.mds)
			return room.sendAnnouncement(
				LanguageProvider.get('You have the whispers disabled.'),
				sender.id,
				colors.error
			);

		if (!targetPlayer)
			return room.sendAnnouncement(
				LanguageProvider.get('Player not found.'),
				sender.id,
				colors.error
			);

		if (message.length == 0)
			return room.sendAnnouncement(
				LanguageProvider.get('Message is too short.'),
				sender.id,
				colors.error
			);

		if (targetId == sender.id)
			return room.sendAnnouncement(
				LanguageProvider.get('Cant whisper to yourself.'),
				sender.id,
				colors.error
			);

		const targetRecord = await PlayerDB.findByName(targetPlayer.name);

		if (!targetRecord.mds)
			return room.sendAnnouncement(
				LanguageProvider.get('Target player cannot receive whispers.'),
				sender.id,
				colors.error
			);

		room.sendAnnouncement(
			`>> ${targetPlayer.name} [${targetPlayer.id}]: ${message}`,
			sender.id,
			colors.outgoingMessage
		);
		room.sendAnnouncement(
			`** ${sender.name} [${sender.id}]: ${message}`,
			targetId,
			colors.incomingMessage,
			'normal',
			2
		);

		targetRecord.lastWhisperId = sender.id;
		await PlayerDB.update(targetRecord);
	}
);
