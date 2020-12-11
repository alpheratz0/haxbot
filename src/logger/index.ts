export class LoggerStyles {
    backgroundColor?: string;
    color?: string;
    paddingX?: number;
    paddingY?: number;

    constructor(backgroundColor?: string, color?: string, paddingX?: number, paddingY?: number) {
        this.backgroundColor = backgroundColor;
        this.color = color;
        this.paddingX = paddingX;
        this.paddingY = paddingY;
    }

    cssify(): string {
        return `background-color: ${this.backgroundColor || 'inherit'}; 
                color: ${this.color || 'inherit'};
                padding: ${this.paddingY || 0}px ${this.paddingX || 0}px;
                border-radius: 4px;`;
    }
}

export class Logger {
    static logEvent(event: string, message: string, eventStyle: LoggerStyles): void {
        console.log(`%c${event}%c ${message}`, eventStyle.cssify(), '');
    }
}