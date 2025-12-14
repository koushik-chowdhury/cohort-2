// ### 1. Fundamentals Review (Warm-up)

// *(Focus: Logic, loops, and operators)*

// #### 1.1. Find the Max of Three
// * **Task:** Write a function `maxOfThree(a, b, c)` that takes three numbers and returns the largest one. Do *not* use the built-in `Math.max()` function.
// * **Concepts:** `if/else` statements, logical operators (`&&`).

// #### 1.2. Calculate Factorial
// * **Task:** Write a function `factorial(n)` that takes a number `n` and returns its factorial (e.g., `factorial(5)` is `5 * 4 * 3 * 2 * 1 = 120`).
// * **Concepts:** `for` loop, operators (`*=`), handling edge cases (e.g., `n=0`).

// #### 1.3. Leap Year Checker
// * **Task:** Write a function `isLeapYear(year)` that takes a year (number) and returns `true` if it's a leap year, and `false` if not.
// * **Rules:** A year is a leap year if it is divisible by 4, *except* for years divisible by 100... *unless* they are also divisible by 400.
// * **Concepts:** Modulo operator (`%`), `if/else`, logical operators (`&&`, `||`).

// ---

// ### 2. String Manipulation

// *(Focus: Working with strings as collections of characters)*

// #### 2.1. Check for Palindrome
// * **Task:** Write a function `isPalindrome(str)` that checks if a string is a palindrome (reads the same forwards and backward, ignoring case).
// * **Example:** `isPalindrome("Radar")` should return `true`. `isPalindrome("Hello")` should return `false`.
// * **Concepts:** String methods (`.toLowerCase()`), `for` loop, string indexing (`str[i]`).

// #### 2.2. Find the Longest Word
// * **Task:** Write a function `findLongestWord(sentence)` that takes a sentence (string) and returns the longest word in it. If there are multiple, return the first one.
// * **Hint:** You might need to learn the string `.split(' ')` method, which turns a string into an array of words.
// * **Concepts:** String `.split()`, `for` loop, string `.length`.

// #### 2.3. Title Case a Sentence
// * **Task:** Write a function `toTitleCase(sentence)` that takes a sentence and returns a new sentence where the first letter of every word is capitalized and the rest are lowercase.
// * **Example:** `toTitleCase("I'm a little tea pot")` should return `"I'm A Little Tea Pot"`.
// * **Concepts:** String `.split()`, `for` loop, string indexing, `.toUpperCase()`, `.toLowerCase()`, string `.join()`.

// ---

// ### 3. Array Basics

// *(Focus: Looping over arrays and manipulating data)*

// #### 3.1. Find the Average
// * **Task:** Write a function `findAverage(numbers)` that takes an array of numbers and returns their average.
// * **Concepts:** `for` loop, `+=` operator, array `.length`.

// #### 3.2. Reverse an Array (In-Place)
// * **Task:** Write a function `reverseArray(arr)` that takes an array and reverses its elements *without* creating a new array and *without* using the built-in `.reverse()` method.
// * **Hint:** Try looping "halfway" through the array and swapping elements.
// * **Concepts:** `for` loop, temporary variables, array indexing.

// #### 3.3. Check if Array Includes Value
// * **Task:** Write a function `doesInclude(arr, value)` that takes an array and a value. It should return `true` if the value exists in the array, and `false` if not. Do *not* use the built-in `.includes()` method.
// * **Concepts:** `for` loop, `if` statement, `===` operator.

// #### 3.4. Count Occurrences
// * **Task:** Write a function `countOccurrences(arr, value)` that takes an array and a value, and returns the number of times that value appears in the array.
// * **Example:** `countOccurrences([1, 5, 2, 5, 5], 5)` should return `3`.
// * **Concepts:** `for` loop, `if` statement.

// ---

// ### 4. Object Basics

// *(Focus: Accessing and managing data in objects)*

// #### 4.1. Print Object Properties
// * **Task:** Write a function `printObject(obj)` that takes an object and `console.log`s each key-value pair in the format `"key: value"`.
// * **Hint:** You will need to learn the `for...in` loop for this.
// * **Concepts:** `for...in` loop, object key/value access.

// #### 4.2. Check for Property
// * **Task:** Write a function `hasProperty(obj, key)` that takes an object and a key (string). It should return `true` if the object has that property, and `false` if not.
// * **Hint:** You can use the `in` operator (e.g., `if (key in obj)`).
// * **Concepts:** `in` operator, functions, booleans.

// #### 4.3. Is Object Empty?
// * **Task:** Write a function `isEmpty(obj)` that takes an object and returns `true` if it has no properties, and `false` otherwise.
// * **Concepts:** `for...in` loop, `return` inside a loop.

// ---

// ### 5. Advanced Challenges (Arrays of Objects)

