import { room } from "../room";
import { colors } from "../room/configuration";
import { PlayerDB } from "../storage/player-db";

export class Chat {
    static sendAdmins(message: string): void {
        room.getPlayerList().forEach(async player => {
            if(player.admin || (await PlayerDB.findByName(player.name)).isSuperUser) {
                room.sendAnnouncement(message, player.id, colors.admin);
            }
        })
    }

    static sendSuperUsers(message: string): void {
        room.getPlayerList().forEach(async player => {
            if((await PlayerDB.findByName(player.name)).isSuperUser) {
                room.sendAnnouncement(message, player.id, colors.superuser);
            }
        })
    }
}