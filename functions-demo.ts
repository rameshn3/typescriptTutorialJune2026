//named function
function display(){
    console.log("wlcome to typscript functions");
}
display();
//function with parameters
function add(a:number, b:number):number{
    return a + b;
}
let sum:number = add(5, 10);
console.log(`The sum is: ${sum}`);
//anonymous function
let multiply = function(a:number, b:number):number{
    return a * b;
}
let product:number = multiply(5, 10);
console.log(`The product is: ${product}`);
//optional parameters
function greet(name:string, greeting?:string):string{
    if(greeting){
        return `${greeting}, ${name}!`;
    }else{  
        return `Hello, ${name}!`;
    }
}
console.log(greet("Alice")); // Output: Hello, Alice!
console.log(greet("Bob", "Hi"));
//default parameters
function greetWithDefault(name:string, greeting:string = "Hello"):string{
    return `${greeting}, ${name}!`;
}
console.log(greetWithDefault("Charlie")); // Output: Hello, Charlie!
console.log(greetWithDefault("Dave", "Hi")); 

//arrow functions
let divide = (a:number, b:number):number => { 
    return a / b;
}
let quotient:number = divide(10, 5);
console.log(`The quotient is: ${quotient}`);
console.log("**************end of arrow function with block body********");
//arrrow function with implicit return
let square = (x:number):number => x * x;
let result:number = square(5);
console.log(`The square is: ${result}`);

//arrow function with no parameters
let greetEveryone = ():string => "Hello, everyone!";
console.log(greetEveryone());

//function overloading  
function combine(a:number, b:number): number;
function combine(a:string, b:string): string;
function combine(a:any, b:any): any;
function combine(a:any, b:any): any{
    if(typeof a === "number" && typeof b === "number"){
        return a + b;
    }else if(typeof a === "string" && typeof b === "string"){
        return a + " " + b;
    }else if(typeof a === "number" && typeof b === "string"){
        return a + " " + b;
    }
}
console.log(combine(5, 10));
console.log(combine("Hello", "World"));
console.log(combine(5, "Hello")); // Output: undefined (no matching overloading signature)
console.log(combine("Hi", 10)); // Output: undefined (no matching overloading signature)

//rest parameters(...parameters)
function sumAll(...numbers:number[]):number{
    return numbers.reduce((acc, curr) => acc + curr, 0);
}
let total:number = sumAll(1, 2, 3, 4, 5);
console.log(`The total is: ${total}`);
