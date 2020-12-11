import { GeoLocation } from "../api/geo-location";
import { RoomConfig } from "../api/room-config";

export const roomConfiguration: RoomConfig = {
    roomName: "haxball-testing-room",
    geo: undefined as GeoLocation,
    maxPlayers: 2, 
    noPlayer: true,
    password: undefined,
    public: false
}