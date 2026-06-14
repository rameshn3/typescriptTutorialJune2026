let userName:string = "John Doe";
var age:number = 30;
let isEmployed:boolean = true;
console.log("Name:", userName);
console.log("Age:", age);
console.log("Is Employed:", isEmployed);  
console.log(`my variables ${userName},${age},${isEmployed}`);   

const country = "USA";
console.log("Country:", country);
age = 31; // This is allowed since 'age' is declared with 'var'
console.log("Updated Age:", age);
//country = "Canada"; // This will cause an error since 'country' is a constant

//array datatype
let subjects:string[] = ["Math", "Science", "History"];
console.log("Subjects:", subjects);
//access array element
console.log("First Subject:", subjects[4]);
subjects.push("English");
console.log("Updated Subjects:", subjects);

//Object datatype
let student ={
    id:100,
    name:"Alice",
    grade:"A"
};
console.log("Student:", student);
console.log("Student Name:", student.name);
console.log("student age",student.age); //undefined

//any type of datatype
let randomValue:any = "Hello"; 
console.log("Random Value:", randomValue);  
randomValue = 42;
console.log("Random Value:", randomValue);  
randomValue = true;
console.log("Random Value:", randomValue); 

//enum datatype
enum Browser{
    Chrome = "Google Chrome", 
    Firefox = "Mozilla Firefox",
    Safari = "Apple Safari",
    Edge = "Microsoft Edge"
}
let myBrowser:Browser = Browser.Chrome;
console.log("My Browser:", myBrowser);

let firstName: string|null = "John";
firstName = null; // This is allowed since the type includes null
console.log("First Name:", firstName);