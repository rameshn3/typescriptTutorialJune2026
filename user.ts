export const companyName: string = "Tech Solutions Inc.";

export function getCompanyInfo(): string {
    return `Company Name: ${companyName}`;
}

//default export class

export default class User {
    username: string

    constructor(username: string) {
        this.username = username;
    }

    displayUserInfo(): void {
        console.log(`Username: ${this.username}`);
    }
}