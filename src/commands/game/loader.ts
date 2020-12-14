import { GameCommandFactory } from ".";
import { celebrationCommand } from "./user/celebration";
import { donateCommand } from "./user/donate";
import { helpCommand } from "./user/help";
import { kickMeCommand } from "./user/kick-me";
import { loginCommand } from "./user/login";
import { topAssistsCommand } from "./user/top-assists";
import { topCashCommand } from "./user/top-cash";
import { topScorersCommand } from "./user/top-scorers";
import { welcomeCommand } from "./user/welcome";
import { whisperCommand } from "./user/whisper";

export class GameCommandManager {

    /** Loads all commands. */
    static load(): void {
        GameCommandFactory.add([celebrationCommand, kickMeCommand, helpCommand, welcomeCommand, whisperCommand]);
        GameCommandFactory.add([donateCommand, loginCommand, topScorersCommand, topAssistsCommand, topCashCommand]);
    }
}