// *(Focus: Combining all concepts to work with real-world data structures)*

// #### 5.1. Get Student Names by Grade
// * **Task:** Write a function `getStudentsInGrade(students, grade)` that takes an array of student objects and a `grade` (number). Return a **new array** containing only the **names** of students in that grade.
// * **Example Data:**
//     ```javascript
//     let studentList = [
//       { name: 'Amy', grade: 10 },
//       { name: 'Bill', grade: 12 },
//       { name: 'Chris', grade: 10 }
//     ];
//     // getStudentsInGrade(studentList, 10) should return ['Amy', 'Chris']
//     ```
// * **Concepts:** `for` loop, `if`, object property access, creating a new array, `.push()`.

// #### 5.2. Find Oldest Person
// * **Task:** Write a function `findOldest(people)` that takes an array of person objects (each with `name` and `age` properties) and returns the **entire object** of the oldest person.
// * **Concepts:** `for` loop, `if`, object access, temporary variable (to store the "oldest" object seen so far).

// #### 5.3. Calculate Class Average
// * **Task:** Write a function `getClassAverage(students)` that takes an array of student objects (each with `name` and `score` properties) and returns the average score of the entire class.
// * **Concepts:** `for` loop, object access, `+=`, `.length`.

// #### 5.4. Count Property Occurrences
// * **Task:** Write a function `countByProperty(items, propName)` that takes an array of objects and a property name (string). It should return a **new object** that counts the occurrences of each value for that property.
// * **Example Data:**
//     ```javascript
//     let fruits = [
//       { name: 'Apple', color: 'Red' },
//       { name: 'Banana', color: 'Yellow' },
//       { name: 'Grape', color: 'Red' }
//     ];
//     // countByProperty(fruits, 'color') should return:
//     // { Red: 2, Yellow: 1 }
//     ```
// * **Concepts:** `for` loop, object access (using `[]` brackets for dynamic keys), `if`, creating/updating an object.

// --------------------------------------------
// ### 1. Fundamentals Review (Warm-up)

// #### 1.1. Find the Max of Three
// * **Task:** Write a function `maxOfThree(a, b, c)` that takes three numbers and returns the largest one. Do *not* use the built-in `Math.max()` function.
// * **Concepts:** `if/else` statements, logical operators (`&&`).

function maxOfThree(a, b, c) {
  if ([a, b, c].some((num) => String(num).trim() === '')) {
    return `Wrong input`;
  }
  [a, b, c] = [a, b, c].map(Number);
  if ([a, b, c].some(isNaN)) return 'Wrong input';
  return a >= b && a >= c ? a : b >= c ? b : c;
}

console.log(maxOfThree('', '', ''));
console.log(maxOfThree(2, '7a', 2));
console.log(maxOfThree(20, 7, 2));
console.log(maxOfThree(20, 20, 20));

// #### 1.2. Calculate Factorial
// * **Task:** Write a function `factorial(n)` that takes a number `n` and returns its factorial (e.g., `factorial(5)` is `5 * 4 * 3 * 2 * 1 = 120`).
// * **Concepts:** `for` loop, operators (`*=`), handling edge cases (e.g., `n=0`).

function factorial(n) {
  if (n === undefined || String(n).trim() === '') return 'Please give a valid input';

  n = Number(n);
  if (isNaN(n)) return 'Input must be a number';
  if (n < 0) return 'Not defined for negative numbers';
  if (n <= 1) return 1;
  return n * factorial(n - 1);
}
let fact = factorial('10');
console.log(fact);

// #### 1.3. Leap Year Checker
// * **Task:** Write a function `isLeapYear(year)` that takes a year (number) and returns `true` if it's a leap year, and `false` if not.
// * **Rules:** A year is a leap year if it is divisible by 4, *except* for years divisible by 100... *unless* they are also divisible by 400.
// * **Concepts:** Modulo operator (`%`), `if/else`, logical operators (`&&`, `||`).

function isLeapYear(year) {
  if (year === undefined || String(year).trim() === '') return `Please enter a valid year`;
  if (isNaN(year)) return `Input must be a number`;
  if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
    return `${year} is Leap year`;
  } else {
    return `${year} is not Leap year`;
  }
}
let leapYear = isLeapYear(1900);
console.log(leapYear);

// ### 2. String Manipulation

// #### 2.1. Check for Palindrome
// * **Task:** Write a function `isPalindrome(str)` that checks if a string is a palindrome (reads the same forwards and backward, ignoring case).
// * **Example:** `isPalindrome("Radar")` should return `true`. `isPalindrome("Hello")` should return `false`.
// * **Concepts:** String methods (`.toLowerCase()`), `for` loop, string indexing (`str[i]`).

