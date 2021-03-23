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