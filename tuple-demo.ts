//tuple use
let student1: [number, string, boolean] = [1, "Alice", true];
let student2: [number, string, boolean] = [2, "Bob", false];

console.log(student1);
console.log(student2);

// Accessing tuple elements
console.log(student1[0]); // Output: 1
console.log(student1[1]); // Output: "Alice"
console.log(student1[2]); // Output: true
//pop   
student1.pop();
console.log(student1); // Output: [1, "Alice"]
//shift
student1.shift();
console.log(student1); // Output: ["Alice"]
//update th tuple
student1[0] = 20;
console.log(student1); // Output: [20]

