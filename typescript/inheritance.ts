// ALL TYPES OF INHERITANCE — Employee Example

// --- Base Class ---
class Employee {
  name: string;
  salary: number;
  constructor(name: string, salary: number) {
    this.name = name;
    this.salary = salary;
  }
  work(): void { console.log(`${this.name} is working`); }
  showSalary(): void { console.log(`${this.name}'s salary: $${this.salary}`); }
}

// 1. SINGLE — Manager extends Employee
class Manager extends Employee {
  manage(): void { console.log(`${this.name} is managing the team`); }
}

// 2. MULTILEVEL — Director → Manager → Employee
class Director extends Manager {
  direct(): void { console.log(`${this.name} is directing the company`); }
}

// 3. HIERARCHICAL — Developer & Designer both extend Employee
class Developer extends Employee {
  code(): void { console.log(`${this.name} is writing code`); }
}
class Designer extends Employee {
  design(): void { console.log(`${this.name} is designing UI`); }
}

// 4. MULTIPLE — via interfaces
interface Trainable { train(): void; }
interface Reviewable { review(): void; }

class TeamLead extends Employee implements Trainable, Reviewable {
  train(): void  { console.log(`${this.name} is training juniors`); }
  review(): void { console.log(`${this.name} is reviewing code`); }
}

// 5. HYBRID — class extend + interface combined
interface Approvable { approve(): void; }

class SeniorManager extends Manager implements Approvable {
  approve(): void { console.log(`${this.name} is approving the budget`); }
}

// --- Run ---
console.log("=== 1. Single ===");
const mgr = new Manager("Alice", 8000);
mgr.work(); mgr.manage(); mgr.showSalary();

console.log("\n=== 2. Multilevel ===");
const dir = new Director("Bob", 15000);
dir.work(); dir.manage(); dir.direct(); dir.showSalary();

console.log("\n=== 3. Hierarchical ===");
const dev = new Developer("Charlie", 7000);
dev.work(); dev.code();
const des = new Designer("Diana", 6500);
des.work(); des.design();

console.log("\n=== 4. Multiple ===");
const lead = new TeamLead("Eve", 9000);
lead.work(); lead.train(); lead.review();

console.log("\n=== 5. Hybrid ===");
const sm = new SeniorManager("Frank", 12000);
sm.work(); sm.manage(); sm.approve(); sm.showSalary();