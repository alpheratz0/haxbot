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
                color: ${this.color || 'white'};
                padding: ${this.paddingY || 3}px ${this.paddingX || 5}px;
                border-radius: 3px;
                font-size: .7rem;`;
    }
}

export class Logger {
    static logEvent(event: string, message: string, eventStyle: LoggerStyles): void {
        console.log(`%c${event}%c ${message}`, eventStyle.cssify(), '');
    }
}