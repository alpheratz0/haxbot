import { room } from '../room';
import { TeamID } from '../api/team-id';
import { PlayerDB } from '../storage/player-db';

export class GoalData {
	public team = 0;
	public redTeam: string[] = [];
	public blueTeam: string[] = [];
	public redGk: string;
	public blueGk: string;

	constructor(team: number) {
		let redX = 700;
		let blueX = -700;

		this.team = team;
		room.getPlayerList().forEach(async (player) => {
			const auth = (await PlayerDB.findByName(player.name)).auth;

			if (player.team == TeamID.Red) {
				this.redTeam.push(auth);
				if (player.position.x < redX) {
					redX = player.position.x;
					this.redGk = auth;
				}
			} else if (player.team == TeamID.Blue) {
				this.blueTeam.push(auth);
				if (player.position.x > blueX) {
					blueX = player.position.x;
					this.blueGk = auth;
				}
			}
		});
	}
}