import { GameCommandContext, UserCommand } from "..";
import { TeamID } from "../../../api/team-id";
import { LanguageProvider } from "../../../langs/language-provider";
import { colors } from "../../../room/configuration";
import { Banvote } from "../../../util/banvote";

export const banvoteCommand = new UserCommand('banvote', ({ sender, args, record, room }: GameCommandContext) => {
    const targetId = parseInt(args.shift());
    const targetPlayer = room.getPlayer(targetId);

    if(!targetPlayer)
        return room.sendAnnouncement(LanguageProvider.get('Player not found.'), sender.id, colors.error);

    if(targetPlayer.team != TeamID.Spectators)
        return room.sendAnnouncement(LanguageProvider.get('Player cannot be banvoted because is playing.'), sender.id, colors.error);

    if(Banvote.isRunning())
        return room.sendAnnouncement(LanguageProvider.get('A banvote is already running.'), sender.id, colors.error);

    room.sendAnnouncement(LanguageProvider.get('{0} is banvoting {1}, use !yes or !no to vote.').replace('{0}', sender.name).replace('{1}', targetPlayer.name), undefined, colors.user);
    Banvote.start(targetId);
});