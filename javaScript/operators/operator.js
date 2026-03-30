// Arithmatic operators

let a = 50;
let b = 10;

console.log(`-----------------Arithmatic Operator----------------\n`);
console.log(`Addition : ${a} + ${b} = ${a + b}`);
console.log(`Substraction : ${a} - ${b} = ${a - b}`);
console.log(`Multiplication : ${a} x ${b} = ${a * b}`);
console.log(`Division : ${a} / ${b} = ${a / b}`);
console.log(`Modulus : ${a} % ${b} = ${a % b}`);
console.log(`Exponent : ${a} ^ ${b} = ${a ** b}`);

console.log(`\nAddition operator \n`);
// Number addition
let sum = 10 + 5;
console.log(`10 + 5 = ${sum}`);

// Multiple additions
let total = 10 + 20 + 30;
console.log(`10 + 20 + 30 = ${total}`);

console.log(`\nAddition with type coercion\n`);
console.log(`10 + true = ${10 + true}`);
console.log(`10 + false = ${10 + false}`);
console.log(`10 + null = ${10 + null}`);
console.log(`10 + undefined = ${10 + undefined}`);

// Addition with variables
let price = 100;
let tax = 20;
let finalPrice = price + tax;
console.log(`${price} + ${tax} = ${finalPrice}`);

console.log(`\nSubstraction operator\n`);
let diffrence = 20 - 7;
console.log(`20 - 7 = ${diffrence}`);

console.log(`\nSubstraction with type coercion\n`);
console.log(`20 - "5" = ${20 - '5'}`);
console.log(`20 - true = ${20 - true}`);
console.log(`20 - false = ${20 - false}`);
console.log(`20 - null = ${20 - null}`);
console.log(`20 - "hello" = ${20 - 'hello'}`);
