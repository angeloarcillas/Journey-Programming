pub fn run() {
  let age: u8 = 5;
  let is_active: bool = false;
  let is_admin: bool = false;

  // if statement
  if age > 55 && is_active || is_admin {
    println!("greater than 55 and active or admin");

  } else if is_active {
      println!("less than 55 and active");

  } else {
    println!("less than 55 and not active");

  }

  // ternary operator
  let is_adult = if age > 21 { true } else { false };
}