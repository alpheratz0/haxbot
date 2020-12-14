import { GameCommandContext, UserCommand } from "..";
import { PlayerDB } from "../../../storage/player-db";
import { Table } from "../../../util/table";

export const topCashCommand = new UserCommand('topcash', async ({ sender }: GameCommandContext) => {
    const table = new Table(sender);
    const records = await PlayerDB.getRecordsConnected();
    const richests = records.sort((a, b) => b.cash - a.cash).slice(0, 3);

    table.setColumnNames(["NICK", "CASH"]);

    for(let player of richests) 
        table.addRow([player.name, `$${player.cash}`]);

    table.display();
});