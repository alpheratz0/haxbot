import { Player } from "../api/player";
import { room } from "../room";
import { TextMeasurer } from "./text-measurer";

export class Table {
    private static measurer = new TextMeasurer("Open Sans", 15, "https://fonts.googleapis.com/css?family=Open Sans");

    private rows: Array<string[]>;
    private targetId: number;

    /** Creates a new instance of the class.
     * @param owner The player who is displaying this table.
     * @param onlyOwnerView True if only the owner can view this table.
     */
    constructor(owner: Player, onlyOwnerView: boolean = false) {
        this.rows = [];
        this.targetId = onlyOwnerView ? owner.id : owner.admin ? undefined : owner.id;
    }

    /** Set the column names of the table.
     * @param columnNames The column names.
     */
    setColumnNames(columnNames: string[]): void {
        this.rows.unshift(columnNames);
    }

    /** Adds a row to the table.
     * @param row The row values.
     */
    addRow(row: (string|number)[]): void {
        this.rows.push(row.map(v => typeof v == "number" ? v.toString() : v));
    }

    /** Displays the table. */
    display(): void {
        const separators: number[] = [];

        for(let index: number = 0; index < this.rows[0].length; index++) {
            separators[index] = 0;
            for(let p = 0; p < this.rows.length; p++)
                if(Table.measurer.measure(this.rows[p][index]) + 30 > separators[index])
                    separators[index] = Table.measurer.measure(this.rows[p][index]) + 30;
        }

        for(let index: number = 0; index < this.rows.length; index++) {
            let row = this.rows[index];
            let result: string = "";

            for(let rowIndex: number = 0; rowIndex < row.length - 1; rowIndex++) {
                if(rowIndex != 0) separators[rowIndex] = separators[rowIndex] + (separators[rowIndex - 1] - Table.measurer.measure(Table.measurer.padRight(row[rowIndex - 1], separators[rowIndex - 1])));
                result += Table.measurer.padRight(row[rowIndex], separators[rowIndex]);
            }

            result += row[row.length - 1];
            room.sendAnnouncement(result, this.targetId, index == 0 ? 0xffff4d : 0xffffff);
        }
    }
}