import { Greeter } from "./greeter1";

export class JavaScriptGreeter extends Greeter {
    greet(name: string) {
        return `console.log('${this.greeting}, ${name}!')`;
    }
}