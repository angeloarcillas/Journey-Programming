pub fn run() {
  // print a string
  println!("Hello, world!");

  // basic formatting
  println!("{}, {}!", "Hello", "World");

  // positional arguments
  println!("{1}, {0}! and {1}", "Hello", "World");

  // named arguments
  println!("{arg1}, {arg2}!", arg1 = "Hello", arg2 = "World");

  // placeholder traits
  println!("Binary: {:b} Hex: {:x} Octal: {:o}", 5, 5, 5);

  // debug trait
  println!("{:?}", ("string", 5, true));

  // using expression
  println!("5 + 5 = {}", 5+5);
}