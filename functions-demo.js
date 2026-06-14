//named function
function display() {
    console.log("wlcome to typscript functions");
}
display();
//function with parameters
function add(a, b) {
    return a + b;
}
var sum = add(5, 10);
console.log("The sum is: ".concat(sum));
//anonymous function
var multiply = function (a, b) {
    return a * b;
};
var product = multiply(5, 10);
console.log("The product is: ".concat(product));
//optional parameters
function greet(name, greeting) {
    if (greeting) {
        return "".concat(greeting, ", ").concat(name, "!");
    }
    else {
        return "Hello, ".concat(name, "!");
    }
}
console.log(greet("Alice")); // Output: Hello, Alice!
console.log(greet("Bob", "Hi"));
//default parameters
function greetWithDefault(name, greeting) {
    if (greeting === void 0) { greeting = "Hello"; }
    return "".concat(greeting, ", ").concat(name, "!");
}
console.log(greetWithDefault("Charlie")); // Output: Hello, Charlie!
console.log(greetWithDefault("Dave", "Hi"));
//arrow functions
var divide = function (a, b) {
    return a / b;
};
var quotient = divide(10, 5);
console.log("The quotient is: ".concat(quotient));
console.log("**************end of arrow function with block body********");
//arrrow function with implicit return
var square = function (x) { return x * x; };
var result = square(5);
console.log("The square is: ".concat(result));
//arrow function with no parameters
var greetEveryone = function () { return "Hello, everyone!"; };
console.log(greetEveryone());
function combine(a, b) {
    if (typeof a === "number" && typeof b === "number") {
        return a + b;
    }
    else if (typeof a === "string" && typeof b === "string") {
        return a + " " + b;
    }
    else if (typeof a === "number" && typeof b === "string") {
        return a + " " + b;
    }
}
console.log(combine(5, 10));
console.log(combine("Hello", "World"));
console.log(combine(5, "Hello")); // Output: undefined (no matching overloading signature)
console.log(combine("Hi", 10)); // Output: undefined (no matching overloading signature)
//rest parameters(...parameters)
function sumAll() {
    var numbers = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        numbers[_i] = arguments[_i];
    }
    return numbers.reduce(function (acc, curr) { return acc + curr; }, 0);
}
var total = sumAll(1, 2, 3, 4, 5);
console.log("The total is: ".concat(total));
