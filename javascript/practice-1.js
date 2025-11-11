// Level 1 – Pure Beginner Practice
// 1. Print numbers from 1 to 10
// 2. Print only even number from 1 to 20
// 3. Print numbers from 10 to 1
// 4. Print the word "YES" 5 times
// 5. Print even and odd number between 1 to 10
// 6. Ask user for a number and check wether its negetive or positive
// 7. Ask user’s age and check if eligible to vote
// If age >= 18 → “Eligible”, else → “Not eligible”

// 8. Print multiplication table of 5
// Use loop to print 5 × 1 to 5 × 10.

// 9. Count how many numbers between 1 and 15 are greater than 8
// Loop and count conditionally.

// 10. Ask user for password and print access status
// Hardcoded correct password. Compare with user input.

// Level 2 – Slightly Tougher but Logical
// 11. Allow only 3 attempts to enter correct password
// If user gets it right early, stop. If not → “Account locked”

// 12. Ask user for words until they type “stop”. Count how many times they typed “yes”
// Loop until "stop" is typed. Count "yes".

// 13. Print numbers divisible by 7 from 1 to 50
// Use modulo % and loop.

// 14. Sum of all odd numbers from 1 to 30
// Add only odd numbers. Print final sum.

// 15. Keep asking number until user enters an even number
// Use while loop. Stop only if input is even.

// 16. Print numbers between two user inputs
// Input start and end using prompt() → print all between.

// 17. Print only first 3 odd numbers from 1 to 20
// Use loop. Stop with break after 3 odd prints.

// 18. Ask user 5 numbers. Count how many are positive
// Use loop + condition + counter.

// 19. ATM Simulator – Allow 3 withdrawals
// Start with ₹1000 balance. Ask withdrawal amount 3 times.
// If enough balance → deduct
// Else → print “Insufficient balance”

// Level 1

// 1. Print numbers from 1 to 10

for (let i = 1; i <= 10; i++) {
  console.log(i);
}

// 2. Print only even number from 1 to 20

for (let i = 1; i <= 20; i++) {
  if (i % 2 === 0) {
    console.log(i);
  }
}

// // 3. Print numbers from 10 to 1

let num = 10;
for (let i = 1; i <= num; i++) {
  console.log(num - i + 1);
}

// 4. Print the word "YES" 5 times

let word = 'YES';
for (let i = 0; i < 5; i++) {
  console.log(word);
}

// // 5. Print even and odd number between 1 to 10

for (let i = 1; i <= 10; i++) {
  if (i % 2 === 0) {
    console.log(`Even: ${i}`);
  } else {
    console.log(`Odd: ${i}`);
  }
}

// // 6. Ask user for a number and check wether its negetive or positive

num = -1;
if (num > 0) {
  console.log('Positive');
} else if (num === 0) {
  console.log('Neutral');
} else {
  console.log('Negetive');
}

// // 7. Ask user’s age and check if eligible to vote
// // If age >= 18 → “Eligible”, else → “Not eligible”

let age = 21;
age = Number(age);
if (typeof age === 'number' && age >= 18) {
  console.log('Eligible');
} else if (age < 18 && age > 0) {
  console.log('Not Eligible');
} else {
  console.log('You enterd something wrong');
}

// // 8. Print multiplication table of 5
// // Use loop to print 5 × 1 to 5 × 10.
let mul = 5;
for (let i = 1; i <= 10; i++) {
  console.log(`${mul} x ${i} = ${mul * i}`);
}

// 9. Count how many numbers between 1 and 15 are greater than 8
// Loop and count conditionally.

num = 15;
let count = 0;
for (let i = 1; i <= num; i++) {
  if (i > 8) {
    count++;
  }
}
console.log(count);

// 10. Ask user for password and print access status
// Hardcoded correct password. Compare with user input.

