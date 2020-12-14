import { GameCommandContext, UserCommand } from "..";
import { PlayerDB } from "../../../storage/player-db";
import { Table } from "../../../util/table";

export const topAssistsCommand = new UserCommand("topassists", async ({ sender }: GameCommandContext) => {
    const table = new Table(sender);
    const records = await PlayerDB.getRecordsConnected();
    const topAssistants = records.sort((a, b) => b.assists - a.assists).slice(0, 3);

    table.setColumnNames(["NICK", "ASSISTS"]);

    for(let player of topAssistants) 
        table.addRow([player.name, player.assists]);

    table.display();
});