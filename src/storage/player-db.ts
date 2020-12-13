import { PlayerRecord } from "./player-record";

/** Represents a method that receives an object and returns a boolean. */
export interface Predicate<T> {
    (obj: T): boolean;
}

/** Class that manages player persistent storage using the indexedDB API. */
export class PlayerDB {
    private static db: IDBDatabase;
    
    /** Connects to the database with the specified name. 
     * @param dbName The database name.
    */
    static async connect(dbName: string): Promise<void> {
        return new Promise((resolve, reject) => {
            const request = indexedDB.open(dbName);
            
            request.onsuccess = (ev) => {
                this.db = request.result;
                resolve();
            };

            request.onupgradeneeded = (ev) => {
                const store = request.result.createObjectStore("players", { keyPath: "auth" });
                store.createIndex("name", "name", { unique: true });
                store.createIndex("names", "names", { unique: true, multiEntry: true })
                store.createIndex("goals", "goals", { unique: false });
                store.createIndex("assists", "assists", { unique: false });
                store.createIndex("wins", "wins", { unique: false });
                store.createIndex("undefeated", "undefeated", { unique: false });
                store.createIndex("cash", "cash", { unique: false });
            };

            request.onerror = (ev) => {
                reject('error while opening db');
            };
        });
    }

    /** Adds a player to the database. 
     * @param player The player to add.
    */
    static async add(player: PlayerRecord): Promise<void> {
        return new Promise((resolve, reject) => {
            const store = this.db.transaction("players", "readwrite").objectStore("players");
            const request = store.add(player);

            request.onsuccess = (evt) => resolve();
            request.onerror = (evt) => reject('error while adding player');
        })
    }

    /** Updates the specified player with the new values.
     * @param player The player updated.
     */
    static async update(player: PlayerRecord): Promise<void> {
        return new Promise((resolve, reject) => {
            const store = this.db.transaction("players", "readwrite").objectStore("players");
            const request = store.put(player);
                
            request.onsuccess = (evt) => resolve();
            request.onerror = (evt) => reject('error while updating player');
        });
    }
    
    /** Returns the player with the specified auth.
     * @param auth The player's auth.
     */
    static async find(auth: string): Promise<PlayerRecord|null> {
        return new Promise((resolve, reject) => {
            const store = this.db.transaction("players").objectStore("players");
            const request = store.get(auth);

            request.onsuccess = (event) => resolve(request.result ? PlayerRecord.fromPartial(request.result) : null);
            request.onerror = (event) => reject('error while finding player');
        });
    }

    /** Returns the player with the specified name.
     * @param name The player's name.
     */
    static async findByName(name: string): Promise<PlayerRecord|null> {
        return new Promise((resolve, reject) => {
            const store = this.db.transaction("players").objectStore("players");
            const index = store.index("names");
            const keyRange = IDBKeyRange.only(name);
            const request = index.get(keyRange);

            request.onsuccess = (evt) => resolve(request.result ? PlayerRecord.fromPartial(request.result) : null);
            request.onerror = (evt) => reject('error while finding player');
        });
    }

    /** Returns if a player with the specified auth exists. 
     * @param auth The player's auth.
    */
    static async exists(auth: string): Promise<boolean> {
        return new Promise<boolean>((resolve, reject) => {
            const store = this.db.transaction("players").objectStore("players");
            const request = store.count(auth);

            request.onsuccess = (evt) => resolve(request.result > 0);
            request.onerror = (evt) => reject('error while checking player existence');
        });
    }

    /** Returns if a player with the specified name exists. 
     * @param name The player's name.
    */
    static async existsName(name: string): Promise<boolean> {
        return new Promise<boolean>((resolve, reject) => {
            const store = this.db.transaction("players").objectStore("players");
            const index = store.index("names");
            const keyRange = IDBKeyRange.only(name);
            const request = index.count(keyRange);

            request.onsuccess = (evt) => resolve(request.result > 0);
            request.onerror = (evt) => reject('error while checking player existence');
        });
    }

    /** Returns all players that meet the predicate condition. 
     * @param func The predicate function.
    */
    static async where(func: Predicate<PlayerRecord>, maxResults: number = 5): Promise<PlayerRecord[]> {
        return new Promise<PlayerRecord[]>((resolve, reject) => {
            const store = this.db.transaction("players").objectStore("players");
            const request = store.openCursor();
            const items = [];

            request.onsuccess = (evt) => {
                const cursor = request.result;
                if(cursor && items.length < maxResults) {
                    const player = PlayerRecord.fromPartial(cursor.value);
                    if(func(player))
                        items.push(player);
                    cursor.continue();
                }
                else resolve(items);
            };

            request.onerror = (evt) => {
                reject('error while opening cursor');
            };
        });
    }

    /** Get the three players with the best goal score. */
    static async getTopScorers(): Promise<PlayerRecord[]> {
        return new Promise<PlayerRecord[]>((resolve, reject) => {
            const store = this.db.transaction("players").objectStore("players");
            const index = store.index("goals");
            const request = index.openCursor(undefined, 'prev');
            const players = [];

            request.onsuccess = (evt) => {
                const cursor = request.result;
                if(cursor && players.length < 3) {
                    players.push(PlayerRecord.fromPartial(cursor.value));
                    cursor.continue();
                } 
                else resolve(players);
            };

            request.onerror = (evt) => {
                reject('error while opening cursor');
            };
        });
    }
}