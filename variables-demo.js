var userName = "John Doe";
var age = 30;
var isEmployed = true;
console.log("Name:", userName);
console.log("Age:", age);
console.log("Is Employed:", isEmployed);
var country = "USA";
console.log("Country:", country);
age = 31; // This is allowed since 'age' is declared with 'let'
console.log("Updated Age:", age);
//array datatype
var subjects = ["Math", "Science", "History"];
console.log("Subjects:", subjects);
//access array element
console.log("First Subject:", subjects[4]);
subjects.push("English");
console.log("Updated Subjects:", subjects);
//Object datatype
var student = {
    id: 100,
    name: "Alice",
    grade: "A"
};
console.log("Student:", student);
console.log("Student Name:", student.name);
//any type of datatype
var randomValue = "Hello";
console.log("Random Value:", randomValue);
randomValue = 42;
console.log("Random Value:", randomValue);
randomValue = true;
console.log("Random Value:", randomValue);
//enum datatype
var Browser;
(function (Browser) {
    Browser["Chrome"] = "Google Chrome";
    Browser["Firefox"] = "Mozilla Firefox";
    Browser["Safari"] = "Apple Safari";
    Browser["Edge"] = "Microsoft Edge";
})(Browser || (Browser = {}));
var myBrowser = Browser.Chrome;
console.log("My Browser:", myBrowser);
