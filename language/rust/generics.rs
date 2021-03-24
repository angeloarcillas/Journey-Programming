// generics: can use many different concrete data types

// syntax
fn foo<T>(arg: T) { ... }

// define generic type on struct Point
struct Point<T> {
    x: T,
    y: T,
}

fn main() {
  // set struct Point values
  let integer = Point { x: 5, y: 10 };
    let float = Point { x: 1.0, y: 4.0 };
}