// "use strict";

/**
 * Variables
 */
var foo; // global scope
let bar; // local scope

// same as let,
// but they cannot be reassigned
const baz = null;
const FOOBAR = null;

/**
 * Data Types
 */

// number
let n = 123; // integer
n = 12.3; // float
n = 10n; // BigInt
n = 1 / 0; // infinity
n = Infinity;
n = "str" / 2 + 5; // not a number(NaN)

// string
let s = "Hello World!";

// boolean
let var_bool = true;
var_bool = false;

// special type
let var_null = null;
let var_undefined = undefined;

// object
let var_object = {
  name: "john",
  age: 55,
};

// check the type of the variable
typeof x || typeof x;

/**
 * Type Conversion
 */

String();
Number();
Boolean();

/**
 * Math operator
 */
x = 5 + 2; // 7
x = 5 - 2; // 3
x = 5 * 2; // 10
x = 5 / 2; // 2.5
x = 5 % 2; // 1 | remainder
x = 2 ** 5; // 32 | exponentiation

// increment | decrement
x++;
x--;
++x;
--x;

/**
 * Comparison
 */
let a = 1;
let b = 2;

a > b; // true | a is greater than b
a < b; // false | a is less than b

a = 2;
a >= b; // true | a is greater than or equals to b
a <= b; // true | a is less than or equals to b

a = "2";
a == b; // true | a is equals to b
a === b; // false | a is strict equals to b

/**
 * Logical Operator
 */
a || b; // either value needs to be true
a && b; // both value needs to be true
!a; // inverse value
let nullCoalescing = a ?? b; // Nullish coalescing operator
a ?? b ?? c;
a || b || c; // a or b or c

/**
 * If statement
 */

if (true) {
  // execute if condition is true
} else if (true) {
  // execute if 1st condition is true and
  // if current condition is true
} else {
  // execute if conditions fail
}

if (true) "true";
else "false";

true ? "true" : "false"; // ternary operator

/**
 * Loops
 */

// check condition
while (true) {
  // code...
}

// execute then check condition
do {
  // code....
} while (true);

// begin, condition, steps
for (let i = 0; i < 10; i++) {
  // code...
}

break; // stop current loop

// skip the rest of the current iteration
// and continue next iteration
continue;

// break labels
outer: for (let i = 0; i < 10; i++) {
  break outer;
}

/**
 * Switch statement
 */
switch (key) {
  case value:
    // code...
    break;

  case value2:
    // code...
    break;

  default:
    // code...
    break;
}

/**
 * Functions
 */

function greet(name = "John") {
  let time = "Morning";
  console.log(`Good ${time}!, ${name}`); // Good Morning!, Doe
}

greet("Doe");
function func() {} // function declaration
let func = function () {}; // function expression

// Arrow function
// 1. Does not have its own this object.
// 2. Implicit return value when brackets are omitted.
// 3. Always an expression, never a statement.

let func = () => "expression";

// multi-line arrow function
let func = () => {
  return "multi-line";
};

debugger; // pause the code

/**
 * Objects
 */

// used on computed property
let fruit = prompt("Which fruit to buy?", "apple");

// object
let user = {
  name: "John", // key: value
  age: 30,
  "last name": "Doe", // multiword key
  [fruit]: 5, // computed property
  [fruit + "Fruit"]: 5, // appleFruit
  sizes: { // object inside an object
    height: 182,
    width: 50,
  },
  greet() { // method property
    alert('Hi!');
  },
  chain() {
    return this;  // used for method chaining
  }
};

console.log(user.name); // John | access property
console.log(user["last name"]); // Doe | access multiword key

// add property
user.isAdmin = true;

// remove property
delete user.age;

console.log("age" in user); // false | check if exists

// property value shorthand
function makeUser(name, age) {
  return {
    name, // same as name: name
    age, // same as age: age
  };
}

for (const key in user) {
  console.log(key); // name
  console.log(user[key]); // John
}

let a = {};
let b = a; // referenced
a.age = 1;
console.log(a === b); // true

let x = 1;
let y = x;
x = 2;
console.log(a === b); // false

// Object.assign(placeholder, ...properties)
let user = {
  name: "John",
};

// add/merge property to placeholder
let clone = Object.assign({}, user);

// Object methods and this
let user = {
  name: 'John',
  greet() { // object method
    alert(`Hi! ${this.name}`) // Hi! John | `this` refers to object name
  },

}
