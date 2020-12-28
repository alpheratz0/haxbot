import { GameCommandContext, SuperUserCommand } from "..";
import { LanguageProvider } from "../../../langs/language-provider";
import { colors } from "../../../room/configuration";

export const delayCommand = new SuperUserCommand('delay', ({ room, args, sender }: GameCommandContext) => {
    const data = args.join(" ").trim();
    window.setTimeout(() => {
        if(room.getPlayer(sender.id))
            room.onPlayerChat(sender, data);
    }, 15000);
    room.sendAnnouncement(LanguageProvider.get('Delaying: ') + data, sender.id, colors.superuser);
});