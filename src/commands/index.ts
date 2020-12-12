export class CommandInput {

    /** The command name. */
    readonly command: string;
    
    /** The command arguments. */
    readonly args: string[];

    /** The command flags. */
    readonly flags: string[];

    constructor(command: string, args: string[], flags: string[]) {
        this.command = command;
        this.args = args;
        this.flags = flags;
    }

    /** Parses the command. */
    static parse(command: string, hasTokenAtFirstChar: boolean = true): CommandInput {
        const parts = command.split(' ');
        const cmd = hasTokenAtFirstChar ? parts.shift().substring(1) : parts.shift();
        const args = [];
        const flags = [];

        for(let part of parts) {
            if(part.substring(0, 2) == "--") {
                const flag = part.substring(2);
                if(!flags.includes(flag))
                    flags.push(flag);
            }
            else args.push(part);
        }

        return new CommandInput(cmd, args, flags);
    }
}