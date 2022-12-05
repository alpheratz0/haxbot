<p align="center"">
    <h1 align="center">Haxball bot with <i>Typescript</i></h1>
    <p align="center">
        <img align="center" src="https://raw.githubusercontent.com/alpheratz0/haxbot/master/assets/logo.png">
        </br>
        </br>
        <img src="https://img.shields.io/badge/license-GPLv2.0-green">
        <img src="https://img.shields.io/badge/open%20source-red">
        <img src="https://img.shields.io/github/last-commit/alpheratz0/haxbot?style=flat">
        <img src="https://img.shields.io/github/commit-activity/y/alpheratz0/haxbot?style=flat">
        <img src="http://unmaintained.tech/badge.svg">
    </p>
</p>


This bot uses the official [haxball headless api](https://github.com/haxball/haxball-issues/wiki/Headless-Host) and stores player statics using the indexedDB browser api.

## How to generate the bot
* Install all the dependencies `yarn cache clean && yarn install`
* Edit the room configuration `src/room/configuration.ts`
* Generate the js file for the bot with `yarn run build`
