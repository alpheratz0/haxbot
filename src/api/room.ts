import { CollisionFlags } from "./collision-flags";
import { DiscProperties } from "./disc-properties";
import { Player } from "./player";
import { Position } from "./position";
import { RoomConfig } from "./room-config";
import { Scores } from "./scores";

export interface Room {

    /** Sends a chat message using the host player. If targetId is null or undefined the message is sent to all players. 
     * @param message The message content.
     * @param targetId The target id of the player to send the message. If null or undefined the message is sent to all players.
    */
    sendChat(message: string, targetId?: number): void;

    /** Changes the admin status of the specified player. 
     * @param playerId The player id whose admin status will change.
     * @param admin The new admin status of the player.
    */
    setPlayerAdmin(playerId: number, admin: boolean): void;

    /** Moves the specified player to a team. 
     * @param playerId The player id whose team will change.
     * @param team The new team id of the player.
    */
    setPlayerTeam(playerId: number, team: number): void;

    /** Kicks the specified player from the room. 
     * @param playerId The player id to kick from the room.
     * @param reason The reason of the kick.
     * @param ban True if the player is being banned from the room otherwise false.
    */
    kickPlayer(playerId: number, reason: string, ban: boolean): void;

    /** Clears the ban for a playerId that belonged to a player that was previously banned. 
     * @param playerId The player id that previously has been banned.
    */
    clearBan(playerId: number): void;

    /** Clears the list of banned players. */
    clearBans(): void;

    /** Sets the score limit of the room. 
     * @param limit The score limit.
    */
    setScoreLimit(limit: number): void;

    /** Sets the time limit of the room. The limit must be specified in number of minutes. 
     * @param limitInMinutes The time limit in minutes.
    */
    setTimeLimit(limitInMinutes: number): void;

    /** Parses the stadiumFileContents as a .hbs stadium file and sets it as the selected stadium. 
     * @param stadiumFileContents The content of the .hbs stadium file.
    */
    setCustomStadium(stadiumFileContents: string): void;

    /** Sets the selected stadium to one of the default stadiums. The name must match exactly (case sensitive). 
     * @param stadiumName The default stadium name.
    */
    setDefaultStadium(stadiumName: string): void;

    /** Sets the teams lock. When teams are locked players are not able to change team unless they are moved by an admin. 
     * @param locked True to prevent players from changing its current team.
    */
    setTeamsLock(locked: boolean): void;

    /** Sets the colors of a team. 
     * @param team The team id to change its colors.
     * @param angle The rotation.
     * @param textColor The color of the avatars.
     * @param colors The background colors.
    */
    setTeamColors(team: number, angle: number, textColor: number, colors: number[]): void;

    /** Starts the game, if a game is already in progress this method does nothing. */
    startGame(): void;

    /** Stops the game, if no game is in progress this method does nothing. */
    stopGame(): void;

    /** Sets the pause state of the game. true = paused and false = unpaused. 
     * @param pauseState True to pause the game, false to unpause it.
    */
    pauseGame(pauseState: boolean): void;

    /** Returns the player with the specified id. Returns null if the player doesn't exist. 
     * @param playerId The id of the player to search in the list of players connected.
    */
    getPlayer(playerId: number): Player;

    /** Returns the current list of players. */
    getPlayerList(): Player[];

    /** If a game is in progress it returns the current score information. */
    getScores(): Scores;

    /** Returns the ball's position in the field or null if no game is in progress. */
    getBallPosition(): Position;

    /** Starts recording of a haxball replay. */
    startRecording(): void;

    /** Stops the recording previously started with startRecording and returns the replay file contents as a Uint8Array. */
    stopRecording(): Uint8Array;

    /** Changes the password of the room.
     * @param password The new password of the room, if null the password will be cleared.
    */
    setPassword(password: string): void;

    /** Activates or deactivates the recaptcha requirement to join the room. 
     * @param required True if every player must complete a recaptcha before joining the room.
    */
    setRequireRecaptcha(required: boolean): void;

    /** First all players listed are removed, then they are reinserted in the same order they appear in the playerIdList.
     * @param playerIdList The order in witch the players will be reinserted.
     * @param moveToTop If true players are inserted at the top of the list, otherwise they are inserted at the bottom of the list. 
    */
    reorderPlayers(playerIdList: number[], moveToTop: boolean): void;

    /** Sends a host announcement with msg as contents. Unlike sendChat, announcements will work without a host player and has a larger limit on the number of characters.
     * @param msg The content of the message.
     * @param targetId If null or undefined the message is sent to all players, otherwise it's sent only to the player with matching targetId.
     * @param color The message color.
     * @param style The style of the announcement text, it must be one of the following strings: "normal", "bold", "italic", "small", "small-bold", "small-italic".
     * @param sound If 0 the announcement will produce no sound. If 1 the announcement will produce a normal chat sound. If 2 it will produce a notification sound. 
    */
    sendAnnouncement(msg: string, targetId?: number, color?: number, style?: string, sound?: number): void;

