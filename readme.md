# Haxball bot with *Typescript*

![bot logo](https://i.ibb.co/ynLzhWx/Sin-t-tulo.png)

This bot uses the official [haxball headless api](https://github.com/haxball/haxball-issues/wiki/Headless-Host).
This bot is currently under development.

## Commands
Here is the list of available commands for now

## User commands
Commands that every `player` on the room can execute.
- help
- banvote `id`:**`number`**
- celebration `message`:**`string`**
- donate `id`:**`number`** `ammount`:**`number`**
- topgks
- login `password`:**`string`**
- rankings
- topassists
- stats `id?`:**`number`**
- no
- kickme `reason?`:**`string`**
- yes
- w `id`:**`number`** `message`:**`string`**
- welcome `message`:**`string`**
- topcash
- topscorers

## Administrative commands
Commands that only admins and superusers can execute
- clearbans
- color
- mute `id`:**`number`**
- notify `message`:**`string`**
- swap
- unmute `id`:**`number`**
- winner
- setavatar `id`:**`number`** `avatar?`:**`string`**
- unmuteall
- rainbow
- x1
- x3
- penalties

## Superuser commands
Commands that only superusers can execute
- admin `id`:**`number`**
- aka `id`:**`number`**
- ban `id`:**`number`** `reason?`:**`string`**
- delay `text`:**`command|message`**
- power `power`:**`number`**
- saverec
- search `query`:**`string`**
- setavatars `avatar`:**`string`**
- setball `x`:**`number`** `y`:**`number`**
- setpassword `password?`:**`string`**
- setradius `id`:**`number`** `radius`:**`number`**
- stopball
- setradiuses `radius`:**`number`**
- setspect `id`:**`number`** `position`:**`number`**
- merge `auth_from`:**`string`** `id`:**`number`**

## Creating a new command
First go to the corresponding folder of the commands, and create a new file, if the command is an user command use the `UserCommand` class, if the command is an administrative command use `AdministrativeCommand` class and if the command is a superuser command use the `SuperUserCommand` class.

Filename: `command-name.ts` \
Location: `./src/commands/haxball/administrative` \
Content: 
```ts
    import { AdministrativeCommand, GameCommandContext } from "..";

    export default commandNameCommand = new AdministrativeCommand('commandname', ({ sender, record, room, args }: GameCommandContext) => {
        // sender: { name: "John", id: 2, admin: true, ... }
        // args: ["arg1", "arg2"]
        // room: { sendAnnouncement(...), ... }
        // record: { goals: 2, assists: 10, names: ["John", "Paul"], ... }

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
