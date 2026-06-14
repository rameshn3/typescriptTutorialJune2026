import { IBankAccount } from "./IBankAccount";

export class BankAccount implements IBankAccount {
    accountNumber: number = 0;
    accountHolderName: string = "";
    balance: number = 0;

    constructor(accountNumber: number, accountHolderName: string, balance: number) {
        this.accountNumber = accountNumber;
        this.accountHolderName = accountHolderName;
        this.balance = balance;
    }

    deposit(amount: number): void {
        if (amount > 0) {
            this.balance += amount;
            console.log(`Deposited ${amount}. New balance: ${this.balance}`);
        } else {
            console.log("Deposit amount must be positive.");
        }
    }

    withdraw(amount: number): void {
        if (amount > 0) {
            if (amount <= this.balance) {
                this.balance -= amount;
                console.log(`Withdrew ${amount}. New balance: ${this.balance}`);
            } else {
                console.log("Insufficient balance.");
            }
        } else {
            console.log("Withdrawal amount must be positive.");
        }   
    }

    showBalance(): void {
        console.log(`Current balance: ${this.balance}`);
    }   
}