import { AdministrativeCommand, GameCommandContext } from '..';
import { LanguageProvider } from '../../../langs/language-provider';
import { PlayerDB } from '../../../storage/player-db';
import { Color } from '../../../util/color';

export const colorCommand = new AdministrativeCommand(
	'color',
	({ sender, args, record, room }: GameCommandContext) => {
		let color = NaN;

		if (args.length > 0) {
			color = parseInt(`0x${args.shift()}`);
		}

		if (isNaN(color)) {
			color = Color.random();
		}

		const colorHtml = Color.toHTML(color);
		record.color = color;

		PlayerDB.update(record).then(() => {
			room.sendAnnouncement(
				LanguageProvider.get('Updated color to: ') + colorHtml,
				sender.id,
				color
			);
		});
	}
);
