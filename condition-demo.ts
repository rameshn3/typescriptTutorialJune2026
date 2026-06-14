let n1:number = 10;
if(n1 > 0){
    console.log("The number is positive."); 
}

//if else
let n2:number = -5;
if(n2 > 0){
    console.log("The number is positive.");
}else{
    console.log("The number is not positive.");
}
//nested if else
let score:number = 85;

if (score >= 90) {

console.log("Grade A");

} else if (score >= 80) {

console.log("Grade B");

} else if (score >= 70) {

console.log("Grade C");

} else {

console.log("Fail");

}

//switch case
let day:number = 3;
switch (day) {
    case 1:
        console.log("Monday");
        break;
    case 2: 
        console.log("Tuesday");
        break; 
    case 3: 
        console.log("Wednesday");
        break;  
    case 4:
        console.log("Thursday");
        break;
    case 5:
        console.log("Friday");
        break;
    case 6:
        console.log("Saturday");
        break;
    case 7:
        console.log("Sunday");
        break;
    default:
        console.log("Invalid day");
}
