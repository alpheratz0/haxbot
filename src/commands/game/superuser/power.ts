import { GameCommandContext, SuperUserCommand } from "..";
import { TeamID } from "../../../api/team-id";
import { LanguageProvider } from "../../../langs/language-provider";
import { colors } from "../../../room/configuration";

export const powerCommand = new SuperUserCommand('power', ({ sender, args, room }: GameCommandContext) => {
    if(sender.team == TeamID.Spectators)
        return room.sendAnnouncement(LanguageProvider.get('You cant be a spectator.'), sender.id, colors.error);

    if(!room.getScores())
        return room.sendAnnouncement(LanguageProvider.get('Game isnt started.'), sender.id, colors.error);

    room.setPlayerDiscProperties(sender.id, { 
        bCoeff: parseInt(args.shift()) || 0
    });

    room.sendAnnouncement(LanguageProvider.get('Ball power updated.'), sender.id, colors.superuser);
})