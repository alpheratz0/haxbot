import { PlayerDB } from "../storage/player-db";
import { PlayerRecord } from "../storage/player-record";

export class AuthSystem {
    static async authenticate(auth: string, name: string): Promise<PlayerRecord> {
        const authRecord = await PlayerDB.find(auth);
        const nameRecord = await PlayerDB.findByName(name);

        if(authRecord == null && nameRecord == null) {
            const record = new PlayerRecord(auth, name);
            await PlayerDB.add(record);
            return record;
        }

        if(nameRecord == null) {
            authRecord.name = name;
            authRecord.names.push(name);
            await PlayerDB.update(authRecord);
            return authRecord;
        }

        if(authRecord == null) {
            return null;
        }

        if(authRecord.auth == nameRecord.auth) {
            authRecord.name = name;
            return authRecord;
        }

        return null;
    }
}