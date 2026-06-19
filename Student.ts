class Student{
name: string;
age: number

//constructor
constructor(name: string, age: number){
this.name = name; 
this.age = age;
}

displayDetails(): void{
    console.log(`Name: ${this.name}, Age: ${this.age}`);
}
}

const s1 = new Student("Alice", 20);
const s2 = new Student("Bob", 22);

s1.displayDetails();
s2.displayDetails();