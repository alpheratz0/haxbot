import { room } from './room'
import { Player } from './api/player'
import { Scores } from './api/scores'
import { GameCommandManager } from './commands/game'
import { Logger, LoggerStyles } from './logger'
import { Futsalx3 } from './stadiums/futsal-x3'
import { PlayerDB } from './storage/player-db'
import { Connection } from './firewall/connection'
import { LanguageProvider } from './langs/language-provider'

// Room events

room.onRoomLink = (url: string) => {  
    Logger.logEvent('roomlink', url, new LoggerStyles('orange'));
    GameCommandManager.load();
    PlayerDB.connect("playerdb");

    // Game default settings
    room.setScoreLimit(3);
    room.setTimeLimit(3);
    room.setTeamsLock(true); 
    room.setCustomStadium(Futsalx3);

    room.setTeamColors(1, 0, 0xffffff, [0xff4912]);
    room.setTeamColors(2, 0, 0xffffff, [0x000000]);
    room.setRequireRecaptcha(false);
}

room.onPlayerJoin = (player: Player) => {   
    Logger.logEvent('playerjoin', player.name, new LoggerStyles('skyblue'));
    Connection.add(player);

    if(Connection.count(player) > 1) {
        room.kickPlayer(player.id, LanguageProvider.get('Multiple connections from the same computer isnt allowed.'), false);
        return;
    }

}

room.onPlayerLeave = (player: Player) => {
    Logger.logEvent('playerleave', player.name, new LoggerStyles('red'));
    Connection.remove(player);
}

room.onStadiumChange = (newStadiumName: string, byPlayer: Player) => {
    Logger.logEvent('stadiumchange', newStadiumName, new LoggerStyles('blue'));

}

room.onPlayerAdminChange = (changedPlayer: Player, byPlayer: Player) => {
    Logger.logEvent('adminchange: ' + (changedPlayer.admin ? 'on' : 'off'), changedPlayer.name, new LoggerStyles('orange'));

}

room.onPlayerKicked = (kickedPlayer: Player, reason: string, ban: boolean, byPlayer: Player) => {
    Logger.logEvent('playerkicked: ' + (ban ? 'ban' : 'kick'), kickedPlayer.name, new LoggerStyles('red'));

}

room.onPlayerChat = (player: Player, message: string) => { 
    Logger.logEvent('playerchat', player.name + ': ' + message, new LoggerStyles('skyblue'));

    return true;
}

// Playing events

room.onGameStart = (byPlayer: Player) => {

}

room.onGameTick = () => {

}

room.onPlayerBallKick = (player: Player) => {

}

room.onTeamGoal = (team: number) => {

}

room.onTeamVictory = (scores: Scores) => {

}

room.onGameStop = (byPlayer: Player) => {

}