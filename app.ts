import { SavingsAccount } from "./SavingsAccount";
import { CurrentAccount } from "./CurrentAccount";
import { companyName,getCompanyInfo } from "./user";
import userType from "./user";
import { Employee } from "./employee";


console.log(`Company Name: ${companyName}`);
const user = new userType("john_doe");
user.displayUserInfo();

console.log(getCompanyInfo());

// Create a savings account
const savings = new SavingsAccount(12345, "Alice", 1000, 5);
console.log("Savings Account:");
savings.showBalance();
const interest = savings.calculateInterest();
console.log(`Interest earned: ${interest}`);
savings.showBalance();
savings.deposit(500);
savings.withdraw(200);
savings.showBalance();

console.log("---------------------------------");
console.log("\nCurrent Account:");

const current = new CurrentAccount(67890, "Bob", 500, 200);
current.showBalance();
current.deposit(300);
current.withdraw(600);
current.showBalance();
current.withdraw(200);
current.showBalance();  


//demo on static variable and static method

const emp1 = new Employee("John Smith", 101);
emp1.displayEmployeeInfo(); //calling process for non static method
Employee.sendNotification(); //calling process for static method
console.log(`Company Name from static variable: ${Employee.companyName}`); //accessing static variable