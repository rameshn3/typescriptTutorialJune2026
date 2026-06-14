import { BankAccount } from "./BankAccount";

export class CurrentAccount extends BankAccount {
    overdraftLimit: number;

    constructor(accountNumber: number, accountHolderName: string, balance: number, overdraftLimit: number) {
        super(accountNumber, accountHolderName, balance);
        this.overdraftLimit = overdraftLimit;
    }

    //method overriding
    withdraw(amount: number): void {
        if (amount > 0) {
            if (amount <= this.balance + this.overdraftLimit) {     
                this.balance -= amount;
                console.log(`Withdrew ${amount}. New balance: ${this.balance}`);
            } else {
                console.log("Exceeded overdraft limit.");
            }
        } else {
            console.log("Withdrawal amount must be positive.");
        }
    }

    showBalance(): void {
        console.log(`Current balance: ${this.balance}, Overdraft limit: ${this.overdraftLimit}`);
    }
}