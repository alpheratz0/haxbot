# Haxball bot with *Typescript*

![bot logo](https://i.ibb.co/ynLzhWx/Sin-t-tulo.png)

This bot uses the official [haxball headless api](https://github.com/haxball/haxball-issues/wiki/Headless-Host).
This bot is currently under development.

## Commands
Here is the list of available commands for now

## User commands
Commands that every `player` on the room can execute.
- !help
- !banvote `id`
- !celebration `message`
- !donate `id` `ammount`
- !topgks
- !login `password`
- !rankings
- !topassists
- !stats `id?`
- !no
- !kickme `reason?`
- !yes
- !w `id` `message`
- !welcome `message`
- !topcash
- !topscorers

## Administrative commands
Commands that only admins and superusers can execute
- !clearbans
- !color
- !mute `id`
- !notify `message`
- !swap
- !unmute `id`
- !winner
- !setavatar `id` `avatar?`
- !unmuteall
- !rainbow
- !x1
- !x3
- !penalties

## Superuser commands
Commands that only superusers can execute
- !admin `id`
- !aka `id`
- !ban `id` `reason?`
- !delay `text`
- !power `power`
- !saverec
- !search `query`
- !setavatars `avatar`
- !setball `x` `y`
- !setpassword `password?`
- !setradius `id` `radius`
- !stopball
- !setradiuses `radius`
- !setspect `id` `position`
- !merge `auth_from` `id`

## Creating a new command
First go to the corresponding folder of the commands, and create a new file, if the command is an user command use the `UserCommand` class, if the command is an administrative command use `AdministrativeCommand` class and if the command is a superuser command use the `SuperUserCommand` class.

Filename: `command-name.ts` \
Location: `./src/commands/game/administrative` \
Content: 
```ts
import { AdministrativeCommand, GameCommandContext } from "..";

export const commandNameCommand = new AdministrativeCommand('commandname', (context: GameCommandContext) => {
    // context.sender: { name: "John", id: 2, admin: true, ... }
    // context.args: ["arg1", "arg2"]
    // context.room: { sendAnnouncement(...), ... }
    // context.record: { goals: 2, assists: 10, names: ["John", "Paul"], ... }

    // do stuff
})
```
Then go to `./src/commands/game/loader.ts` and register the command.
```ts
// ...
import { GameCommandFactory } from '.'
import { commandNameCommand } from './administrative/command-name'
// ...

export class GameCommandManager {

    /** Loads all commands. */
    static load(): void {
        // ...
        GameCommandFactory.add([commandNameCommand]);
        // ...
    }
}

```

## Credits

Pull request template is a short version of the [template](https://embeddedartistry.com/blog/2017/08/04/a-github-pull-request-template-for-your-projects/) made by [Phillip Johnston](https://embeddedartistry.com/blog/author/phillip/).
