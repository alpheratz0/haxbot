import { AdministrativeCommand, GameCommandContext } from "..";
import { LanguageProvider } from "../../../langs/language-provider";
import { colors } from "../../../room/configuration";
import { PlayerDB } from "../../../storage/player-db";

export const unmuteAllCommand = new AdministrativeCommand('unmuteall', async ({ sender, room }: GameCommandContext) => {
    const mutedRecords = (await PlayerDB.getRecordsConnected()).filter(record => record.isMuted());
    mutedRecords.forEach(record => record.unmute());
    await PlayerDB.updateAll(mutedRecords);
    room.sendAnnouncement(LanguageProvider.get('{0} cleared the mute pentalty on everyone.', sender.name), undefined, colors.user);
})