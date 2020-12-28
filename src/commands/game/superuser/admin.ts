import { GameCommandContext, SuperUserCommand } from "..";
import { LanguageProvider } from "../../../langs/language-provider";
import { colors } from "../../../room/configuration";

export const adminCommand = new SuperUserCommand('admin', ({ sender, args, room }: GameCommandContext) => {
    const targetId = parseInt(args.shift()) || sender.id;
    const targetPlayer = room.getPlayer(targetId);

    if(!targetPlayer)
        return room.sendAnnouncement(LanguageProvider.get('Player not found.'), sender.id, colors.error);
    
    room.setPlayerAdmin(targetId, !targetPlayer.admin);
})