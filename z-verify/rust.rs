mod print; // import file
mod variables;
mod types;
mod testing;

fn main () {
  println!("Hello World!");
  print::run();
  variables::run();
  types::run();
  tuples::run();
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

}
// testing.rs
pub fn run() {
  assert_eq!("from", "to"); // asserts that two expressions are equal
}