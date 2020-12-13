export interface ConnectionEntry {
    name: string;
    auth?: string;
}

export class Connection {
    private static connections: ConnectionEntry[] = [];

    static add(entry: ConnectionEntry): void {
        this.connections.push(entry);
    }

    static remove(entry: ConnectionEntry): void {
        for(let i = this.connections.length - 1; i >= 0; i--) {
            if(this.connections[i].name == entry.name) {
                this.connections.splice(i, 1);
                return;
            }
        }
    }

    static count(entry: ConnectionEntry): number {
        let count = 0;
        for(let i = 0; i < this.connections.length; i++)
            if(this.connections[i].auth == entry.auth || this.connections[i].name == entry.name) 
                count++;
        return count;
    }
}