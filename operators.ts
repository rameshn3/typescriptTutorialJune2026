//arithmaetic operators
let x:number = 10;
let y:number = 5;

let sum123:number = x + y;
console.log(`Sum of ${x} and ${y} is ${sum123}`);
let difference:number = x - y;
console.log(`Difference of ${x} and ${y} is ${difference}`);
let mul:number = x * y;
console.log(`Multiplication of ${x} and ${y} is ${mul}`);   
let div:number = x/y;
console.log(`divison of ${x} and ${y} is ${div}`);
let mod:number = x % y;
console.log(`modulus of ${x} and ${y} is ${mod}`);

//increment and decrement operators
let a:number = 10;
console.log(`Value of a before increment: ${a}`);
a++;
console.log(`Value of a after increment: ${a}`);
a--;
console.log(`Value of a after decrement: ${a}`);

//comparison operators
let p:number = 10;
let q:number = 20;
console.log(`Is ${p} equal to ${q}? ${p == q}`);
console.log(`Is ${p} not equal to ${q}? ${p != q}`);
console.log(`Is ${p} greater than ${q}? ${p > q}`);
console.log(`Is ${p} less than ${q}? ${p < q}`);
console.log(`Is ${p} greater than or equal to ${q}? ${p >= q}`);
console.log(`Is ${p} less than or equal to ${q}? ${p <= q}`);

let str1:string = "10";
let str2:number = 10;
console.log(`Is ${str1} equal to ${str2}? ${str1 == str2}`);
console.log(`Is ${str1} strictly equal to ${str2}? ${str1 === str2}`);
//logical operators
let isTrue:boolean = true;
let isFalse:boolean = false;
console.log(`isTrue AND isFalse: ${isTrue && isFalse}`);
console.log(`isTrue OR isFalse: ${isTrue || isFalse}`);
console.log(`NOT isTrue: ${!isTrue}`);
