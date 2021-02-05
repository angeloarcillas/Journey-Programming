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
function func(){} // function declaration
let func = function (){} // function expression

// arrow function
let func = () => "expression";

// multi-line arrow function
let func = () => {
  return "multi-line";
}

debugger; // pause the code
