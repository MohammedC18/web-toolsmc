import * as readline from 'readline';

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

type Operator = '+' | '-' | '*' | '/';

function calculate(a: number, b: number, op: Operator): number {
  switch (op) {
    case '+': return a + b;
    case '-': return a - b;
    case '*': return a * b;
    case '/':
      if (b === 0) throw new Error("Division by zero");
      return a / b;
    default:
      const _: never = op;
      throw new Error(`Unknown operator: ${_}`);
  }
}

rl.question("Enter first number: ", (aStr) => {
  rl.question("Enter operator (+, -, *, /): ", (op) => {
    rl.question("Enter second number: ", (bStr) => {
      const a = parseFloat(aStr);
      const b = parseFloat(bStr);
      try {
        const result = calculate(a, b, op as Operator);
        console.log(`Result: ${a} ${op} ${b} = ${result}`);
      } catch (e) {
        console.error("Error:", (e as Error).message);
      }
      rl.close();
    });
  });
});