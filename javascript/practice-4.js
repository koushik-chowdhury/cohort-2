// MAP

{
  // square each number

  let arr = [2, 4, 6, 8];
  console.log('Square Number');
  const square = arr.map((item) => item * item);

  console.log(square);
}
{
  let names = ['KOUSHIK', 'SIMRAN', 'RAVI'];

  let smallNames = names.map((name) => name.toLocaleLowerCase());
  console.log('Small letter name');
  console.log(smallNames);
}

{
  let marks = [70, 80, 95];
  let addedMarks = marks.map((mark) => mark + 5);
  console.log('New marks after adding 5');
  console.log(addedMarks);
}

{
  let users = [
    { name: 'Aarav', age: 21 },
    { name: 'Riya', age: 19 },
    { name: 'Ali', age: 24 },
  ];

  let ages = users.map((user) => user.age);
  console.log(ages);
}

{
  let fruits = ['apple', 'banana', 'cherry'];
  let firstLetter = fruits.map((fruit) => fruit[0]);
  console.log(firstLetter);
}
{
  const students = [
    { name: 'Koushik', score: 98 },
    { name: 'Simran', score: 92 },
    { name: 'Piyush', score: 88 },
  ];

  let studentsArr = students.map((student) => `${student.name}: ${student.score}`);
  console.log(studentsArr);
}

// FILTER ----------------------------------------------------------------------------------------

{
  let nums = [1, 2, 3, 4, 5, 6];
  let evenNums = nums.filter((num) => num % 2 === 0);
  console.log(evenNums);
}

{
  // Filter names with more than 5 characters
  let names = ['Koushik', 'Simran', 'Riya', 'Piyush'];

  let bigNames = names.filter((name) => name.length > 5);
  console.log(bigNames);
}

{
  // Filter numbers > 50
  let nums = [10, 55, 78, 32, 5];

  let bigNums = nums.filter((num) => num > 50);
  console.log(bigNums);
}

const students = [
  { name: 'Koushik', score: 98 },
  { name: 'riya', score: 52 },
  { name: 'simran', score: 60 },
  { name: 'Piyush', score: 30 },
];

let passStudent = students.filter((student) => student.score >= 60);

console.log(passStudent);

// Filter users who are online
const users = [
  { name: 'Aarav', online: true },
  { name: 'Riya', online: false },
  { name: 'Ali', online: true },
];

let onlineUsers = users.filter((user) => user.online);
console.log(onlineUsers);

// Filter only products that are
// Price < 200
// AND category == "food"

const products = [
  { name: 'Momo', price: 70, category: 'food' },
  { name: 'Pizza', price: 250, category: 'food' },
  { name: 'Tea', price: 20, category: 'drink' },
  { name: 'Burger', price: 120, category: 'food' },
];

let updatedProducts = products.filter((product) => {
  return product.price < 200 && product.category === 'food';
});
console.log(updatedProducts);

// REDUCE -------------------------------------------------------------------

// Sum all numbers

const nums = [4, 6, 10];

let sumALl = nums.reduce((acc, curr) => {
  return acc + curr;
});

console.log(`Sum of all digits: ${sumALl}`);

const nums1 = [1, 2, 3, 4, 6, 7, 8, 8];

let evenNums = nums1.reduce((acc, n) => {
  if (n % 2 === 0) return acc + 1;
  return acc;
}, 0);

console.log(`Total even nums: ${evenNums}`);

const words = ['hello', 'world', 'koushik'];
const combined = words.reduce((acc, word) => {
  return acc + word;
}, '');

console.log(combined);

const allStudents = [
  { name: 'Aarav', score: 80 },
  { name: 'Simran', score: 70 },
  { name: 'Ali', score: 90 },
];

let totalScore = allStudents.reduce((acc, curr) => {
  return acc + curr.score;
}, 0);

console.log(`Total score of students: ${totalScore}`);

const letters = ['a', 'b', 'a', 'c', 'b', 'a'];

let freq = letters.reduce((acc, currLetter) => {
  acc[currLetter] = (acc[currLetter] || 0) + 1;
  return acc;
}, {});

console.log(freq);

// Group students by their grade

const jsStudents = [
  { name: 'Koushik', grade: 10 },
  { name: 'Riya', grade: 12 },
  { name: 'Piyush', grade: 10 },
  { name: 'Simran', grade: 12 },
];

