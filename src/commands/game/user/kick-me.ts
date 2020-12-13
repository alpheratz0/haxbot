import { GameCommandContext, UserCommand } from "..";

export const kickMeCommand = new UserCommand('kickme', ({ room, args, sender }: GameCommandContext) => {
    const reason = args.join(" ").trim();
    room.kickPlayer(sender.id, reason, false);
});