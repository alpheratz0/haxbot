import { room } from '../room';

export class AdminManager {
	/** Returns the number of admins connected. */
	static getAdminCount(): number {
		return room
			.getPlayerList()
			.reduce<number>(
				(prev, current) => (current.admin ? prev + 1 : prev),
				0
			);
	}

	/** Gives admin rights to a random player. */
	static giveRandomAdmin(): void {
		const players = room.getPlayerList();

		if (players.length != 0) {
			room.setPlayerAdmin(
				players[Math.floor(Math.random() * players.length)].id,
				true
			);
		}
	}
}
