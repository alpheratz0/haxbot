import { Player } from './api/player'
import { Scores } from './api/scores'
import { room } from './room'

// Room events

room.onRoomLink = (url: string) => {  

}

room.onPlayerJoin = (player: Player) => {   

}

room.onPlayerLeave = (player: Player) => {

}

room.onStadiumChange = (newStadiumName: string, byPlayer: Player) => {

}

room.onPlayerAdminChange = (changedPlayer: Player, byPlayer: Player) => {

}

room.onPlayerKicked = (kickedPlayer: Player, reason: string, ban: boolean, byPlayer: Player) => {

}

room.onPlayerChat = (player: Player, message: string) => { 
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