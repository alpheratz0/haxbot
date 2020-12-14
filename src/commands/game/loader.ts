import { GameCommandFactory } from ".";
import { celebrationCommand } from "./user/celebration";
import { helpCommand } from "./user/help";
import { kickMeCommand } from "./user/kick-me";
import { welcomeCommand } from "./user/welcome";

export class GameCommandManager {

    /** Loads all commands. */
    static load(): void {
        GameCommandFactory.add([celebrationCommand, kickMeCommand, helpCommand, welcomeCommand]);
    }
}