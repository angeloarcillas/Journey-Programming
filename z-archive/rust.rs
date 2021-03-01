use std::io; // use input/output from standard library

fn main() {
    println!("Guess the number!"); // call print macro(!)
    println!("Please input your guess.");
    let mut guess = String::new(); // new, empty instance of a String

    io::stdin() // std::io::stdin()
        .read_line(&mut guess) // read user input | reference mutable guess
        .expect("Failed to read line"); // catch error

    println!("You guessed: {}", guess);

    let x = 1;
    let y = 2;
    print("{} and {}", x, y); // {} => placeholder
}