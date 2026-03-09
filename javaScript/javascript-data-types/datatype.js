console.log('-----------------PRIMITIVE DATATYEP-----------------');

let name = 'Kousik chowdhury';
let age = 23;
let isLoggedIn = true;
let girlFriend;
let bankAc = null;
let futureNetWorth = 10n;
let id = Symbol('110');

console.log('');
console.log(`typeof name is: ${typeof name}`);
console.log(`typeof age is: ${typeof age}`);

console.log(`typeof girlfriend is: ${typeof girlFriend}`);
console.log(`typeof bankAc is: ${typeof bankAc}`);
console.log(`typeof futureNetWorth is: ${typeof futureNetWorth}`);
console.log(`typeof id is: ${typeof id}`);
console.log('');

console.log('-----------------NON PRIMITIVE DATATYEP-----------------');

let languages = ['JavaScript', 'Python', 'C'];
let user = {
  name: 'Kousik Chowdhury',
  age: 23,
  isDoingJob: false,
};

console.log('');
console.log(`typeof array is: ${typeof languages}`);
console.log(`typeof object is: ${typeof user}`);

console.log('-----------------STACK vs HEAP-----------------\n');

// Primitive (Stack)
let a = 10;
let b = a;

b = 20;

console.log('Primitive Example');
console.log(`a = ${a}`);
console.log(`b = ${b}`);

// Reference (Heap)
let obj1 = { name: 'Kousik' };
let obj2 = obj1;

obj2.name = 'Elon';

console.log('\nReference Example');
console.log(`obj1.name = ${obj1.name}`);
console.log(`obj2.name = ${obj2.name}`);

console.log('\n');

console.log('-----------------TYPE COERCION-----------------\n');

console.log(`"5" + 1 = ${'5' + 1}`);
console.log(`"5" - 1 = ${'5' - 1}`);
console.log(`true + 1 = ${true + 1}`);
console.log(`false + 1 = ${false + 1}`);

console.log('\n');

console.log('-----------------FALSY VALUES-----------------\n');

let falsyValues = [false, 0, -0, 0n, '', null, undefined, NaN];

falsyValues.forEach((value) => {
  if (!value) {
    console.log(`${value} is falsy`);
  }
});
