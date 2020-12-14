import { GameCommandContext, UserCommand } from "..";
import { PlayerDB } from "../../../storage/player-db";
import { Table } from "../../../util/table";

export const topGoalkeepersCommand = new UserCommand('topgks', async ({ sender }: GameCommandContext) => {
    const table = new Table(sender);
    const records = await PlayerDB.getRecordsConnected();
    const topGks = records.sort((a, b) => b.undefeated - a.undefeated).slice(0, 3);

    table.setColumnNames(["NICK", "UNDEFEATED", "WINS", "LOSES"]);

    for(let player of topGks) 
        table.addRow([player.name, player.undefeated, player.wins, player.loses]);

    table.display();
});