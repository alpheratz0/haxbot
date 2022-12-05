import { Predicate } from '../storage/player-db';

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
	static parse(
		command: string,
		hasTokenAtFirstChar: boolean = true
	): CommandInput {
		const parts = command.split(' ');
		const cmd = hasTokenAtFirstChar
			? parts.shift().substring(1)
			: parts.shift();
		const args = [];
		const flags = [];

		for (let part of parts) {
			if (part.substring(0, 2) == '--') {
				const flag = part.substring(2);
				if (!flags.includes(flag)) flags.push(flag);
			} else args.push(part);
		}

		return new CommandInput(cmd, args, flags);
	}
}

export abstract class CommandContext {
	readonly args: string[];
}

export interface CommandCallback<TContext> {
	(context: TContext): void;
}

export abstract class Command<TContext extends CommandContext> {
	/** The command name. */
	public readonly name: string;

	/** The command callback. */
	public readonly run: CommandCallback<TContext>;

	constructor(name: string, callback: CommandCallback<TContext>) {
		this.name = name.toLowerCase();
		this.run = callback;
	}

	/** Tests the command, if the name matches it is executed with the context.
	 * @param name The name to test this command against.
	 * @param context The context where this command is executed.
	 */
	abstract test(name: string, context: TContext): boolean;
}

export class CommandFactory<TContext extends CommandContext> {
	private m_commands: Command<TContext>[];

	constructor() {
		this.m_commands = [];
	}

	process(cmdName: string, context: TContext): boolean {
		cmdName = cmdName.toLowerCase();
		for (let command of this.m_commands) {
			if (command.test(cmdName, context)) {
				return true;
			}
		}

		return false;
	}

	add(commands: Command<TContext>[]): void {
		for (let command of commands)
			if (
				!this.m_commands.find(
					(cmd) =>
						cmd.name.toLowerCase() == command.name.toLowerCase()
				)
			)
				this.m_commands.push(command);
	}

	where(func: Predicate<Command<TContext>>): Command<TContext>[] {
		return this.m_commands.filter(func);
	}
}