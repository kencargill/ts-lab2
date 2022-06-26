import { Greeter } from "./greeter1";
import { JavaScriptGreeter } from "./greeter2";
import { LoudGreeter } from "./greeter3";
import { HtmlGreeter } from "./greeter4";

const greeting = "hello";
const name = "john";

const greeter = new Greeter(greeting);
const greeterName = greeter.greet(name);

console.log("greeter1: " + greeterName);

const jsGreeter = new JavaScriptGreeter(greeting);
const jsGreeterName = jsGreeter.greet(name);

console.log(jsGreeterName);

const loudG = new LoudGreeter(greeting);
const loudGName = loudG.greet(name);

console.log(loudGName);

const tagName = "p";
const htmlG = new HtmlGreeter(greeting, tagName);
const htmlGName = htmlG.greet(name);

console.log(htmlGName);
