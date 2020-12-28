import { GameCommandContext, SuperUserCommand } from "..";
import { TeamID } from "../../../api/team-id";
import { LanguageProvider } from "../../../langs/language-provider";
import { colors } from "../../../room/configuration";

export const setRadiusesCommand = new SuperUserCommand('setradiuses', ({ room, sender, args }: GameCommandContext) => {
    const radius = parseFloat(args.shift()) || 15;
    const players = room.getPlayerList().filter(p => p.team != TeamID.Spectators);

    if(!room.getScores())
        return room.sendAnnouncement(LanguageProvider.get('Game isnt started.'), sender.id, colors.error);

    for(let player of players)
        room.setPlayerDiscProperties(player.id, { radius })

    room.sendAnnouncement(LanguageProvider.get('Radiuses updated.'), sender.id, colors.superuser);
})