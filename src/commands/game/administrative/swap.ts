import { AdministrativeCommand, GameCommandContext } from "..";
import { TeamID } from "../../../api/team-id";
import { LanguageProvider } from "../../../langs/language-provider";
import { colors } from "../../../room/configuration";

export const swapCommand = new AdministrativeCommand('swap', ({ sender, room }: GameCommandContext) => {
    if(room.getScores())
        return room.sendAnnouncement(LanguageProvider.get('Cant swap while playing.'), sender.id, colors.error);

    room.getPlayerList().forEach(player => {
        if(player.team == TeamID.Blue) room.setPlayerTeam(player.id, TeamID.Red);
        else if(player.team == TeamID.Red) room.setPlayerTeam(player.id, TeamID.Blue);
    })

    room.sendAnnouncement(LanguageProvider.get('Teams swapped.'), sender.id, colors.admin);
})