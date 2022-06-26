import { Greeter } from "./greeter1";

export class LoudGreeter extends Greeter {
    extra: string = "!";

    addVolume(): void {
        this.extra += "!"
    }

    greet(name: string): string {
        return `${this.greeting}, ${name}!${this.extra}`
    }
}