let count:number = 1;
while(count <= 5){
    console.log(count);
    count++;
}
console.log("**************end of While********")
//do while
let num1:number = 1;
do{
    console.log(num1);
    num1++;
}while(num1 <= 5);
console.log("**************end of Do While********")
//for loop
for(let i:number = 1; i <= 5; i++){
    console.log(i);
}
console.log("**************end of For********")
console.log("reverse order");
for(let i:number = 5; i >= 1; i--){
    console.log(i);
}

//for of loop
let numbers:number[] = [10, 20, 30, 40, 50];
for(let num of numbers){
    console.log(num);
}
console.log("**************end of for of loop********")

//indexed for loop
let fruits:string[] = ["Apple", "Banana", "Cherry"];
for(let i:number = 0; i < fruits.length; i++){
   console.log(`Index: ${i}, Fruit: ${fruits[i]}`);
   console.log("****************************");
  console.log(fruits[i]);
}
console.log("*************array End for of loop********")

//for in loop
let person = {
    name: "Alice",
    age: 30,
    city: "New York"
};
for(let key in person){
    console.log(`${key}: ${person[key as keyof typeof person]}`);
} 
console.log("**************Start of break********")

//break
for(let i:number = 1; i <= 10; i++){
    if(i === 5){
        break; // Exit the loop when i is 5
    }
    console.log(i);
}
console.log("**************end of break********") 
//continue
for(let i:number = 1; i <= 10; i++){
    if(i % 2 === 0){
        continue; // Skip even numbers
    }
    console.log(i);
}
//keyof typeof 
