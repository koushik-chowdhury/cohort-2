// 1. age category

function ageCategory(age) {
  if (age < 0) return 'Invalid';
  if (age >= 60) return 'Senior';
  if (age >= 18) return 'Adult';
  if (age >= 13) return 'Teen';
  if (age >= 0) return 'Child';
}

let citizenType = ageCategory(12);
// console.log(citizenType);
// 2. getTicketPrice

function getTicketPrice(age, isWeekend) {
  let ticketPrice = 0;
  if (age < 0) return -1;
  else if (age >= 60) ticketPrice = 10;
  else if (age >= 18) ticketPrice = 15;
  else if (age >= 13) ticketPrice = 12;
  else if (age >= 0) ticketPrice = 8;

  if (isWeekend) {
    ticketPrice += 3;
  }
  return ticketPrice;
}
let ticketPrice = getTicketPrice(18, true);
// console.log(ticketPrice);

// 3. calculate grade

function calculateGrade(score) {
  if (score < 0 || score > 100 || typeof score !== 'number') return 'Invalid';
  if (score >= 90 && score <= 100) return 'A';
  if (score >= 80) return 'B';
  if (score >= 60) return 'C';
  if (score < 60) return 'F';
}

let grade = calculateGrade(80);
// console.log(grade);

// 4. login check

function loginCheck(username, password) {
  if (!username) return `Username required`;
  if (!password) return `Password required`;

  if (username === 'kousik' && password === 'csakoushik') return `Login successful`;
  else {
    return 'Invalid credentials';
  }
}
let username = 'kousik';
password = 'csakoushik';
let result = loginCheck(username, password);
// console.log(result);

// 5.
function weatherAdvice(temp, isRaining) {
  let weatherType = null;
  if (temp >= 35) weatherType = 'Too hot';
  else if (temp >= 25 && isRaining) weatherType = 'Warm but rainy';
  else if (temp >= 25 && !isRaining) weatherType = 'Great weather';
  else if (temp >= 15 && !isRaining) weatherType = 'Nice weather';
  else if (temp >= 15 && isRaining) weatherType = 'Cool and rainy';
  else if (temp < 15) weatherType = 'Cold';
}

// 6.
function checkPassword(password) {
  if (password.length < 6) return `Weak`;
  let hasChar = false;
  let hasNum = false;
  for (let char of password) {
    if ((char >= 'A' && char <= 'Z') || (char >= 'a' && char <= 'z')) {
      hasChar = true;
    } else if (char >= '0' && char <= '9') {
      hasNum = true;
    }
    if (hasChar && hasNum) return 'Strong';
  }
  return 'Medium';
}
let passStrenth = checkPassword('kousikchowdhury');
console.log(passStrenth);

// 7.
function calculateDiscount(amount) {
  let discount = 0;
  if (amount >= 1000) discount = 20;
  else if (amount >= 500) discount = 10;

  let discountedAmount = amount - amount * (discount / 100);
  return discountedAmount;
}

let amount = calculateDiscount(1000);
console.log(`amount is ${amount}`);

// 8.

function numberChecker(num) {
  let sign = null;
  let type = null;
  if (num > 0) sign = 'Positive';
  else {
    sign = 'Negetive';
  }

  if (num % 2 === 0) type = `Even`;
  else {
    type = `Odd`;
  }
  return { type, sign };
}
let number = numberChecker(10);
console.log(number);
// 8.

function login(user) {
  if (user) {
    if (user.isVerified) {
      if (user.isAdmin) {
        return 'Admin Access';
      }
    }
  }
  return 'Access Denied';
}


