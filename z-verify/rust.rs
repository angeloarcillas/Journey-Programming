mod print; // import file
mod variables;
mod types;
mod conditional;
mod loops;
mod functions;
mod pointers;
mod testing;

fn main () {
  println!("Hello World!");
  print::run();
  variables::run();
  types::run();
  tuples::run();
  conditional::run();
  loops::run();
  functions::run();
  pointers::run();
  testing::run();
}


// print.rs
pub fn run() {
  // print console
  println!("Hello From myFile.rs");

  // basic formatting
  println!("{} is {} years old", "John", "55");

  // positional arguments
  println!("{0} is {1} years old and {0} likes {}", "John", "55", "to code");

  // named arguments
  println!("{name} is {age} years old", name = "John", age = "55");

  // placeholder traits
  println!("Binary: {:b} Hex: {:x} Octal: {:o}", 5, 5, 5);

  // placeholder for debug traits
  println!("{:?}", (5,true,"string")); // accept one or more value

  // basic math
  println!("5 + 5 = {}", 5+5);
}


// variables.rs
pub fn run() {
  let a; // immutable
  let mut b; // mutable
  const ID:i32 = 55; // always immutable
  let (a, b) = ("John", 55) // assign multiple vars
}

// types.rs
pub fn run() {
  // NUMBER

  // defaults
  let x = 1; // i32
  let y = 1.0; // f64
  let z: i8 = 1; // add explicit type
  println!("{}", std::i32::MAX) // find max size | std::[TYPE]::MAX

  // BOOLEAN
  let is_active = true;
  let is_admin = false;
  let is_greater: bool = 1 > 0;

  // CHAR
  let c = 'A';

  // UNICODE
  let c = '\u{1F600}';

  // STRING
  let a = "this is a str"; // &str: immutable
  let a = String::from("this is a String"); // String: growable heap

  let mut hello = String::from("Hello ");

  hello.push('W'); // push char
  hello.push_str("orld!"); // push str

  println!("length: {}", hello.len()); // number of bytes currently stored in the buffer
  println!("max: {}", hello.capacity()); // size of the buffer in bytes
  println!("max: {}", hello.is_empty()); // check if empty
  println!("max: {}", hello.contains("World")); // check if exists
  println!("max: {}", hello.replace("World", "There")); // replace a string

  // split by white space
  for word in hello.split_whitespace() {
    println!("{}", word);
  }

  // set capacity
  let mut s = String::with_capacity(25);

  println!("{}", s.capacity());

  // loop 5 times
  for _ in 0..5 {
    s.push_str("hello");
    println!("{}", s.capacity());
  }


  // ARRAY
  let numbers: [i32; 5] = [1,2,3,4,5]; // var: [type; size] = value

  // reassign value
  let mut numbers2: [i32; 5] = [1,2,3,4,5];
  numbers2[2] = 20;

  println!("{}", numbers[1]); // 2
  println!("{}", numbers.len()); // array length
  println!("{}", std::mem::size_of_val(&numbers); // bytes occupied

  // slice an array
  let sliced: [&i32] = &numbers[0..2]; // 1,2
  println!("{:?}", sliced);



  // TUPLES
  let person: (&str, &str, i8) = ("John", "Doe", 55);

  // access tuple
    println!("{} {} is {} years old",
    person.0,
    person.1,
    person.2
  );

  // VECTORS: resizable array
  let vec_nums:Vec<i32> = vec![1,2,3,4,5];
  vec_nums.push(6) // append value
  vec_nums.pop() // remove last value

  for x in vec_nums.iter() {} // .iter(): iterable
  for x in vec_nums.iter_mut() { // .iter_mut(): mutable iterable
    *x = x * 2; // change the value of x | *x: dereference operator
  }
}

// conditional.rs
pub fn run() {
  let age: u8 = 5;
  let is_active: bool = false;
  let is_admin: bool = false;
  if age > 55 && is_active || is_admin {
    println!("greater than 55 and active or admin")
  } else if is_active{
      println!("less than 55 and active")
  } else {
    println!("less than 55 and not active")
  }

  // ternary operator
  let is_adult = if age > 21 { true } else { false };
}

// loops.rs
pub fn run() {
  let mut count: u8 = 0;

  // infinite loop
  loop {
    count +=1;
    println!("number: {}", count);

    if count == 20 {
      break; // stop loop
    }
  }

  // while loop
  while count <= 100 {
    if count % 15 == 0 {
      println!("fizzbuzz");
    }

    if count % 3 == 0 {
      println!("fizz");
    }

    if count % 5 == 0 {
      println!("buzz");
    } else {
      println!("{}", count);
    }
    count += 1;
  }

  // for loop
  for x in 0..10 {
    println!("number: {}", x);
  }
}

// functions.rs
pub fn run() {
  greet("Hello", "John");

  // bind function returned value to variable
  let get_sum = sum(5,5);
  println!("Sum: {}", get_sum);

  // closure
  let z: i8 = 55; // ouside var
  let closure_sum = |x: i8, y: i8| x + y + z;
  println!("Sum: {}", closure_sum(5, 5));
}

fn greet(greet: &str, name: &str) {
  println!("{} {}, nice to meet you.", greet, name);
}

fn sum(x: i8, y: i8) -> i8 {
  x + y // no semi-colon means return
}

// pointers.rs
pub fn run() {
  // points to a resource memory

  // primitive array
  let arr1 = [1,2,3];
  let arr2 = arr1;
  println!("{:?}", (arr1, arr2));

  // vector
  let vec1 = vec!([1,2,3]);
  let vec2 = &vec1;
  println!("{:?}", (&vec1, vec2));
}


// struct.rs
pub fn run() {

}




  // testing.rs
pub fn run() {
  assert_eq!("from", "to"); // asserts that two expressions are equal
}
