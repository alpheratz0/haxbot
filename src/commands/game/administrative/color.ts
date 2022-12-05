import { AdministrativeCommand, GameCommandContext } from '..';
import { LanguageProvider } from '../../../langs/language-provider';
import { PlayerDB } from '../../../storage/player-db';
import { Color } from '../../../util/color';

export const colorCommand = new AdministrativeCommand(
	'color',
	({ sender, record, room }: GameCommandContext) => {
		const color = (record.color = Color.random());
		const colorHtml = Color.toHTML(color);

		PlayerDB.update(record).then(() => {
			room.sendAnnouncement(
				LanguageProvider.get('Updated color to: ') + colorHtml,
				sender.id,
				color
			);
		});
	}
);
