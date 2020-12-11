export class PlayerRecord {
    auth: string;
    name: string;
    names: string[];
    isSuperUser: boolean;
    goals: number;
    assists: number;
    ownGoals: number;
    wins: number;
    loses: number;
    undefeated: number;
    welcomeMessage: string;
    scoreMessage: string;
    rainbow: boolean;
    cash: number;
    color: number = 0xffffff;
    mutedUntil: number;
    
    elo(): number {
        return this.goals * 120 + this.assists * 120 + this.ownGoals * -120 + this.undefeated * 240 + this.wins * 300 + this.loses * -300; 
    }
}