let gradeStudents = jsStudents.reduce((acc, curr) => {
  if (!acc[curr.grade]) {
    acc[curr.grade] = [];
  }
  acc[curr.grade].push(curr.name);
  return acc;
}, {});

console.log(gradeStudents);

// FIND ----------------------------------------------------------

// 1
let numbers = [1, 3, 5, 6, 8];

let firstEvenNum = numbers.find((num) => num % 2 === 0);
console.log(`First Even Number: ${firstEvenNum}`);

// 2

let difStudent = [
  { name: 'Aarav', score: 80 },
  { name: 'Simran', score: 90 },
  { name: 'Ali', score: 70 },
];

let studentAbove = difStudent.find((student) => {
  return student.score === 90;
});

console.log('Student with number 90 :', studentAbove);

// 3

let product = [
  { name: 'Burger', price: 120 },
  { name: 'Pizza', price: 250 },
  { name: 'Momo', price: 70 },
];

let costlyProduct = product.find((p) => {
  return p.price === 120;
});

console.log('Costly product is : ', costlyProduct);

// 4

const data = [3, 5, 2, 5, 7, 3];

let seen = {};

const firstDuplicate = data.find((num) => {
  console.log(seen);
  if (seen[num]) {
    console.log(`i am seen : ${num}`);
    return true; // found duplicate
  }
  seen[num] = true; // mark as seen
  console.log(`i am seen outside: ${num}`);

  return false; // keep checking
});

console.log(firstDuplicate); // 5

// SOME() ----------------------------------------------------

// 1

let data1 = [10, 25, 60, 30];

let res = data1.some((data) => data > 50);
console.log(res);

// 2

let studentss = [
  { name: 'Aarav', score: 80 },
  { name: 'Simran', score: 25 },
  { name: 'Ali', score: 70 },
];

let failedStudents = studentss.some((student) => student.score < 30);
console.log(failedStudents);

// EVERY() ----------------------------------------------------

// 1

let checkEven = [2, 4, 6, 8];
let isAllEven = checkEven.every((num) => num % 2 === 0);
console.log(isAllEven);

// 2

let foods = [
  { name: 'Burger', price: 120 },
  { name: 'Pizza', price: 250 },
  { name: 'Phone', price: 30000 },
];

let foodPrice = foods.every((food) => food.price < 500);
console.log(foodPrice);

// SORT ----------------------------------------------------

// 1

let d = [5, 1, 9, 3, 7];

let sortD = d.sort((a, b) => a - b);
console.log(sortD);

// 2

let d2 = [10, 4, 2, 99, 50];

let sortD2 = d2.sort((a, b) => b - a);

console.log(sortD2);

// 3

let names = ['Simran', 'Aarav', 'Koushik', 'Riya'];

console.log(names.sort());

// 3

let studentsToBeSort = [
  { name: 'Aarav', score: 88 },
  { name: 'Simran', score: 98 },
  { name: 'Ali', score: 75 },
];

let sortedStudents = studentsToBeSort.sort((a, b) => a.score - b.score);
console.log(sortedStudents);

// 4

let productToBeSort = [
  { name: 'Burger', price: 120 },
  { name: 'Pizza', price: 250 },
  { name: 'Momo', price: 70 },
];

let sortedProduct = productToBeSort.sort((a, b) => b.price - a.price);
console.log(sortedProduct);

// SLICE ----------------------------------------------------

// 1

let arr = [10, 20, 30, 40, 50];

let newArr = arr.slice(2, 4);
console.log(newArr);

// 2

let arr2 = [1, 2, 3, 4, 5];

let newArr2 = arr2.slice(-3);
console.log(newArr2);
// SPLICE ----------------------------------------------------

// 1

let arr3 = [10, 20, 30, 40];

let varb = arr3.splice(1, 2);

console.log(arr3);

// 2

let arr4 = [5, 10, 15, 20];

arr4.splice(2, 0, 200);
console.log(arr4);

// 3

let arr5 = [10, 20, 30, 40];

arr5.splice(2, 1, 300);
console.log(arr5);

// SPREAD ----------------------------------------------------

// 1

let daTa = [10, 20, 30];

let copiedData = [...daTa];
console.log(copiedData);

// 2

let a = [1, 2];
let b = [3, 4, 5];

let mergeData = [...a, ...b];
console.log(mergeData);

