// 1. isEven

function isEven(num) {
  return num % 2 === 0 ? 'even' : 'odd';
}

console.log(isEven(13));

function canVote(age) {
  return age >= 18 ? 'Can Vote' : 'Cannot Vote';
}
console.log(canVote(19));

function loginAccess(isLoggedIn, isAdmin) {
  return isLoggedIn && isAdmin ? true : false;
}

console.log(loginAccess(true, false));

function canDrive(age, hasLicense) {
  return age >= 18 && hasLicense ? 'Can drive' : 'cannot drive';
}
console.log(canDrive(18, false));

function getsUsername(input) {
  return input || 'Guest';
}

console.log(getsUsername());