    /** Sets the room's kick rate limits.
     * @param min The minimum number of logic-frames between two kicks. It is impossible to kick faster than this.
     * @param rate Works like min but lets players save up extra kicks to use them later depending on the value of burst.
     * @param burst Determines how many extra kicks the player is able to save up. */
    setKickRateLimit(min: number, rate: number, burst: number): void;

    /** Overrides the avatar of the target player.
     ** If avatar is set to null the override is cleared and the player will be able to use his own avatar again. */
    setPlayerAvatar(playerId: number, avatar: string): void;

    /** Sets properties of the target disc.
     ** Properties that are null or undefined will not be set and therefor will preserve whatever value the disc already had. */
    setDiscProperties(discIndex: number, properties: DiscProperties): void;

    /** Gets the properties of the disc at discIndex. Returns null if discIndex is out of bounds. */
    getDiscProperties(discIndex: number): DiscProperties;

    /** Same as setDiscProperties but targets the disc belonging to a player with the given Id. */
    setPlayerDiscProperties(playerId: number, properties: DiscProperties): void;

    /** Same as getDiscProperties but targets the disc belonging to a player with the given Id. */
    getPlayerDiscProperties(playerId: number): DiscProperties;

    /** Gets the number of discs in the game including the ball and player discs. */
    getDiscCount(): number;

    /** Object filled with the collision flags constants that compose the cMask and cGroup disc properties. */
    readonly CollisionFlags: CollisionFlags;

    /** Event called when a new player joins the room. */
    onPlayerJoin: (player: Player) => void;

    /** Event called when a player leaves the room. */
    onPlayerLeave: (player: Player) => void;

    /** Event called when a team wins. */
    onTeamVictory: (scores: Scores) => void;

    /** Event called when a player sends a chat message.
     ** The event function can return false in order to filter the chat message. This prevents the chat message from reaching other players in the room. */
    onPlayerChat: (player: Player, message: string) => boolean;

    /** Event called when a player kicks the ball. */
    onPlayerBallKick: (player: Player) => void;

    /** Event called when a team scores a goal. */
    onTeamGoal: (team: number) => void;

    /** Event called when a game starts.
     * @param byPlayer is the player which caused the event (can be null if the event wasn't caused by a player). */
    onGameStart: (byPlayer: Player) => void;

    /** Event called when a game stops.
     * @param byPlayer is the player which caused the event (can be null if the event wasn't caused by a player). */
    onGameStop: (byPlayer: Player) => void;

    /** Event called when a player's admin rights are changed.
     * @param byPlayer is the player which caused the event (can be null if the event wasn't caused by a player). */
    onPlayerAdminChange: (changedPlayer: Player, byPlayer: Player) => void;

    /** Event called when a player team is changed.
     * @param byPlayer is the player which caused the event (can be null if the event wasn't caused by a player). */
    onPlayerTeamChange: (changedPlayer: Player, byPlayer: Player) => void;

    /** Event called when a player has been kicked from the room. This is always called after the onPlayerLeave event.
     * @param byPlayer is the player which caused the event (can be null if the event wasn't caused by a player). */
    onPlayerKicked: (kickedPlayer: Player, reason: string, ban: boolean, byPlayer: Player) => void;

    /** Event called once for every game tick (happens 60 times per second). This is useful if you want to monitor the player and ball positions without missing any ticks.
     ** This event is not called if the game is paused or stopped. */
    onGameTick: () => void;

    /** Event called when the game is paused.
     * @param byPlayer is the player which caused the event (can be null if the event wasn't caused by a player). */
    onGamePause: (byPlayer: Player) => void;

    /** Event called when the game is unpaused.
     * @param byPlayer is the player which caused the event (can be null if the event wasn't caused by a player). */
    onGameUnpause: (byPlayer: Player) => void;

    /** Event called when the players and ball positions are reset after a goal happens. */
    onPositionsReset: () => void;

    /** Event called when a player gives signs of activity, such as pressing a key. This is useful for detecting inactive players. */
    onPlayerActivity: (player: Player) => void;

    /** Event called when the stadium is changed.
     * @param byPlayer is the player which caused the event (can be null if the event wasn't caused by a player). */
    onStadiumChange: (newStadiumName: string, byPlayer: Player) => void;

    /** Event called when the room link is obtained. */
    onRoomLink: (url: string) => void;

    /** Event called when the kick rate is set.
     * @param byPlayer is the player which caused the event (can be null if the event wasn't caused by a player). */
    onKickRateLimitSet: (min: number, rate: number, burst: number, byPlayer: Player) => void;
}

declare global {
    interface Window {
        HBInit: (roomConfig: RoomConfig) => Room;
        room: Room;
    }
}