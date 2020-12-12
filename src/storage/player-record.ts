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

    elo(): number {
        return this.goals * 120 + this.assists * 120 + this.ownGoals * -120 + this.undefeated * 240 + this.wins * 300 + this.loses * -300; 
    }
}