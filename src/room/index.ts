import { Room } from '../api/room';
import { roomConfiguration } from './configuration';

export const room: Room = window.HBInit(roomConfiguration);
window.room = room;
