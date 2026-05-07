// Interface with all common TypeScript data types

interface Employee {
    // Number
    id: number;

    // String
    name: string;

    // Boolean
    isWorking: boolean;

    // Array
    skills: string[];

    // Tuple
    address: [string, number];

    // Enum
    role: Role;

    // Any
    extraData: any;

    // Union Type
    salary: number | string;

    // Function
    displayInfo: () => void;

    // Optional Property
    email?: string;

    // Readonly Property
    readonly company: string;

    // Object Type
    project: {
        title: string;
        duration: number;
    };
}

// Enum
enum Role {
    Manager,
    Developer,
    Tester
}

// Implementing Interface
let emp1: Employee = {
    id: 101,
    name: "Ahmed",
    isWorking: true,
    skills: ["TypeScript", "JavaScript"],
    address: ["Mumbai", 400001],
    role: Role.Developer,
    extraData: "Additional Info",
    salary: 50000,
    company: "Tech Solutions",
    project: {
        title: "Library Management",
        duration: 6
    },

    displayInfo: function () {
        console.log("Employee Name:", this.name);
    }
};

// Output
console.log(emp1);
emp1.displayInfo();