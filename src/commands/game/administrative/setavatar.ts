import { AdministrativeCommand, GameCommandContext } from "..";
import { LanguageProvider } from "../../../langs/language-provider";
import { colors } from "../../../room/configuration";

export const setAvatarCommand = new AdministrativeCommand('setavatar', ({ args, sender, room }: GameCommandContext) => {
    const targetId = parseInt(args.shift());
    const targetPlayer = room.getPlayer(targetId);
    const avatar = args.shift() || null;
    
    if(!targetPlayer) 
        return room.sendAnnouncement(LanguageProvider.get('Player not found.'), sender.id, colors.error);

    room.setPlayerAvatar(targetId, avatar);
    
    const message = avatar ? LanguageProvider.get('{0} avatar updated to {1}.').replace('{0}', targetPlayer.name).replace('{1}', avatar) :
                             LanguageProvider.get('{0} avatar cleared.').replace('{0}', targetPlayer.name);

    room.sendAnnouncement(message, sender.id, colors.admin);
})