let pass = 'kousik chowdhury';
if (pass.trim() === '') {
  console.log('Please Write something');
} else if (pass === 'kousik chowdhury') {
  console.log('Access Granted');
} else {
  console.log('Wrong Password');
}

// Level 2 – Slightly Tougher but Logical
// 11. Allow only 3 attempts to enter correct password
// If user gets it right early, stop. If not → “Account locked”

let correctPassword = 'hello i am kousik';
let attempts = 0;
const maxAttempts = 3;

while (maxAttempts > attempts) {
  let password = prompt('Please enter your passowrd');
  console.log(password);

  if (password === null) {
    console.log('You pressed cancel');
  } else if (password.trim() === '') {
    attempts++;
    console.log(`Password field cant remain empty. You have ${maxAttempts - attempts} more chances`);
  } else if (password === correctPassword) {
    console.log('Access Granted');
    break;
  } else {
    attempts++;
    console.log(`Wrong Password, You have ${maxAttempts - attempts} more chances, please try again`);
  }
}
if (attempts === maxAttempts) {
  console.log('Account Locked');
}

// 12. Ask user for words until they type “stop”. Count how many times they typed “yes”
// Loop until "stop" is typed. Count "yes".
{
  const STOP = 'stop';
  let count = 0;
  while (STOP) {
    let words = prompt('Enter anything you want');
    if (words.toLocaleLowerCase() === STOP) break;

    if (words.toLocaleLowerCase() === 'yes') {
      count++;
    }
  }
  console.log(`User type yes ${count} time`);
}

// 13. Print numbers divisible by 7 from 1 to 50
// Use modulo % and loop.
{
  let num = 7;
  for (let i = 1; i <= 50; i++) {
    if (i % 7 === 0) {
      console.log(i);
    }
  }
}

// 14. Sum of all odd numbers from 1 to 30
// Add only odd numbers. Print final sum.

let sum = 0;
for (let i = 1; i <= 30; i++) {
  if (i % 2 != 0) {
    sum += i;
  }
}
console.log(sum);

// 15. Keep asking number until user enters an even number
// Use while loop. Stop only if input is even.

{
  let num;
  while (true) {
    num = prompt('Enter any number you want.');
    num = Number(num);
    if (isNaN(num) || num % 2 === 0) break;
  }
}

// 16. Print numbers between two user inputs
// Input start and end using prompt() → print all between.

let first = prompt('Write Something')
console.log(first)
let second = prompt('Write something more')
console.log(second)

// 17. Print only first 3 odd numbers from 1 to 20
// Use loop. Stop with break after 3 odd prints.

for (let i = 0; i <= 20; i++) {
  if (i % 2 != 0) {
    if (i > 3) break;
    console.log(i);
  }
}

// 18. Ask user 5 numbers. Count how many are positive
// Use loop + condition + counter.

let loop = 5;
let counts = 0;
while (loop) {
  loop -= 1;
  let num = prompt('Enter Numbers');
  if (num === null) {
    console.log('You Pressed Cancel');
    break;
  }
  num = Number(num);
  if (isNaN(num)) {
    console.log('Please enter number');
    break;
  }
  if (num % 2 === 0) {
    counts++;
  }
}
if (counts > 0) console.log(counts);

// 19. ATM Simulator – Allow 3 withdrawals
// Start with ₹1000 balance. Ask withdrawal amount 3 times.
// If enough balance → deduct
// Else → print “Insufficient balance”

let balance = 1000;
let withdrawals = 3;

for (i = 1; withdrawals; i++) {
  let withdrawAmount = prompt('Enter Amount');
  if (isNaN(withdrawAmount) || withdrawAmount===null) {
    console.log('Please Enter a Amount');
  } else if (withdrawAmount > balance) {
    console.log('Insufficient Balance')
  } else {
    balance -= withdrawAmount
    withdrawals--
    console.log(`Withdraw of amount ${withdrawAmount} done. Your A/C balance is ${balance}`)
    if (balance === 0) break;
  }
}
