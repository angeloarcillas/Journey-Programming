## Syntax
## Types
## Variables
## Operators
## Control Structures
## Loops
## Functions
## Class and Objects
## Resource









# Javascript

// Loop through objects
Object.keys(arr).forEach(x => console.log(x));
Object.values(arr).forEach(x => console.log(x));
Object.entries(arr).forEach(x => console.log(x));

**accumulate**
```js
// +acc.slide() => unary plus
let accumulate = (...nums) => nums.reduce((acc, n) => [...acc, n + +acc.slice(-1)],[]);

// 1, 1+2, 1+2+3, 1+2+3+4
accumulate(1, 2, 3, 4); // output: [1, 3, 6, 10]
```

**ETC**
```js
/**
 * Return true if every value is the same
 */
// v2
let all = arr => arr.every(x => x === arr[0]);

// 1 === 1, 1 === 2, 1 === 3
all([1, 2, 3]); // false
// 1 === 1, 1 === 1, 1 === 1
all([1, 1, 1]); // true

// v2
let all = (arr, fn = Boolean) => arr.every(fn);
// 4 > 1, 2 > 1, 3 > 1
all([4, 2, 3], x => x > 1); // true
all([1, 2, 3]); // true
```