function reverseString(str) {
  let reverseStr = '';
  str = String(str).toLowerCase().trim();

  if (str === '') return undefined;
  for (let i = str.length - 1; i >= 0; i--) {
    reverseStr += str[i];
  }
  return reverseStr;
}
let name = 'heheh';
let reverseStr = reverseString(name);

if (reverseStr === undefined) {
  console.log('Please enter a valid input');
} else if (name.toLowerCase() === reverseStr) {
  console.log('Palindrome');
} else {
  console.log('Not Palindrome');
}

// #### 2.2. Find the Longest Word
// * **Task:** Write a function `findLongestWord(sentence)` that takes a sentence (string) and returns the longest word in it. If there are multiple, return the first one.
// * **Hint:** You might need to learn the string `.split(' ')` method, which turns a string into an array of words.
// * **Concepts:** String `.split()`, `for` loop, string `.length`.

function findLongestWord(sentence) {
  if (!sentence || !sentence.trim()) {
    return `Please enter a value`;
  }
  const words = sentence.trim().split(/\s+/);
  let longestWord = '';

  for (let i = 0; i < words.length; i++) {
    if (longestWord.length < words[i].length) {
      longestWord = words[i];
    }
  }
  return longestWord;
}
console.log(findLongestWord('My name is Kousik Chowdhury'));

// #### 2.3. Title Case a Sentence
// * **Task:** Write a function `toTitleCase(sentence)` that takes a sentence and returns a new sentence where the first letter of every word is capitalized and the rest are lowercase.
// * **Example:** `toTitleCase("I'm a little tea pot")` should return `"I'm A Little Tea Pot"`.
// * **Concepts:** String `.split()`, `for` loop, string indexing, `.toUpperCase()`, `.toLowerCase()`, string `.join()`.

function toTitleCase(sentence) {
  if (!isNaN(sentence)) return `Please enter a sentence`;
  if (!sentence || !sentence.trim()) {
    return `Please enter a sentence`;
  }
  let arrayOfWords = sentence.trim().split(/\s+/);
  let titleCase = [];
  console.log(arrayOfWords);

  for (let i = 0; i < arrayOfWords.length; i++) {
    let word = arrayOfWords[i];
    let formatted = word[0].toUpperCase() + word.slice(1).toLowerCase();
    titleCase.push(formatted);
  }
  return titleCase.join(' ');
}

console.log(toTitleCase(''));

// #### 3.1. Find the Average
// * **Task:** Write a function `findAverage(numbers)` that takes an array of numbers and returns their average.
// * **Concepts:** `for` loop, `+=` operator, array `.length`.

function findAverage(...numbers) {
  if (numbers.length === 0) return 0;
  let avg = 0;
  for (let i = 0; i < numbers.length; i++) {
    avg += numbers[i];
  }
  return avg / numbers.length;
}

let avg = findAverage(10, 20, 30);
console.log(avg);

// #### 3.2. Reverse an Array (In-Place)
// * **Task:** Write a function `reverseArray(arr)` that takes an array and reverses its elements *without* creating a new array and *without* using the built-in `.reverse()` method.
// * **Hint:** Try looping "halfway" through the array and swapping elements.
// * **Concepts:** `for` loop, temporary variables, array indexing.

function reverseArray(...arr) {
  //   console.log(arr);
  let temp = [];
  for (let i = 0; i < arr.length / 2; i++) {
    let rightIndex = arr.length - 1 - i;
    temp[i] = arr[i];
    arr[i] = arr[rightIndex];
    arr[rightIndex] = temp[i];
  }
  console.log(arr);
}

reverseArray(1, 2, 3, 4, 5, 6);

// #### 3.3. Check if Array Includes Value
// * **Task:** Write a function `doesInclude(arr, value)` that takes an array and a value. It should return `true` if the value exists in the array, and `false` if not. Do *not* use the built-in `.includes()` method.
// * **Concepts:** `for` loop, `if` statement, `===` operator.

function doesInclude(arr, val) {
  console.log(arr);
  console.log(val);
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === val) {
      return true;
    }
  }
  return false;
}
console.log(doesInclude([1, 2, 3, 4, 5], 10));

// #### 3.4. Count Occurrences
// * **Task:** Write a function `countOccurrences(arr, value)` that takes an array and a value, and returns the number of times that value appears in the array.
// * **Example:** `countOccurrences([1, 5, 2, 5, 5], 5)` should return `3`.
// * **Concepts:** `for` loop, `if` statement.

function countOccurrences(arr, value) {
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    if (value === arr[i]) {
      count++;
    }
  }
  return count;
}

console.log(countOccurrences([1, 2, 3, 4, 4, 5, 5, 5, 6, 9, 6, 8, 7, 6], 0));

// ### 4. Object Basics

// *(Focus: Accessing and managing data in objects)*

