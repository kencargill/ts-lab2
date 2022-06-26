import { Greeter } from "./greeter1";

export class HtmlGreeter extends Greeter {
    tagName : string = "h1";
    
    constructor(greeting: string, tagName: string = "h1") {
        super(greeting);
        this.tagName = tagName;
    }
    
    greet(name: string) {
        return `<${this.tagName}>${this.greeting}, ${name}!</${this.tagName}>`
    }
}