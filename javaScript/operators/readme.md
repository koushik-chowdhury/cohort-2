# JavaScript Operators – Notes & Learning

## Table of Contents

- [What are Operators](#what-are-operators)
- [Arithmetic Operators](#arithmetic-operators)
- [Operator Precedence](#operator-precedence)
- [Increment & Decrement Operators](#increment--decrement-operators)
- [Assignment Operators](#assignment-operators)
- [String Operators](#string-operators)

## What are Operators?

**`Operators are symbols that perform operations on operands:`**

- Tell JavaScript what to do with values
- Used in expressions to produce new values
- Work with one or more operands

## Arithmetic Operators

Arithmetic operators are used to perform mathematical operations on numbers.

### List of Arithmetic Operators:

| Operator | Name           | Description                 | Example       |
| -------- | -------------- | --------------------------- | ------------- |
| `+`      | Addition       | Adds two numbers            | `5 + 3 = 8`   |
| `-`      | Subtraction    | Subtracts second from first | `5 - 3 = 2`   |
| `*`      | Multiplication | Multiplies two numbers      | `5 * 3 = 15`  |
| `/`      | Division       | Divides first by second     | `6 / 3 = 2`   |
| `%`      | Modulus        | Returns remainder           | `5 % 2 = 1`   |
| `**`     | Exponentiation | Raises to power             | `5 ** 2 = 25` |

### Code Example & Output

```javascript
// Arithmetic operators
let a = 50;
let b = 10;

console.log(`-----------------Arithmetic Operator----------------`);
console.log(`Addition : ${a} + ${b} = ${a + b}`);
console.log(`Subtraction : ${a} - ${b} = ${a - b}`);
console.log(`Multiplication : ${a} x ${b} = ${a * b}`);
console.log(`Division : ${a} / ${b} = ${a / b}`);
console.log(`Modulus : ${a} % ${b} = ${a % b}`);
console.log(`Exponent : ${a} ^ ${b} = ${a ** b}`);
```

```bash
-----------------Arithmetic Operator----------------
Addition : 50 + 10 = 60
Subtraction : 50 - 10 = 40
Multiplication : 50 x 10 = 500
Division : 50 / 10 = 5
Modulus : 50 % 10 = 0
Exponent : 50 ^ 10 = 97656250000000000
```

## 1. Addition Operator (`+`)

The addition operator adds two numbers or concatenates strings.

```javascript
// Number addition
let sum = 10 + 5;
console.log(sum);

// Multiple additions
let total = 10 + 20 + 30;
console.log(total);

// Addition with type coercion
console.log(10 + true);
console.log(10 + false);
console.log(10 + null);
console.log(10 + undefined);

// Addition with variables
let price = 100;
let tax = 20;
let finalPrice = price + tax;
console.log(finalPrice);
```

**Output**

```bash
15
60
11
10
10
NaN
120
```

## 1. Substraction Operator (`-`)

The substraction operator substracts one number from another

**Code**

```javascript
// Basice substraction

let diffrence = 20 - 7;
console.log(`20 - 7 = ${diffrence}`);

console.log(`\nSubstraction with type coercion\n`);
console.log(`20 - "5" = ${20 - '5'}`);
console.log(`20 - true = ${20 - true}`);
console.log(`20 - false = ${20 - false}`);
console.log(`20 - false = ${20 - false}`);
console.log(`20 - "hello" = ${20 - 'hello'}`);
```

## Interview

1. What is the difference between:

==

===

In your answer include:

What each operator does

What is type coercion

One example where == gives true but === gives false

Which one should be used in real code and why

**ans**
Better version (what you should say in interview):

== is loose equality. It performs implicit type coercion, meaning JavaScript converts both operands to a common type before comparing values.

=== is strict equality. It compares both value and type without any type conversion.

For example, 5 == "5" returns true because the string is converted to a number, but 5 === "5" returns false because the types are different.

In real-world code, we should use === to avoid unexpected bugs caused by implicit type coercion.

---

## 2. What will be the output and WHY:

true || false && false

Explain step-by-step using:

operator precedence

evaluation order

## 3. what will this return and why

"" || "Guest"

Explain using:

truthy/falsy

short-circuit behavior

**ans**
The empty string is a falsy value. The OR (||) operator returns the first truthy operand. Since the first value is falsy, JavaScript evaluates the second operand and returns "Guest".