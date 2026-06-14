var s = "Hello, World!";
console.log(s);
//charAt(index)
console.log("Character at index 7:", s.charAt(7));
//concat(str1, str2, ...)   
var greeting = "Hello";
var n = "Alice";
var message = greeting.concat(", ", n, "!");
console.log("Concatenated Message:", message);
//includes(searchString, position)
var isIncluded = s.includes("World");
console.log("Does the string include 'World'? ", isIncluded);
//indexOf(searchValue, fromIndex)
console.log("Index of 'World':", s.indexOf("World"));
//length
console.log("Length of the string:", s.length);
//replace(searchValue, newValue)
var newString = s.replace("World", "TypeScript");
console.log("Replaced String:", newString);
//toUpperCase()
console.log("Uppercase String:", s.toUpperCase());
//toLowerCase()
console.log("Lowercase String:", s.toLowerCase());
console.log("Original String:", s);
//trim()
var stringWithSpaces = "   Hello, TypeScript!   ";
console.log("Original String with spaces:", stringWithSpaces);
console.log("Trimmed String:", stringWithSpaces.trim());
//charCodeAt(index)
console.log("Character code at index 0:", s.charCodeAt(0));
//split(separator, limit)
var csv = "John,Doe,30,Engineer";
var parts = csv.split(",");
console.log("Split parts:", parts);
//substring(startIndex, endIndex)
console.log("Substring from index 0 to 5:", s.substring(0, 5));
//toString()
var num = 123;
var numString = num.toString();
console.log("Number as string:", numString);
//valueOf()
var strObj = new String("Hello");
console.log("String object value:", strObj.valueOf());
var numObj = new Number(42);
console.log("Number object value:", numObj.valueOf());
//startsWith(searchString, position)
var startsWithHello = s.startsWith("Hello");
console.log("Does the string start with 'Hello'? ", startsWithHello);
//endsWith(searchString, length) 
var endsWithWorld = s.endsWith("World!");
console.log("Does the string end with 'World!'? ", endsWithWorld);
//repeat(count)
var repeatedString = s.repeat(3);
console.log("Repeated String:", repeatedString);
//padStart(targetLength, padString)
var paddedStart = s.padStart(20, "*");
console.log("Padded Start String:", paddedStart);
//padEnd(targetLength, padString)
var paddedEnd = s.padEnd(20, "*");
console.log("Padded End String:", paddedEnd);
//toLocaleLowerCase()
console.log("Locale Lowercase String:", s.toLocaleLowerCase());
//toLocaleUpperCase()
console.log("Locale Uppercase String:", s.toLocaleUpperCase());
//trimStart()
var stringWithLeadingSpaces = "   Hello, TypeScript!";
console.log("Original String with leading spaces:", stringWithLeadingSpaces);
console.log("Trimmed Start String:", stringWithLeadingSpaces.trimStart());
//trimEnd()
var stringWithTrailingSpaces = "Hello, TypeScript!   ";
console.log("Original String with trailing spaces:", stringWithTrailingSpaces);
console.log("Trimmed End String:", stringWithTrailingSpaces.trimEnd());
//slice(startIndex, endIndex)
console.log("Slice from index 0 to 5:", s.slice(0, 5));
var age = 30;
var message1 = "I am ".concat(age, " years old.");
console.log(message1);
var message2 = "Next year, I will be ".concat(age + 1, " years old.");
console.log(message2);
var message3 = "In 5 years, I will be ${age + 5} years old.";
console.log(message3);
