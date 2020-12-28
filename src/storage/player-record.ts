export class PlayerRecord {
    auth: string;
    name: string;
    names?: string[] = [];
    isSuperUser?: boolean = false;
    goals?: number = 0;
    assists?: number = 0;
    ownGoals?: number = 0;
    wins?: number = 0;
    loses?: number = 0;
    undefeated?: number = 0;
    welcomeMessage?: string = null;
    scoreMessage?: string = null;
    rainbow?: boolean = false;
    cash?: number = 0;
    color?: number = 0xffffff;
    mutedUntil?: number = 0;

    constructor(auth: string, name: string){
        this.name = name;
        this.auth = auth;
        this.names = [name];
    }

    static fromPartial(payload: Partial<PlayerRecord>): PlayerRecord {
        const result = new PlayerRecord(undefined, undefined);
        for(const key in payload){
            if(result.hasOwnProperty(key)){
                result[key] = payload[key];
            }
        }

        return result;
    }

    static isValidName(name: string): boolean {
        return !(name.includes(`"`) || name.includes(`'`) || name.includes("`") || name.toLowerCase().includes("root"));
    }

    elo(): number {
        return this.goals * 120 + this.assists * 120 + this.ownGoals * -120 + this.undefeated * 240 + this.wins * 300 + this.loses * -300; 
    }

    isMuted(): boolean {
        return this.mutedUntil > Date.now();
    }

    mute(minutes: number): void {
        this.mutedUntil = Date.now() + (1000 * 60 * minutes);
    }

    unmute(): void {
        this.mutedUntil = 0;
    }

    merge(other: PlayerRecord): void {
        this.goals += other.goals;
        this.assists += other.assists;
        this.ownGoals += other.ownGoals;
        this.wins += other.wins;
        this.loses += other.loses;
        this.undefeated += other.undefeated;
        this.cash += other.cash;
        this.color = other.color;
        this.scoreMessage = other.scoreMessage;
        this.welcomeMessage = other.welcomeMessage;

        other.reset();
    }

    reset(): void {
        this.goals = 0;
        this.assists = 0;
        this.ownGoals = 0;
        this.wins = 0;
        this.loses = 0;
        this.undefeated = 0;
        this.cash = 0;
        this.scoreMessage = null;
        this.welcomeMessage = null;
        this.color = null;
        this.names = [this.name];
    }
}