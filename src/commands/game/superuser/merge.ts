import { GameCommandContext, SuperUserCommand } from "..";
import { LanguageProvider } from "../../../langs/language-provider";
import { colors } from "../../../room/configuration";
import { PlayerDB } from "../../../storage/player-db";

export const mergeCommand = new SuperUserCommand('merge', async ({ sender, args, room }: GameCommandContext) => {
    const carnetFrom = await PlayerDB.find(args.shift());
    const targetId = parseInt(args.shift());
    const targetPlayer = room.getPlayer(targetId);
    
    if(!targetPlayer) 
        return room.sendAnnouncement(LanguageProvider.get('Player not found.'), sender.id, colors.error);
    
    const carnetDst = await PlayerDB.findByName(targetPlayer.name);

    if(!carnetFrom)
        return room.sendAnnouncement(LanguageProvider.get('Auth not found on db.'), sender.id, colors.error);

    carnetDst.merge(carnetFrom);
    await PlayerDB.updateAll([carnetFrom, carnetDst]);

    room.sendAnnouncement(LanguageProvider.get('Stats of {0} merged into {1}.', carnetFrom.name, carnetDst.name), sender.id, colors.superuser);
});