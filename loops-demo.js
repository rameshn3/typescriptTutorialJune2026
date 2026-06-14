var count = 1;
while (count <= 5) {
    console.log(count);
    count++;
}
console.log("**************end of While********");
//do while
var num1 = 1;
do {
    console.log(num1);
    num1++;
} while (num1 <= 5);
console.log("**************end of Do While********");
//for loop
for (var i = 1; i <= 5; i++) {
    console.log(i);
}
console.log("**************end of For********");
console.log("reverse order");
for (var i = 5; i >= 1; i--) {
    console.log(i);
}
//for of loop
var numbers = [10, 20, 30, 40, 50];
for (var _i = 0, numbers_1 = numbers; _i < numbers_1.length; _i++) {
    var num = numbers_1[_i];
    console.log(num);
}
console.log("**************end of for of loop********");
//indexed for loop
var fruits = ["Apple", "Banana", "Cherry"];
for (var i = 0; i < fruits.length; i++) {
    console.log("Index: ".concat(i, ", Fruit: ").concat(fruits[i]));
    console.log("****************************");
    console.log(fruits[i]);
}
console.log("*************array End for of loop********");
//for in loop
var person = {
    name: "Alice",
    age: 30,
    city: "New York"
};
for (var key in person) {
    console.log("".concat(key, ": ").concat(person[key]));
}
console.log("**************Start of break********");
//break
for (var i = 1; i <= 10; i++) {
    if (i === 5) {
        break; // Exit the loop when i is 5
    }
    console.log(i);
}
console.log("**************end of break********");
//continue
for (var i = 1; i <= 10; i++) {
    if (i % 2 === 0) {
        continue; // Skip even numbers
    }
    console.log(i);
}
//keyof typeof 
