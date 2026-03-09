# JavaScript Data Type – Notes & Learning

## Table of contents

- [What is Data Type](#what-is-data-type)
- [Primitive Data Type](#primitive-data-type)
- [Non Primitive Data Type](#non-primitive-data-type)
- [Stack Vs Heap](#stack-vs-heap-memory)
- [Falsy values in JavaScript](#falsy-values-in-javascript)

## What is Data Type?

1. **`A data type defines:`**
   - What kind of value a variable holds
   - What operations we can perform on it

2. **`JavaScript has 2 categories of data types:`**
   - Primitive
   - Non-Primitive (Reference Type)

## Primitive Data Type

Primitive values are:

- Immutable
- Stored by value
- Compared by value

### What is typeof?

- typeof is an operator in JavaScript that returns the data type of a variable.
- It always returns a string.

**Syntax:**

```javascript
typeof variableName;
```

## Output & Explanation

1. **`String`**
   - Strings are sequence of character wraped in quotes

```javascript
let name = 'Kousik chowdhury';
console.log(typeof name);
```

**`Output`**

```javascript
string;
```

2. **`Number`**
   - JavaScript has only one number type (no separate int/float).

```javascript
let age = 23;
console.log(typeof age);
```

**`Output`**

```javascript
number;
```

3. **`Boolean`**
   - Boolean values are `true` or `false`.

```javascript
let hasJob = false;
console.log(typeof hasJob);
```

**`Output`**

```javascript
false;
```

4. **`Undefined`**
   - Variable declared but not assigned any value is `undefined`.

```javascript
let girlFriend;
typeof girlFriend;
```

**`Output`**

```javascript
undefined;
```

5. **`Null`**
   - `null` is primitive.
   - But `typeof null` return `object`.
   - This is a historical bug.

```javascript
let bankAc = null;
typeof bankAc;
```

**`Output`**

```javascript
object;
```

6. **`Symbol`**

- Always unique
- Used for unique object keys

```javascript
let id = Symbol('kousik');
console.log(typeof id);
```

**`Output`**

```javascript
symbol;
```

**`Example of uniqueness`**

```javascript
let id1 = Symbol('x');
let id2 = Symbol('x');

console.log(id1 === id2);
```

**`Output`**

```javascript
false;
```

7. **`Bigint`**
   - Used for very large integers
   - Cannot mix with normal numbers

```javascript
let futureNetWorth = 10n;
console.log(typeof futureNetWorth);
```

**`Output`**

```javascript
bigint;
```

## Non Primitive Data TYpe

Non primitive values are:

- Mutable
- Stored by reference
- Compared by reference

## Output & Explanation

1. **`Array`**
   - An array is a special type of object used to store ordered collection of values.
   - Values are stored by index (starting from 0)
   - Can store multiple data types
   - Mutable
   - Stored by reference

```javascript
let languages = ['JavaScript', 'Python', 'C'];
console.log(typeof languages);
console.log(languages[0]);
```

**`Output`**

```javascript
object;
JavaScript;
```

2. **`Object`**
   - Values stored using keys
   - Can store multiple data types
   - Mutable
   - Stored by reference

```javascript
let user = {
  name: 'Kousik Chowdhury',
  age: 23,
  isDoingJob: false,
};
```

**`Output`**

```javascript
object;
```

## **Stack vs Heap Memory**

### Stack Memory

- Primitive datatypes uses stact memory.

**`Example`**

```javascript
let a = 10;
let b = a;

b = 20;

console.log('Primitive Example');
console.log(`a = ${a}`);
console.log(`b = ${b}`);
```

**`Output`**

```javascript
Primitive Example
a = 10;
b = 20;
```

### Heap Memory

- Reference values use heap memory.

```javascript
let obj1 = { name: 'Kousik' };
let obj2 = obj1;

obj2.name = 'Elon';
console.log(`obj1.name = ${obj1.name}`);
console.log(`obj2.name = ${obj2.name}`);
```

**`Output`**

```javascript
obj1.name = Elon;
obj2.name = Elon;
```

## Falsy Values in JavaScript

Falsy values are values that become false in boolean context.

**List of falsy values:**

- `false`
- `0`
- `-0`
- `0n`
- `""`
- `null`
- `undefined`
- `NaN`

**`Example`**

```javascript
if (!0) {
  console.log('Falsy value');
}
```

**`Output`**

```javascript
Falsy value
```

## Type Coercion

JavaScript sometimes automatically converts data types.

**`Example`**

```javascript
console.log('5' + 1);
```

**`Output`**

```javascript
51;
```

**`Example`**

```javascript
console.log('5' - 1);
```

**`Output`**

```javascript
4;
```

**`Example`**

```javascript
console.log(true + 1);
```

**`Output`**

```javascript
2;
```

## typeof Edge Cases

Some typeof results may look strange.

```javascript
typeof null        → object
typeof NaN         → number
typeof []          → object
typeof function(){} → function
```


## Let's Connect
* **Website:** [kousikchowdhury.in](https://kousikchowdhury.in)
* **X (Twitter):** [@csakoushik](https://x.com/csakoushik)