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
    admin: 0x69d93d,
    superuser: 0x3db2d9,
    goal: 0xe35412,
    owngoal: 0x4164b5,
    user: 0xd1ac26,
    outgoingMessage: 0xb194e3,
    incomingMessage: 0xb194e3
}