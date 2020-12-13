import { room } from "../room";
import { colors } from "../room/configuration";
import { Player } from "../api/player";
import { TeamID } from "../api/team-id";
import { PlayerDB } from "../storage/player-db";
import { GoalData } from "./goal-data";
import { PlayerTouch } from "./player-touch";
import { LanguageProvider } from "../langs/language-provider";

export class Game {
    private static goalTimeline: GoalData[] = [];
    private static touchTimeline: PlayerTouch[] = [];
    private static redScore: number = 0;
    private static blueScore: number = 0;
    private static consecutiveWins: number = 0;
    
    static lastWinnerId: number = TeamID.Red;

    static getWinnerTeam(): number {
        return this.redScore > this.blueScore ? TeamID.Red : TeamID.Blue;
    }

    static getWinners(): string[] {
        const winners = [];
        for(let goalData of this.goalTimeline) {
            if(this.getWinnerTeam() == TeamID.Red) winners.push(...goalData.redTeam);
            else winners.push(...goalData.blueTeam);
        }
        return Array.from(new Set<string>(winners));
    }

    static getLosers(): string[] {
        const losers = [];
        for(let goalData of this.goalTimeline) {
            if(this.getWinnerTeam() == TeamID.Red) losers.push(...goalData.blueTeam);
            else losers.push(...goalData.redTeam);
        }
        return Array.from(new Set<string>(losers));
    }

    static getGkWinner(): string {
        const winnerGks = this.goalTimeline.reduce<{auth: string, repetitions: number}[]>((prev, current) => {
            const gkWinner = this.getWinnerTeam() == TeamID.Red ? current.redGk : current.blueGk;
            const gkIndex = prev.findIndex(val => val.auth == gkWinner);

            if(gkIndex != -1) prev[gkIndex].repetitions++;
            else if(gkWinner) prev.push({ auth: gkWinner, repetitions: 1 });

            return prev;
        }, []);

        return winnerGks.sort((a, b) => b.repetitions - a.repetitions)[0]?.auth;
    }

    static touch(player: Player): void {
        const last = this.touchTimeline[this.touchTimeline.length - 1];

        if(!last || last.player.name != player.name || last.player.team != player.team) {
            this.touchTimeline.push(new PlayerTouch(player, room.getScores().time));
            return;
        }
        
        last.time = room.getScores().time;
    }

    static async goal(team: number): Promise<void> {
        this.goalTimeline.push(new GoalData(team));

        const score = room.getScores();
        const scorer = this.touchTimeline.filter((p) => p.player.team == team && p.time > score.time - 2.5)[0] || this.touchTimeline.pop();
        const assistant = (scorer && scorer.player.team == team) ? this.touchTimeline.filter((p) => p.player.team == team && p.player.name != scorer.player.name && p.time < scorer.time && p.time > scorer.time - 3).pop() : null; 

        const goalTime = Math.floor(score.time / 2);
        const goalTimeMessage = goalTime <= 90 ? `[ ${goalTime}' ⚽ ] ` : `[ 90+ ⚽ ] `;

        let goalMessage = goalTimeMessage;

        if(scorer) {
            const scorerCarnet = await PlayerDB.findByName(scorer.player.name);

            if(scorer.player.team == team) {
                goalMessage += scorerCarnet.scoreMessage ?? LanguageProvider.get('Goaaaal by ') + scorer.player.name;
                scorerCarnet.goals++;
                scorerCarnet.cash += 50;
                await PlayerDB.update(scorerCarnet);

                if(assistant) {
                    const assistantCarnet = await PlayerDB.findByName(assistant.player.name);
                    goalMessage += " / " + LanguageProvider.get('Assist') + ': '+ assistant.player.name;
                    assistantCarnet.assists++;
                    assistantCarnet.cash += 50;
                    await PlayerDB.update(assistantCarnet);
                }
                room.sendAnnouncement(goalMessage, undefined, colors.goal, "bold");
            }
            else {
                scorerCarnet.ownGoals++;
                scorerCarnet.cash -= 50;
                goalMessage += LanguageProvider.get('Own goal by') + ' ' + scorer.player.name;
                room.sendAnnouncement(goalMessage, undefined, colors.owngoal, "bold");
                await PlayerDB.update(scorerCarnet);
            }    
        }

        this.touchTimeline = [];
        this.redScore = score.red;
        this.blueScore = score.blue;
    }

    static async end(): Promise<void> {
        if(this.redScore != this.blueScore) {

            this.consecutiveWins = this.lastWinnerId == this.getWinnerTeam() ? this.consecutiveWins + 1 : 1;
            this.lastWinnerId = this.getWinnerTeam();

            room.sendAnnouncement(`${LanguageProvider.get('Consecutive wins')}: ${this.consecutiveWins}`, undefined, colors.user, "italic");

            const gkWinnerAuth = this.getGkWinner();
            const winnersAuths = this.getWinners();
            const losersAuths = this.getLosers()
                               .filter(auth => !winnersAuths.some(winauth => winauth == auth));
                        
            for(let winnerAuth of winnersAuths) {
                const carnet = await PlayerDB.find(winnerAuth);

                carnet.wins++;
                carnet.cash += 200;

                await PlayerDB.update(carnet);
            }

            for(let loserAuth of losersAuths) {
                const carnet = await PlayerDB.find(loserAuth);
                carnet.loses++;

                await PlayerDB.update(carnet);
            }

            if(gkWinnerAuth) {
                const carnet = await PlayerDB.find(gkWinnerAuth);

                if(this.blueScore == 0 || this.redScore == 0) 
                    carnet.undefeated++;
                
                carnet.cash += 75 * Math.abs(this.redScore - this.blueScore);

                await PlayerDB.update(carnet);
            }
        }
        
        this.redScore = 0;
        this.blueScore = 0;
        this.goalTimeline = [];
    }
}