// ### 👶 Beginner Level Questions

// *(Focus: Getting comfortable with functions, variables, and operators)*

// #### 1. The Temperature Converter
// * **Task:** Write a function `fToC(fahrenheit)` that takes a temperature in Fahrenheit and returns the equivalent temperature in Celsius.
// * **Concepts Used:** Function, Variables, Operators (`-`, `*`, `/`)
// * **The Formula:** `(F - 32) * 5/9 = C`
// * **Bonus Challenge:** Write a second function `cToF(celsius)` that does the reverse.

// #### 2. The "Can I Vote?" Checker
// * **Task:** Write a function `canVote(age)` that takes a number (age) and returns `true` if the age is 18 or older, and `false` if it's not.
// * **Concepts Used:** Function, Operators (`>=`), `if/else` statement
// * **Bonus Challenge:** Make the function return a string: `"You can vote"` or `"You are not old enough to vote"`.

// #### 3. Sum of Two Numbers
// * **Task:** Write a function `sum(num1, num2)` that takes two numbers as arguments and returns their sum.
// * **Concepts Used:** Function, Variables, Operator (`+`)
// * **Bonus Challenge:** Write a function `calculate(num1, num2, operator)` that takes two numbers and a string (`'+'`, `'-'`, `'*'`, or `'/'`) and performs the correct operation.

// ---

// ### 🧑‍💻 Intermediate Level Questions

// *(Focus: Using loops and more complex logic inside functions)*

// #### 4. The String Repeater
// * **Task:** Write a function `repeatString(text, count)` that takes a string and a number, and returns the string repeated that many times. (e.g., `repeatString("Hi", 3)` should return `"HiHiHi"`).
// * **Concepts Used:** Function, `for` loop, String concatenation (`+` or `+=`)
// * **Bonus Challenge:** If the `count` is negative, return an empty string `""`.

// #### 5. FizzBuzz
// * **Task:** This is a classic! Write a function that loops from 1 to 100.
//     * For numbers divisible by 3, `console.log("Fizz")`.
//     * For numbers divisible by 5, `console.log("Buzz")`.
//     * For numbers divisible by BOTH 3 and 5, `console.log("FizzBuzz")`.
//     * For all other numbers, `console.log(number)`.
// * **Concepts Used:** `for` loop, Modulo operator (`%`), `if/else if/else` statements
// * **Bonus Challenge:** Make this a function `fizzBuzzUntil(limit)` that lets you pass in the number to loop up to (instead of just 100).

// #### 6. The Vowel Counter
// * **Task:** Write a function `countVowels(str)` that takes a string and returns the number of vowels (a, e, i, o, u) it contains.
// * **Concepts Used:** Function, `for` loop, `if` statement, String methods (like `.toLowerCase()`), Logical operators (`||`)
// * **Bonus Challenge:** Also count "y" as a vowel.

// ---

// ### 🚀 Advanced Level Questions

// *(Focus: Combining all concepts to solve a harder logic puzzle)*

// #### 7. Reverse a String
// * **Task:** Write a function `reverseString(str)` that takes a string and returns a new string with all the characters in reverse order (e.g., `"hello"` becomes `"olleh"`).
// * **Concepts Used:** Function, `for` loop (hint: loop backward!), String indexing (`str[i]`), String concatenation
// * **Bonus Challenge:** Do *not* use any built-in `reverse()` methods.

// #### 8. The Prime Number Checker
// * **Task:** Write a function `isPrime(num)` that takes a number and returns `true` if it's a prime number (only divisible by 1 and itself), and `false` if it's not.
// * **Concepts Used:** Function, `for` loop, Modulo operator (`%`), `if/else` statements, Logic (e.g., numbers less than 2 are not prime)
// * **Bonus Challenge:** Optimize your loop. (Hint: you only need to check for divisors up to the square root of the number).

// ### 👶 Beginner Level Questions

// #### 1. The Temperature Converter
// * **Task:** Write a function `fToC(fahrenheit)` that takes a temperature in Fahrenheit and returns the equivalent temperature in Celsius.
// * **Concepts Used:** Function, Variables, Operators (`-`, `*`, `/`)
// * **The Formula:** `(F - 32) * 5/9 = C`
// * **Bonus Challenge:** Write a second function `cToF(celsius)` that does the reverse.

// converts far to cel
function fToC(fahrenheit) {
  if (String(fahrenheit).trim() === '' || fahrenheit === undefined) return `this field can't remain empty.`;
  fahrenheit = Number(fahrenheit);
  if (isNaN(fahrenheit)) return 'Please enter a number';
  return ((fahrenheit - 32) * 5) / 9;
}

// converts cel to far
function cToF(cel) {
  if (String(cel).trim() === '' || cel === undefined) return `this field can't remain empty.`;
  cel = Number(cel);
  if (isNaN(cel)) return 'Please enter a number';
  return (cel * 9) / 5 + 32;
}

let far = fToC(32);
let cel = cToF(0);

console.log(far);
console.log(cel);

// #### 2. The "Can I Vote?" Checker
// * **Task:** Write a function `canVote(age)` that takes a number (age) and returns `true` if the age is 18 or older, and `false` if it's not.
// * **Concepts Used:** Function, Operators (`>=`), `if/else` statement
// * **Bonus Challenge:** Make the function return a string: `"You can vote"` or `"You are not old enough to vote"`.

