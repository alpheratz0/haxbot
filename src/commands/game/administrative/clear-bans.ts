import { AdministrativeCommand, GameCommandContext } from "..";
import { LanguageProvider } from "../../../langs/language-provider";
import { colors } from "../../../room/configuration";

export const clearBansCommand = new AdministrativeCommand('clearbans', ({ sender, room }: GameCommandContext) => {
    room.clearBans();
    room.sendAnnouncement(LanguageProvider.get('Bans cleared.'), sender.id, colors.admin);
})