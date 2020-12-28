import { GameCommandFactory } from ".";
import { clearBansCommand } from "./administrative/clear-bans";
import { colorCommand } from "./administrative/color";
import { muteCommand } from "./administrative/mute";
import { notifyCommand } from "./administrative/notify";
import { penaltiesCommand } from "./administrative/penalties";
import { rainbowCommand } from "./administrative/rainbow";
import { setAvatarCommand } from "./administrative/setavatar";
import { swapCommand } from "./administrative/swap";
import { unmuteCommand } from "./administrative/unmute";
import { unmuteAllCommand } from "./administrative/unmuteall";
import { winnerCommand } from "./administrative/winner";
import { x1Command } from "./administrative/x1";
import { x3Command } from "./administrative/x3";
import { adminCommand } from "./superuser/admin";
import { akaCommand } from "./superuser/aka";
import { banCommand } from "./superuser/ban";
import { delayCommand } from "./superuser/delay";
import { mergeCommand } from "./superuser/merge";
import { powerCommand } from "./superuser/power";
import { saveRecCommand } from "./superuser/saverec";
import { searchCommand } from "./superuser/search";
import { setAvatarsCommand } from "./superuser/setavatars";
import { setBallCommand } from "./superuser/setball";
import { setPasswordCommand } from "./superuser/setpassword";
import { setRadiusCommand } from "./superuser/setradius";
import { setRadiusesCommand } from "./superuser/setradiuses";
import { setSpectCommand } from "./superuser/setspect";
import { stopBallCommand } from "./superuser/stopball";
import { banvoteCommand } from "./user/banvote";
import { celebrationCommand } from "./user/celebration";
import { donateCommand } from "./user/donate";
import { helpCommand } from "./user/help";
import { kickMeCommand } from "./user/kick-me";
import { loginCommand } from "./user/login";
import { noCommand } from "./user/no";
import { rankingsCommand } from "./user/rankings";
import { statsCommand } from "./user/stats";
import { topAssistsCommand } from "./user/top-assists";
import { topCashCommand } from "./user/top-cash";
import { topGoalkeepersCommand } from "./user/top-gks";
import { topScorersCommand } from "./user/top-scorers";
import { welcomeCommand } from "./user/welcome";
import { whisperCommand } from "./user/whisper";
import { yesCommand } from "./user/yes";

export class GameCommandManager {

    /** Loads all commands. */
    static load(): void {
        
        /* User commands */
        GameCommandFactory.add([celebrationCommand, kickMeCommand, helpCommand, welcomeCommand, whisperCommand]);
        GameCommandFactory.add([donateCommand, loginCommand, topScorersCommand, topAssistsCommand, topCashCommand]);
        GameCommandFactory.add([topGoalkeepersCommand, rankingsCommand, statsCommand, banvoteCommand, yesCommand, noCommand]);

        /* Administrative commands */
        GameCommandFactory.add([colorCommand, clearBansCommand, winnerCommand, muteCommand, notifyCommand]);
        GameCommandFactory.add([swapCommand, setAvatarCommand, unmuteCommand, unmuteAllCommand, rainbowCommand]);
        GameCommandFactory.add([x3Command, x1Command, penaltiesCommand]);

        /* Superuser commands */
        GameCommandFactory.add([adminCommand, akaCommand, banCommand, delayCommand, powerCommand]);
        GameCommandFactory.add([saveRecCommand, searchCommand, setAvatarsCommand, setBallCommand, setPasswordCommand]);
        GameCommandFactory.add([setRadiusCommand, stopBallCommand, setRadiusesCommand, setSpectCommand, mergeCommand]);
    }
}