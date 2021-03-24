pub fn run() {

  // NUMBER

  // integer | i32 (default type) | integer 32-bit
  let x = 1;

  // float | f64 (default type)
  let y = 1.0;

  // add explicit type
  let z: i8 = 1;

  // get max size | std::[TYPE]::MAX
  println!("{}", std::i32::MAX)

  // BOOLEAN
  let is_active = true;
  let is_admin = false;
  let is_more: bool = 1 > 0; // true

  // CHAR
  let char = 'A';

  // UNICODE
  let unicode = '\u{1F600}';

  // STRING

  // &str: not growable
  let a = "this is a str";

  // String: growable heap
  let mut hello = String::from("Hello ");

  hello.push('W'); // push char
  hello.push_str("orld!"); // push str
  hello.len(); // string length | number of bytes currently stored in the buffer
  hello.capacity(); // size of the buffer in bytes
  hello.is_empty(); // check if empty
  hello.contains("World"); // check if exists
  hello.replace("World", "There"); // replace a string

  // set capacity
  let mut set_capacity = String::with_capacity(25);
  println!("{}", s.capacity());

  // split by white space
  for word in hello.split_whitespace() {
    println!("{}", word);
  }

  // loop 5 times | '_' wildcard pattern: ignore values when they don't matter
  for _ in 0..5 {
    s.push_str("hello");
    println!("{}", s.capacity());
  }

  // ARRAY
  let numbers: [i32; 5] = [1,2,3,4,5]; // var: [type; size] = value

  // reassign value
  let mut numbers2: [i32; 5] = [1,2,3,4,5];
  numbers2[2] = 20;

  // get index value
  println!("{}", numbers[1]); // 2

  // array length
  println!("{}", numbers.len());

  // bytes occupied
  println!("{}", std::mem::size_of_val(&numbers);

  // slice an array
  let sliced: [&i32] = &numbers[0..2]; // 1,2
  println!("{:?}", sliced);

  // TUPLES
  let person: (&str, &str, i8) = ("John", "Doe", 55);

  // get tuple
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