
// 1. Function without parameter and return type
function showMessage(): void {
    console.log("Hello TypeScript");
}
showMessage();


// 2. Function with parameters
function add(a: number, b: number): number {
    return a + b;
}
console.log(add(10, 20));


// 3. Optional Parameter Function
function student(name: string, age?: number): void {
    console.log(name, age);
}
student("Ali");
student("Ahmed", 21);


// 4. Default Parameter Function
function greet(name: string = "Guest"): void {
    console.log("Welcome", name);
}
greet();
greet("Ayan");


// 5. Rest Parameter Function
function total(...nums: number[]): number {
    let sum = 0;

    for (let n of nums) {
        sum += n;
    }

    return sum;
}
console.log(total(10, 20, 30));


// 6. Anonymous Function
let multiply = function (a: number, b: number): number {
    return a * b;
};
console.log(multiply(5, 4));


// 7. Arrow Function
let square = (n: number): number => {
    return n * n;
};
console.log(square(6));


// 8. Recursive Function
function factorial(n: number): number {
    if (n == 1) {
        return 1;
    }

    return n * factorial(n - 1);
}
console.log(factorial(5));


// 9. Function with Union Type
function display(value: string | number): void {
    console.log(value);
}
display("Hello");
display(100);


// 10. Callback Function
function processUser(name: string, callback: (msg: string) => void): void {
    callback("Welcome " + name);
}

processUser("Zaid", function (msg: string) {
    console.log(msg);
});


// 11. Function Overloading
function info(value: string): void;
function info(value: number): void;

function info(value: any): void {
    console.log(value);
}

info("TypeScript");
info(500);


// 12. Constructor Function using Class
class Person {
    name: string;

    constructor(name: string) {
        this.name = name;
    }

    show(): void {
        console.log(this.name);
    }
}

let p1 = new Person("Rahul");
p1.show();