// #### 4.1. Print Object Properties
// * **Task:** Write a function `printObject(obj)` that takes an object and `console.log`s each key-value pair in the format `"key: value"`.
// * **Hint:** You will need to learn the `for...in` loop for this.
// * **Concepts:** `for...in` loop, object key/value access.

function printObject(obj) {
  for (let i in obj) {
    console.log(`index: ${i}`);
    for (let key in obj[i]) {
      console.log(`Key: ${key} value: ${obj[i][key]}`);
    }
  }
}

const users = [
  {
    name: 'Aarav Sharma',
    course: 'Full Stack Web Development',
    isPaid: true,
    age: 21,
  },
  {
    name: 'Riya Patel',
    course: 'Data Science',
    isPaid: false,
    age: 19,
  },
  {
    name: 'Mohammed Ali',
    course: 'Cyber Security',
    isPaid: true,
    age: 24,
  },
  {
    name: 'Sneha Kapoor',
    course: 'UI/UX Design',
    isPaid: false,
    age: 22,
  },
  {
    name: 'Karan Mehta',
    course: 'Mobile App Development',
    isPaid: true,
    age: 25,
    kousik: null,
  },
];

printObject(users);

// #### 4.2. Check for Property
// * **Task:** Write a function `hasProperty(obj, key)` that takes an object and a key (string). It should return `true` if the object has that property, and `false` if not.
// * **Hint:** You can use the `in` operator (e.g., `if (key in obj)`).
// * **Concepts:** `in` operator, functions, booleans.
function hasProperty(obj, key) {
  for (const i in obj) {
    for (const objKey in obj[i]) {
      if (objKey === key) {
        console.log('1');
        return true;
      }
    }
  }
  return false;
}

let res = hasProperty(users, 'kousik');
console.log(res);

// #### 4.3. Is Object Empty?
// * **Task:** Write a function `isEmpty(obj)` that takes an object and returns `true` if it has no properties, and `false` otherwise.
// * **Concepts:** `for...in` loop, `return` inside a loop.

function isEmpty(obj) {
  for (val in obj) {
    if (obj.hasOwnProperty(val)) {
      return true;
    }
  }
  return false;
}
const obj = {};
let ans = isEmpty(obj);
console.log(ans);

// #### 5.1. Get Student Names by Grade
// * **Task:** Write a function `getStudentsInGrade(students, grade)` that takes an array of student objects and a `grade` (number). Return a **new array** containing only the **names** of students in that grade.
// * **Example Data:**
//     ```javascript
//     let studentList = [
//       { name: 'Amy', grade: 10 },
//       { name: 'Bill', grade: 12 },
//       { name: 'Chris', grade: 10 }
//     ];
//     // getStudentsInGrade(studentList, 10) should return ['Amy', 'Chris']
//     ```
// * **Concepts:** `for` loop, `if`, object property access, creating a new array, `.push()`.

function getStudentsInGrade(studentList, grade) {
  let bestGrade = [];
  for (i in studentList) {
    let studentGrade = studentList[i].grade;
    if (studentGrade == grade) {
      bestGrade.push(studentList[i].name);
    }
  }
  return bestGrade;
}
let studentList = [
  { name: 'Amy', grade: 10 },
  { name: 'Bill', grade: 12 },
  { name: 'Chris', grade: 10 },
];

let gradeStudent = getStudentsInGrade(studentList, 10);
console.log(gradeStudent);


// #### 5.2. Find Oldest Person
// * **Task:** Write a function `findOldest(people)` that takes an array of person objects (each with `name` and `age` properties) and returns the **entire object** of the oldest person.
// * **Concepts:** `for` loop, `if`, object access, temporary variable (to store the "oldest" object seen so far).


function findOldest(people) {
  let oldPerson = {};
  let oldAge = people[0].age;
  for (let person of people) {
    if (person.age > oldAge) {
      console.log('inside if', person.age);
      oldPerson = person.age;
      oldAge = person.age;
    }
  }
  return oldPerson;
}

const people = [
  { name: 'kousik', age: 23 },
  { name: 'simran', age: 22 },
  { name: 'piyush', age: 27 },
  { name: 'hitesh', age: 32 },
];

let oldestPerson = findOldest(people);
console.log(oldestPerson);

// #### 5.3. Calculate Class Average
// * **Task:** Write a function `getClassAverage(students)` that takes an array of student objects (each with `name` and `score` properties) and returns the average score of the entire class.
// * **Concepts:** `for` loop, object access, `+=`, `.length`.

function getClassAverage(students) {
  let length = students.length;
  let totalScore = 0;
  for (let student of students) {
    totalScore += student.score;
  }
  return totalScore / length;
}

const students = [
  { name: 'kousik', score: 98 },
  { name: 'simran', score: 100 },
  { name: 'piyush', score: 94 },
  { name: 'hitesh', score: 95 },
];

console.log(getClassAverage(students))
