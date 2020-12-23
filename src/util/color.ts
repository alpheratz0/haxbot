export class Color {
    static random(): number {
        const r: number = Math.floor(20 + 235 * Math.random());
        const g: number = Math.floor(20 + 235 * Math.random());
        const b: number = Math.floor(20 + 235 * Math.random());

        return (r << 16) + (g << 8) + b;
    }

    static toHTML(color: number): string {
        const hex = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'A', 'B', 'C', 'D', 'E', 'F'];
        
        const r = (color & 0xff0000) >>> 16;
        const g = (color & 0x00ff00) >>> 8;
        const b = color & 0x0000ff;

        return "#" + hex[Math.floor(r/16)] + hex[r%16] + 
                     hex[Math.floor(g/16)] + hex[g%16] + 
                     hex[Math.floor(b/16)] + hex[b%16];

    }
}