let s:string = "Hello, World!";
console.log(s);
//charAt(index)
console.log("Character at index 7:", s.charAt(7));
//concat(str1, str2, ...)   
let greeting:string = "Hello";
let n:string = "Alice";
let message:string = greeting.concat(", ", n, "!");
console.log("Concatenated Message:", message);
//includes(searchString, position)
let isIncluded:boolean = s.includes("World");
console.log("Does the string include 'World'? ",isIncluded);
//indexOf(searchValue, fromIndex)
console.log("Index of 'World':", s.indexOf("World"));
//length
console.log("Length of the string:", s.length);
//replace(searchValue, newValue)
let newString:string = s.replace("World", "TypeScript");
console.log("Replaced String:", newString);
//toUpperCase()
console.log("Uppercase String:", s.toUpperCase());
//toLowerCase()
console.log("Lowercase String:", s.toLowerCase());
console.log("Original String:", s);
//trim()
let stringWithSpaces:string = "   Hello, TypeScript!   ";
console.log("Original String with spaces:", stringWithSpaces);
console.log("Trimmed String:", stringWithSpaces.trim());
//charCodeAt(index)
console.log("Character code at index 0:", s.charCodeAt(0));
//split(separator, limit)
let csv:string = "John,Doe,30,Engineer";
let parts:string[] = csv.split(",");
console.log("Split parts:", parts);
//substring(startIndex, endIndex)
console.log("Substring from index 0 to 5:", s.substring(0, 5));
//toString()
let num:number = 123;
let numString:string = num.toString();
console.log("Number as string:", numString);
//valueOf()
let strObj:String = new String("Hello");
console.log("String object value:", strObj.valueOf());  
let numObj:Number = new Number(42);
console.log("Number object value:", numObj.valueOf());
//startsWith(searchString, position)
let startsWithHello:boolean = s.startsWith("Hello");
console.log("Does the string start with 'Hello'? ",startsWithHello);
//endsWith(searchString, length) 
let endsWithWorld:boolean = s.endsWith("World!");   
console.log("Does the string end with 'World!'? ",endsWithWorld);
//repeat(count)
let repeatedString:string = s.repeat(3);
console.log("Repeated String:", repeatedString);
//padStart(targetLength, padString)
let paddedStart:string = s.padStart(20, "*");
console.log("Padded Start String:", paddedStart);
//padEnd(targetLength, padString)
let paddedEnd:string = s.padEnd(20, "*");
console.log("Padded End String:", paddedEnd);
//toLocaleLowerCase()
console.log("Locale Lowercase String:", s.toLocaleLowerCase());
//toLocaleUpperCase()
console.log("Locale Uppercase String:", s.toLocaleUpperCase());
//trimStart()
let stringWithLeadingSpaces:string = "   Hello, TypeScript!";
console.log("Original String with leading spaces:", stringWithLeadingSpaces);
console.log("Trimmed Start String:", stringWithLeadingSpaces.trimStart());
//trimEnd()
let stringWithTrailingSpaces:string = "Hello, TypeScript!   ";
console.log("Original String with trailing spaces:", stringWithTrailingSpaces);
console.log("Trimmed End String:", stringWithTrailingSpaces.trimEnd());
//slice(startIndex, endIndex)
console.log("Slice from index 0 to 5:", s.slice(0, 5));

var age:number = 30;
var message1:string = `I am ${age} years old.`;
console.log(message1);

var message2:string = `Next year, I will be ${age + 1} years old.`;
console.log(message2);

let message3:string = "In 5 years, I will be ${age + 5} years old.";
console.log(message3);
