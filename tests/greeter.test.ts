import { Greeter } from "../src/greeter1";
import { JavaScriptGreeter } from "../src/greeter2";
import { LoudGreeter } from "../src/greeter3";
import { HtmlGreeter } from "../src/greeter4";

describe("Greeter", () => {
    test("returns hello, john!", () => {
        //arrange
        const greeting = "hello";
        const name = "john";
        
        //act
        const greeter = new Greeter(greeting);
        const greeterName = greeter.greet(name);
        
        //assert
        expect(greeterName).toBe("hello, john!")
    })
    
    test("returns hey, jane!", () => {
        //arrange
        const greeting = "hey";
        const name = "jane";
        
        //act
        const greeter = new Greeter(greeting);
        const greeterName = greeter.greet(name);
        
        //assert
        expect(greeterName).toBe("hey, jane!")
    })
});

describe("JavaScriptGreeter", () => {
    test("returns console.log('hello, john!')", () => {
        //arrange
        const greeting = "hello";
        const name = "john";
        
        //act
        const greeter = new JavaScriptGreeter(greeting);
        const greeterName = greeter.greet(name);
       
        //assert
         expect(greeterName).toBe("console.log('hello, john!')")
    })

    test("returns console.log('hey, jane!')", () => {
        //arrange
        const greeting = "hey";
        const name = "jane";
        
        //act
        const greeter = new JavaScriptGreeter(greeting);
        const greeterName = greeter.greet(name);
       
        //assert
         expect(greeterName).toBe("console.log('hey, jane!')")
    })
});

describe("LoudGreeter", () => {
    test("returns hello, john!!", () => {
        //arrange
        const greeting = "hello";
        const name = "john";
        
        //act
        const greeter = new LoudGreeter(greeting);
        const greeterName = greeter.greet(name);
        
        //assert
        expect(greeterName).toBe("hello, john!!")
    })
    
    test("returns hey, jane!!!", () => {
        //arrange
        const greeting = "hey";
        const name = "jane";
        
        //act
        const greeter = new LoudGreeter(greeting);
        greeter.addVolume();
        const greeterName = greeter.greet(name);
        
        //assert
        expect(greeterName).toBe("hey, jane!!!")
    })

    test("returns hey, jane!!!!!", () => {
        //arrange
        const greeting = "hey";
        const name = "jane";
        
        //act
        const greeter = new LoudGreeter(greeting);
        greeter.addVolume();
        greeter.addVolume();
        greeter.addVolume();
        const greeterName = greeter.greet(name);
        
        //assert
        expect(greeterName).toBe("hey, jane!!!!!")
    })
});

describe("HtmlGreeter", () => {
    test("returns <p>hello, john!</p>", () => {
        //arrange
        const tagName = "p";
        const greeting = "hello";
        const name = "john";
        
        //act
        const greeter = new HtmlGreeter(greeting, tagName);
        const greeterName = greeter.greet(name);
        
        //assert
        expect(greeterName).toBe("<p>hello, john!</p>")
    })
    
    test("returns <h1>hey, jane!</h1>", () => {
        //arrange
        const greeting = "hey";
        const name = "jane";
        
        //act
        const greeter = new HtmlGreeter(greeting);
        const greeterName = greeter.greet(name);
        
        //assert
        expect(greeterName).toBe("<h1>hey, jane!</h1>")
    })

    test("returns hey, jane!", () => {
        //arrange
        const tagName = "h3";
        const greeting = "hey";
        const name = "jane";
        
        //act
        const greeter = new HtmlGreeter(greeting, tagName);
        const greeterName = greeter.greet(name);
        
        //assert
        expect(greeterName).toBe("<h3>hey, jane!</h3>")
    })
});
