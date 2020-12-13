import { room } from './room'
import { Player } from './api/player'
import { Scores } from './api/scores'
import { GameCommandFactory, GameCommandManager, HaxballCommandContext } from './commands/game'
import { Logger, LoggerStyles } from './logger'
import { Futsalx3 } from './stadiums/futsal-x3'
import { PlayerDB } from './storage/player-db'
import { Connection } from './firewall/connection'
import { LanguageProvider } from './langs/language-provider'
import { AuthSystem } from './firewall/auth-system'
import { PlayerRecord } from './storage/player-record'
import { AdminManager } from './util/admin-manager'
import { TeamID } from './api/team-id'
import { colors } from './room/configuration'
import { SpamFilter } from './firewall/spam'
import { Chat } from './util/chat'
import { CommandInput } from './commands'

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

    if(!PlayerRecord.isValidName(player.name)) {
        room.kickPlayer(player.id, LanguageProvider.get('Invalid name.'), false);
        return;
    }

    AuthSystem.authenticate(player.auth, player.name).then(record => {
        if(record) {
            if(record.welcomeMessage) room.sendAnnouncement(record.welcomeMessage, undefined, 0xd1ac26, 'bold');
            else room.sendAnnouncement(LanguageProvider.get('Welcome to the futsal bot, use !help to see commands.'), player.id, 0xd1ac26, 'bold');

            if(AdminManager.getAdminCount() == 0)
                AdminManager.giveRandomAdmin();
        }
        else room.kickPlayer(player.id, LanguageProvider.get('Name taken.'), false);
    });
}

room.onPlayerLeave = (player: Player) => {
    Logger.logEvent('playerleave', player.name, new LoggerStyles('red'));
    Connection.remove(player);

    if(player.team != TeamID.Spectators) {
        room.pauseGame(true);
    }

    if(AdminManager.getAdminCount() == 0)
        AdminManager.giveRandomAdmin();
}

room.onStadiumChange = async (newStadiumName: string, byPlayer: Player) => {
    Logger.logEvent('stadiumchange', newStadiumName, new LoggerStyles('blue'));
    
    if(byPlayer && !(await PlayerDB.findByName(byPlayer.name)).isSuperUser) {
        room.sendAnnouncement(LanguageProvider.get('Use !futsal3 !futsal1 or !futsalpen to change the map.'), byPlayer.id, colors.error);
        room.setCustomStadium(Futsalx3);
    }
}

room.onPlayerAdminChange = (changedPlayer: Player, byPlayer: Player) => {
    Logger.logEvent('adminchange: ' + (changedPlayer.admin ? 'on' : 'off'), changedPlayer.name, new LoggerStyles('orange'));

    if(AdminManager.getAdminCount() == 0)
        AdminManager.giveRandomAdmin();
}

room.onPlayerKicked = async (kickedPlayer: Player, reason: string, ban: boolean, byPlayer: Player) => {
    Logger.logEvent('playerkicked: ' + (ban ? 'ban' : 'kick'), kickedPlayer.name, new LoggerStyles('red'));

    if(ban) {
        if((await PlayerDB.findByName(kickedPlayer.name))?.isSuperUser) {
            if(byPlayer && byPlayer.id != kickedPlayer.id)
                room.kickPlayer(byPlayer.id, LanguageProvider.get('You cant ban that player.'), false);
            room.clearBan(kickedPlayer.id);
        }
    }
}

room.onPlayerChat = (player: Player, message: string) => { 
    Logger.logEvent('playerchat', player.name + ': ' + message, new LoggerStyles('skyblue'));

    if(SpamFilter.match(message)) {
        room.kickPlayer(player.id, LanguageProvider.get('Spamming the room is forbidden.'), !player.admin);
        return false;
    }

    PlayerDB.findByName(player.name).then(record => {
        if(record.isMuted()) {
            room.sendAnnouncement(LanguageProvider.get('You are silenced.'), player.id, colors.error);
            return;
        }

        if(message.charAt(0) == '#' && (player.admin || record.isSuperUser)) {
            Chat.sendAdmins(`[admin chat] ${player.name}: ${message.substring(1)}`);
            return;
        }

        if(message.charAt(0) == '!') {
            const command = CommandInput.parse(message);
            if(!GameCommandFactory.process(command.command, new HaxballCommandContext(player, command.args, record, room)))
                room.sendAnnouncement(LanguageProvider.get('Command not found.'), player.id, colors.error);
            return false;
    
        }
    });

    return false;
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