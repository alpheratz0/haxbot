import { GeoLocation } from "../api/geo-location";
import { RoomConfig } from "../api/room-config";
import { Language } from "../langs/language";
import { PasswordGenerator } from "../util/password-generator";

export const roomConfiguration: RoomConfig = {
    roomName: "haxball-testing-room",
    geo: undefined as GeoLocation,
    maxPlayers: 2, 
    noPlayer: true,
    password: undefined,
    public: false
}

export const userConfiguration = {
    superuserPassword: "" || PasswordGenerator.generate(),
    language: Language.English
}

export const colors = {
    information: 0xd1ac26,
    error: 0xc41c10,
    admin: 0xffffff,
    superuser: 0xffffff,
    goal: 0xffffff,
    owngoal: 0xffffff,
    user: 0xffffff,
    outgoingMessage: 0xffffff,
    incomingMessage: 0xffffff
}