import { GameCommandFactory } from ".";
import { celebrationCommand } from "./user/celebration";

export class GameCommandManager {

    /** Loads all commands. */
    static load(): void {
        GameCommandFactory.add([celebrationCommand]);
    }
}