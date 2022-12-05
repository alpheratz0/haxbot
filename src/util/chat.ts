import { room } from '../room';
import { colors } from '../room/configuration';
import { PlayerDB } from '../storage/player-db';

export class Chat {
	private static readonly rainbowColors: number[] = [
		0xff0000, 0xff7f00, 0xffff00, 0x00ff00, 0x0000ff, 0x7a6cad, 0x8b00ff
	];
	private static rainbowIndex: number = 0;
	private static rainbowSide: boolean = true;

	static sendAdmins(message: string): void {
		room.getPlayerList().forEach(async (player) => {
			if (
				player.admin ||
				(await PlayerDB.findByName(player.name)).isSuperUser
			) {
				room.sendAnnouncement(message, player.id, colors.admin);
			}
		});
	}

	static sendSuperUsers(message: string): void {
		room.getPlayerList().forEach(async (player) => {
			if ((await PlayerDB.findByName(player.name)).isSuperUser) {
				room.sendAnnouncement(message, player.id, colors.superuser);
			}
		});
	}

	static rainbow(message: string): void {
		if (this.rainbowSide) {
			this.rainbowIndex++;
			if (this.rainbowIndex == this.rainbowColors.length - 1)
				this.rainbowSide = false;
		} else {
			this.rainbowIndex--;
			if (this.rainbowIndex == 0) this.rainbowSide = true;
		}

		room.sendAnnouncement(
			message,
			undefined,
			this.rainbowColors[this.rainbowIndex]
		);
	}
}
