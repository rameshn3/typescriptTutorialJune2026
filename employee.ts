export class Employee {
    static companyName: string = "Oracle Corporation";
    empName: string;
    empId: number;

    constructor(empName: string, empId: number) {
        this.empName = empName;
        this.empId = empId;
    }

    displayEmployeeInfo(): void {
        console.log(`Employee Name: ${this.empName}, Employee ID: ${this.empId}, Company: ${Employee.companyName}`);
    }

    //static method
    static sendNotification(): void {
        console.log(`Notification sent to all employees of ${Employee.companyName}`);
    }

}