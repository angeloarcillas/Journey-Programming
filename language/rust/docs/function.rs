pub fn run() {
  // call function
  greet("Hello", "John");

  // bind function returned value to variable
  let get_sum = sum(5,5);
  println!("Sum: {}", get_sum);

  // closure
  let z: i8 = 55; // ouside var
  let closure_sum = |x: i8, y: i8| x + y + z;
  println!("Sum: {}", closure_sum(5, 5));
}

// create a function with typed argumens
fn greet(greet: &str, name: &str) {
  println!("{} {}, nice to meet you.", greet, name);
}

// set return value
fn sum(x: i8, y: i8) -> i8 {
  x + y // no semi-colon means return
}