import { SavingsAccount } from "./SavingsAccount";
import { CurrentAccount } from "./CurrentAccount";

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