function canVote(age) {
  if (age === undefined || String(age).trim() === '') {
    return `Age field can'tremain empty, please enter your age`;
  }
  age = Number(age);
  if (isNaN(age)) return 'Please enter your age';

  return age <= 0 || age > 120
    ? `Please enter a realstic age`
    : age >= 18
    ? `You can vote`
    : `You are not old enough to vote`;
}
let result = canVote(20);
console.log(result);

// #### 3. Sum of Two Numbers
// * **Task:** Write a function `sum(num1, num2)` that takes two numbers as arguments and returns their sum.
// * **Concepts Used:** Function, Variables, Operator (`+`)
// * **Bonus Challenge:** Write a function `calculate(num1, num2, operator)` that takes two numbers and a string (`'+'`, `'-'`, `'*'`, or `'/'`) and performs the correct operation.

function calculator(num1, num2, operator) {
  if (num1 === undefined || num2 === undefined || String(num1).trim() === '' || String(num2).trim() === '') {
    return `Both value required`;
  }
  [num1, num2] = [Number(num1), Number(num2)];
  if (isNaN(num1) || isNaN(num2)) {
    return `Please enter numbers as your input`;
  }
  return `Both values are required.`;

  return operator === '+'
    ? num1 + num2
    : operator === '*'
    ? num1 * num2
    : operator === '-'
    ? num1 - num2
    : operator === '/'
    ? num1 / num2
    : `Please enter a valid operator`;
}

let cal = calculator('20', '350', '+');
console.log(typeof cal);
console.log(cal);

// #### 4. The String Repeater
// * **Task:** Write a function `repeatString(text, count)` that takes a string and a number, and returns the string repeated that many times. (e.g., `repeatString("Hi", 3)` should return `"HiHiHi"`).
// * **Concepts Used:** Function, `for` loop, String concatenation (`+` or `+=`)
// * **Bonus Challenge:** If the `count` is negative, return an empty string `""`.

function repeatString(text, count) {
  let stringCount = '';
  text = String(text).trim();
  count = Number(count);
  if (isNaN(count)) return `Wrong Input`;
  if (count < 0) return '';
  for (let i = 0; i < count; i++) {
    stringCount += text;
  }
  return stringCount;
}
let res = repeatString('           hello     ', 2);
console.log(res);

// #### 5. FizzBuzz
// * **Task:** This is a classic! Write a function that loops from 1 to 100.
//     * For numbers divisible by 3, `console.log("Fizz")`.
//     * For numbers divisible by 5, `console.log("Buzz")`.
//     * For numbers divisible by BOTH 3 and 5, `console.log("FizzBuzz")`.
//     * For all other numbers, `console.log(number)`.
// * **Concepts Used:** `for` loop, Modulo operator (`%`), `if/else if/else` statements
// * **Bonus Challenge:** Make this a function `fizzBuzzUntil(limit)` that lets you pass in the number to loop up to (instead of just 100).

function fizzBuzz(limit) {
  limit = Number(limit);
  if (isNaN(limit)) return `Wrong input`;

  for (let i = 1; i <= limit; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      console.log('FizzBuzz');
    } else if (i % 5 === 0) {
      console.log(`Buzz`);
    } else if (i % 3 === 0) {
      console.log('Fizz');
    } else {
      console.log(i);
    }
  }
}
fizzBuzz(20);

// #### 6. The Vowel Counter
// * **Task:** Write a function `countVowels(str)` that takes a string and returns the number of vowels (a, e, i, o, u) it contains.
// * **Concepts Used:** Function, `for` loop, `if` statement, String methods (like `.toLowerCase()`), Logical operators (`||`)
// * **Bonus Challenge:** Also count "y" as a vowel.

function countVowels(str) {
  str = String(str).trim().toLocaleLowerCase();
  let count = 0;
  for (let i = 0; i < str.length; i++) {
    if (str[i] === 'a' || str[i] === 'e' || str[i] === 'i' || str[i] === 'o' || str[i] === 'u') {
      console.log(str[i]);
      count++;
    }
  }
  return count;
}
let vowelCount = countVowels('KOUSHIK CHOWDHURY');
console.log(vowelCount);

// #### 7. Reverse a String
// * **Task:** Write a function `reverseString(str)` that takes a string and returns a new string with all the characters in reverse order (e.g., `"hello"` becomes `"olleh"`).
// * **Concepts Used:** Function, `for` loop (hint: loop backward!), String indexing (`str[i]`), String concatenation
// * **Bonus Challenge:** Do *not* use any built-in `reverse()` methods.

function reverseString(str) {
  let reverseStr = '';
  str = String(str).trim();
  if (str.trim() === '') return `Empty string`;
  for (let i = 0; i < str.length; i++) {
    reverseStr += str[str.length - i - 1];
  }
  return reverseStr;
}

let reverseStr = reverseString('koushik');
console.log(reverseStr);

// #### 8. The Prime Number Checker
// * **Task:** Write a function `isPrime(num)` that takes a number and returns `true` if it's a prime number (only divisible by 1 and itself), and `false` if it's not.
// * **Concepts Used:** Function, `for` loop, Modulo operator (`%`), `if/else` statements, Logic (e.g., numbers less than 2 are not prime)
// * **Bonus Challenge:** Optimize your loop. (Hint: you only need to check for divisors up to the square root of the number).

function isPrime(num) {
  if (num === '') return `Wrong input`;
  num = Number(num);
  if (isNaN(num)) return `Wrong input`;
  if (num < 0) return `Negetive number cannot be prime`;
  if (num === 0 || num === 1) return `0 or 1 is not prime number`;

  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
      console.log(`${num} % ${i}`);
      return false;
    }
  }
  return true;
}
let primeCheck = isPrime(4);
console.log(primeCheck);
