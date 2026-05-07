
class Employee {

  public name: string;       // anyone can see and change
  private salary: number;    // only this class can see
  protected age: number;     // this class and child class can see
  readonly id: number;       // everyone can see but cannot change

  constructor(name: string, salary: number, age: number, id: number) {
    this.name = name;
    this.salary = salary;
    this.age = age;
    this.id = id;
  }

  // show salary — only way to see private salary from outside
  public showSalary(): void {
    console.log(`${this.name} earns $${this.salary}`);
  }

  // show age — only way to see protected age from outside
  public showAge(): void {
    console.log(`${this.name} is ${this.age} years old`);
  }
}

// Child class — can access protected but NOT private
class Manager extends Employee {

  public showDetails(): void {
    console.log(`Manager name: ${this.name}`);  // public   
    console.log(`Manager age: ${this.age}`);    // protected 
    // this.salary  ERROR — private, child cannot access
  }
}

// --- Run ---
const emp = new Employee("Alice", 5000, 30, 101);

console.log("=== public ===");
console.log(emp.name);       //  works fine
emp.name = "Alice Smith";    //  can change public
console.log(emp.name);

console.log("\n=== private ===");
emp.showSalary();            //  only via public method
// console.log(emp.salary)  //  ERROR — cannot access private directly

console.log("\n=== protected ===");
emp.showAge();               //  only via public method
const mgr = new Manager("Bob", 9000, 35, 102);
mgr.showDetails();           // child class can access protected

console.log("\n=== readonly ===");
console.log(`ID: ${emp.id}`);  // can read
// emp.id = 999              // ERROR — cannot change readonly