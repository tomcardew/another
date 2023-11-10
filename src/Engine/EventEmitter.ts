type EventCall = (...args: any[]) => void;

interface Events {
    [event: string]: EventCall[];
}

class EventEmitter {
    private events: Events = {};

    on(event: string, listener: EventCall): void {
        if (!this.events[event]) {
            this.events[event] = [];
        }
        this.events[event].push(listener);
    }
    
    off(event: string, listener: EventCall): void {
        if (this.events[event]) {
            this.events[event] = this.events[event].filter(l => l !== listener);
        }
    }

    emit(event: string, ...args: any[]): void {
        if (this.events[event]) {
            this.events[event].forEach(listener => listener(...args));
        }
    }
}

const eventEmitter = new EventEmitter();

export { eventEmitter, EventCall, Events };