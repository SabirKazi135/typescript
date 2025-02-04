class Employee {
  employeeName: string;
  constructor(name: string) {
    this.employeeName = name;
  }

  greet() {
    console.log(`Good Morning ${this.employeeName}`);
  }
}

let emp1 = new Employee("vishwas");
console.log(emp1.employeeName);
emp1.greet();
