import { AdministrativeCommand, GameCommandContext } from "..";
import { LanguageProvider } from "../../../langs/language-provider";
import { colors } from "../../../room/configuration";
import { PlayerDB } from "../../../storage/player-db";

export const muteCommand = new AdministrativeCommand('mute', ({ sender, room, args }: GameCommandContext) => {
    const targetId = parseInt(args.shift());
    const targetPlayer = room.getPlayer(targetId);

    if(!targetPlayer) 
        return room.sendAnnouncement(LanguageProvider.get('Player not found.'), sender.id, colors.error);

    PlayerDB.findByName(targetPlayer.name).then(async record => {
        record.mute(3);
        await PlayerDB.update(record);
        room.sendAnnouncement(LanguageProvider.get('{0} silenced 3m by administrator {1}.', targetPlayer.name, sender.name), undefined, colors.admin);
    })
});