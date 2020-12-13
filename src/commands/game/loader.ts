import { GameCommandFactory } from ".";
import { celebrationCommand } from "./user/celebration";
import { kickMeCommand } from "./user/kick-me";

export class GameCommandManager {

    /** Loads all commands. */
    static load(): void {
        GameCommandFactory.add([celebrationCommand, kickMeCommand]);
    }
}