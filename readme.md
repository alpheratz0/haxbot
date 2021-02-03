<p align="center"">
    <h1 align="center">Haxball bot with <i>Typescript</i></h1>
    <p align="center">
        <img align="center" src="https://i.ibb.co/ynLzhWx/Sin-t-tulo.png">
        </br>
        <img src="https://img.shields.io/badge/made%20with-typescript-blue">
        <img src="https://img.shields.io/badge/version-1.0.0-blue">
        <img src="https://img.shields.io/badge/license-MIT-green">
        <img src="https://img.shields.io/badge/open%20source-red">
        <img src="https://img.shields.io/badge/suggestions-welcome-green">
        <img src="https://img.shields.io/github/last-commit/augus99/haxbot?style=flat">
        <img src="https://img.shields.io/github/commit-activity/y/augus99/haxbot?style=flat">
        <!-- <img src="http://unmaintained.tech/badge.svg"> -->
    </p>
</p>


This bot uses the official [haxball headless api](https://github.com/haxball/haxball-issues/wiki/Headless-Host) and keep player statics using the indexedDB api. This bot is currently under development.

## Running the bot
First you need to install all dependencies
```console
foo@bar:~/haxbot $ yarn cache clean
foo@bar:~/haxbot $ yarn install
```

Then edit the room configuration that is found on this path: `./src/room/configuration.ts` and set the room name and any other room setting as you want.

After that you should run the following command to build the bot
```console
foo@bar:~/haxbot $ yarn run build
```

Then check the `./build` folder, it will contain a file called `bot.js`, copy its content.

Go to the [haxball headless page](https://www.haxball.com/headless) and open the developer tools, if your using chrome or edge browser you can do it with the `ctrl + shift + i` shortcut.

Then paste the bot code, solve the captcha and wait until the room link is generated, open it on a new tab, dont close the tab where you paste the code or the bot will stop working.

## Admin chat
If you are admin or superuser you can communicate with other connected admins on the room simply prefixing the message with the '#' symbol. 

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
- !small
- !classic
- !big
- !huge

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
- !kickall `reason?`
- !banall `reason?`

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