// 3

let arra = [10, 20, 30];

let newAr = [5, ...arra, 40];
console.log(newAr);

// 4

let user = { name: 'Koushik', age: 23 };

let copiedUser = { ...user, age: 26 };
console.log(copiedUser);

// REST ----------------------------------------------------

// 1
{
  let nums = [10, 20, 30, 40, 50];

  let [first, second, ...rest] = nums;
  console.log(first);
  console.log(second);
  console.log(rest);
}

// 2

function sumOfNums(...nums) {
  return nums.reduce((acc, curr) => {
    return acc + curr;
  }, 0);
}

let sum1 = sumOfNums(1, 2, 3);
let sum2 = sumOfNums(5, 10, 15, 20);

console.log(sum1);
console.log(sum2);

// 3

let aUser = { name: 'Koushik', age: 23, city: 'Delhi' };

let { name, ...others } = aUser;
console.log(name);
console.log(others);

// 4

let maxNum = max(2, 5, 1, 9, 3);

function max(...nums) {
  nums.sort((a, b) => b - a);
  return nums[0];
}

console.log(maxNum);

// Array.from()

// 1

let str = 'Kousik';
let strArr = Array.from(str);

console.log(strArr);

// 2

let target = 10;

let targetArr = Array.from({ length: target }, (_, i) => i + 1);
console.log(targetArr);

// 3

let arrData = Array.from([1, 2, 3, 4], (x) => x * 2);
console.log(arrData);

// 4

let allZero = Array.from([1, 2, 3, 4, 5], (x) => x * 0);
console.log(allZero);

// 5

let s = new Set(['apple', 'banana', 'apple', 'mango']);

let namesOfFruits = Array.from(s);
console.log(namesOfFruits);

// COMBO PRACTICE

// 1

{
  const nums = [1, 2, 3, 4, 5, 6];

  let filterdNums = nums
    .filter((num) => {
      return num % 2 === 0;
    })
    .map((num) => num * 2);

  console.log(filterdNums);
}

// 2

{
  const students = [
    { name: 'Aarav', score: 80 },
    { name: 'Riya', score: 45 },
    { name: 'Simran', score: 70 },
  ];

  let passedStudents = students.filter((student) => student.score >= 60).map((student) => student.name);
  console.log(passedStudents);

  let totalScore = students.filter((student) => student.score >= 60).reduce((acc, curr) => acc + curr.score, 0);
  console.log(totalScore);
}

// 3

{
  const products = [
    { name: 'Momo', price: 70, category: 'food' },
    { name: 'Pizza', price: 250, category: 'food' },
    { name: 'Phone', price: 30000, category: 'tech' },
  ];

  let totalPrice = products
    .filter((product) => product.category === 'food')
    .reduce((total, curr) => total + curr.price, 0);
  console.log(totalPrice);
}

// 4

{
  const students = [
    { name: 'Kousik', score: 80 },
    { name: 'Simran', score: 95 },
    { name: 'Rita', score: 70 },
  ];
  let studentNames = students.sort((st1, st2) => st2.score - st1.score).map((student) => student.name);
  console.log(studentNames);
  let topStudent = students.sort((st1, st2) => st2.score - st1.score);
  console.log(topStudent[0]);
}

// 5

{
  const products = [
    { name: 'Pizza', price: 250 },
    { name: 'Momo', price: 70 },
    { name: 'Tea', price: 20 },
  ];
  let firstProduct = products.find((product) => product.price <= 100);
  console.log(firstProduct);
}

// 6

{
  const users = [
    { name: 'Koushik', city: 'Delhi' },
    { name: 'messi', city: 'Mumbai' },
    { name: 'Simran', city: 'Delhi' },
  ];

  let groupByCity = users.reduce((acc, user) => {
    if (!acc[user.city]) {
      acc[user.city] = [];
    }
    acc[user.city].push(user.name);
    return acc;
  }, {});
  console.log(groupByCity);
}

// 7

{
  const nums = [1, 2, 3, 4, 6];

  let allInfo = nums.reduce(
    (acc, num) => {
      acc.sum += num;

      if (num % 2 === 0) {
        acc.evenCount++;
      }
      return acc;
    },
    { sum: 0, evenCount: 0 }
  );
  console.log(allInfo);
}


// https://supabase.com/docs/guides/getting-started
