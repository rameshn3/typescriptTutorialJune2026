import { BankAccount } from "./BankAccount";

export class SavingsAccount extends BankAccount {
    interestRate: number;

    constructor(accountNumber: number, accountHolderName: string, balance: number, interestRate: number) {
        super(accountNumber, accountHolderName, balance);
        this.interestRate = interestRate;
    }   

    calculateInterest(): number {
        let interest = this.balance * this.interestRate/100;
        this.balance += interest; // Add interest to balance
        return interest;
    }

    showBalance(): void {
        console.log(`Current balance with interest: ${this.balance}`);
    }
}