import { Room } from "../../api/room";
import { Player } from "../../api/player";
import { Command, CommandContext, CommandFactory } from "..";
import { PlayerRecord } from "../../storage/player-record";

export class GameCommandContext implements CommandContext {
    public readonly sender: Player;
    public readonly args: string[];
    public readonly record: PlayerRecord;
    public readonly room: Room;

    constructor(sender: Player, args: string[], record: PlayerRecord, room: Room) {
        this.sender = sender;
        this.args = args;
        this.record = record;
        this.room = room;
    }
}

export class UserCommand extends Command<GameCommandContext> {
    test(name: string, context: GameCommandContext): boolean {
        if(this.name == name) {
            this.run(context);
            return true;
        }

        return false;
    }
}

export class AdministrativeCommand extends Command<GameCommandContext> {
    test(name: string, context: GameCommandContext): boolean {
        if(this.name == name) {
            if(context.record.isSuperUser || context.sender.admin) 
                this.run(context);

            return true;
        }

        return false;
    }
}

export class SuperUserCommand extends Command<GameCommandContext> {
    test(name: string, context: GameCommandContext): boolean {
        if(this.name == name) {
            if(context.record.isSuperUser) 
                this.run(context);
            
            return true;
        }

        return false;
    }
}

export const GameCommandFactory = new CommandFactory<GameCommandContext>();