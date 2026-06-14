export interface IBankAccount {
    accountNumber:number;
    accountHolderName: string;
    balance: number;
    deposit(amount: number): void;
    withdraw(amount: number): void;
}