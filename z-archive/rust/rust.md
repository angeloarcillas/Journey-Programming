## Syntax
```rs
fn main()
{
    print!("Hello World!");
}
```

## Types
## Variables
## Operators
## Control Structures
## Loops
## Functions
## Class and Objects
## Resource


## Variables & Mutablity
```rs
// let <var> = <value>;
// const <VAR>: <type> = <value>;

let x = 1; // immutable
let mut x = 1; // mutable
const FOO_BAR: u32 = 100_000; // immutable(always)
```

**Shadowing**
> override immutable/datatype.

```rs
let x = 1;
let x = x + 2;
let x = x * 3;
print!("{}", x); // 9

let x = "   ";
let x = x.len();
print!("

```

## Datatypes
* Integer
* Float
* Boolean
    - true | false
* Character
* Array
* Tuple

<br>

**Integer**

| Length         | Signed       | Unsigned     |
| :------------- | :----------: | -----------: |
|  8-bit         | i8           | u8           |
|  16-bit        | i16          | u16          |
|  32-bit        | i32          | u32          |
|  64-bit        | i64          | u64          |
|  128-bit       | i128         | u128         |
|  arch          | isize        | usize        |

<br>

**Float**

```rs
let x = 1.0; // f64
let y: f32 = 2.0; // f32
let z: i32 = 3i32 // suffix
```

**Tuple**
```rs
let tup: (i32, f64, u8) = (500, 6.4, 1);
let (x, ,y z) = tup;
let x = tup.0;
let y = tup.1;
let z = tup.2;
```

**Array**
```rs
// lex <var>: [<type>; <size>] = [<value>];

let x: [i32; 5] = ["a","b", 1, 2];
let a = x[0];
let b = x[1];


let a = [3; 5]; // same as `let a = [3, 3, 3, 3, 3]`;
```

## Functions

```rs
fn main() {
    println!("Hello World!");
    talk();
    foo(1,2, "x and y");
    plus_one(5)
}

// custom function
fn talk() {
    // Implicit return (no semicolon)
    println!("Talking");
}

// function w/ parameters
fn foo(x: i32, y:i32, z: &str) {
    println!("{} and {} : {}", x,y,z);
}

// set return type
fn plus_one(x: i32) -> i32 {
    x + 1
}
```

## Control Structures

**If statement**
```rs
// !NOTE: Rust will not automatically try to convert non-Boolean types to a Boolean.
if n % 2 == 0 {
    println!("Divisible by 2");
} else if n % 3 == 0 {
    println!("Divisible by 3");
} else {
    println!("Not divisible by 2 or 3");
}
```
**Ternary operator**
```rs
let result = if n > 5 { true } else { false };
```

## Loops

```rs
// Loop
loop {
    if x {
        break;
    }
}

// while
let n = 3;
while n != 0 {
    n-=1;
}
println!("END");

// for
let a = [10, 20, 30, 40, 50];

for element in a.iter() {
    println!("the value is: {}", element);
}
````