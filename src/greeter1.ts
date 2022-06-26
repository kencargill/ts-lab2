export class Greeter {
    greeting: string;

    constructor(input: string) {
        this.greeting = input;
    }

    greet(name: string) {
        return `${this.greeting}, ${name}!`
    }
}


