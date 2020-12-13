import { Player } from "../api/player";

export class PlayerTouch {
    player: Player;
    time: number;

    constructor(player: Player, time: number) {
        this.player = player;
        this.time = time;
    }
}