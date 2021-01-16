## Scope
```js
let x = 1

if (true) {
    let x = 2
    let y = 3
    console.log(x) // 2
    console.log(y) // 3
}

console.log(x) // 1
console.log(y) // reference error: y is not defined
```

## Datatypes
* [Number](#Number)
    - 1,2,3
* [String](#String)
    - "Foobar"
* Boolean
    - `true` or `false`
* Null
    - declared but empty
* Undefiend
    - undeclared
* [Array](#Array)
* [Object](#Object)
    -  {name: 'foobar', age: 7}
* [Symbol](#Symbol)

## Number
```js
// Math operator
const x = 7, y = 9
x ** y         // 4782969
x / y          // 1.285
x * y          // 63
x + y          // 16
x - y          // 2
x % y          // 2

/* increment/decrement */
x++            // +1
x--            // +2
x+=5           // +5
x-=5           // -5
x*=5           // *5
x/=5           // /5

NaN            // Not a number

```

## String
```js
let str = "FooBar"
str[0]                    // F
str.length                // 6
str.toLowerCase()         // foobar
str.toUpperCase()         // FOOBAR
str.indexOf('B')          // 3
str.lastIndexOf('o')      // 2
str.slice(0, 3)           // Foo (start, end)
str.substr(2, 3)          // oBa (start, length)
str.replace('o', 'e')     // FeoBar
str.includes('B')         // true
```

## Array
```js
let col = ['foo', 'bar', 'baz', 1, 2, 3]
col.indexOf('baz')             // 2
col.concat(['foo2', 'bar2'])   // [... 2, 3, foo2, bar2]
col.push('foobar')             //  [... 2, 3, 'foobar']
col.pop()                      // [... 1, 2]
col['1'] = 'foobar'            // overide value
col.length                     // 6
col .join(',')                 // "foo,bar,baz,1,2,3"
col.includes('baz')            // false
```

## Object
## Symbol


###  Template String
```js
const name = 'Foo'
const age = 7
str = `Name: ${name} and Age: ${age}`
```

## Comparison operator
```js
let x  = 1
x == 2           // false
x != 2           // true
x < 2            // true
x > 2            // false
x <= 2           // true
x >= 2           // false
x === '1'        // false | strict comparison
x != 1           // false | logical not
```

```js
typeof str      // string
typeof num      // number

// Type casting
Number('77')    // 77
String(77)      // '77'
Boolean(1)
```



## Control Flow
```js
// if statement
if (true) {
    // ...
} else if () {
    // ...
} else {
    // ...
}

// switch statement
switch (key) {
    case value:
        // ...
        break;

    default:
        // ...
        break;
}

// Loops
for (let i=0; i<n; i++) { ... }
for (let key in iterable) { ... }
while (true) { ... }
do { ... } while (true)

iterable.forEach((value, key) => {
    // ...
});

break                  // stop lop
continue               // ignore below then next iteration
```

## Functions
```js
// declaration
function name() {
    // ...
}

// expression
cost a = function() {
    // ...
}

// arrow
cost a = () => 'foobar'

cost a = () => {
    // ...
}
```

## Object

```js
// syntax
let object = {
    foo: 'string',
    bar: 123,
    baz: [
        { foo: 'a', bar: 1 },
        { foo: 'b', bar: 2 },
        { foo: 'c', bar: 3 },
        ],
    foobar() {

    }
}

// update object properties
object.foo = 'Hello';       // v1

let a = 'foo';
object[a] = 'World!';   // v2
```

## Etc

**Primitive Type**
> stored on stack

- string
- number
- boolean
- null/undefined
- symbol

**Reference Type**
> stored on heap

- array
- object
- function
- date


```js
const obj1 = {a: 1 b: 2};
const obj2 = obj; // referenced to obj1
obj1.a = 3; // obj1 === obj2
obj2.a = 4; // obj1 === obj2
```