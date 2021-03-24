// enum: enumerate possible values
enum SimpleEnum {
    FirstVariant,
    SecondVariant,
  }

enum EmptyEnum { }

enum ComplexEnum {
  // variable
  Nothing,

  // function
  Something(u32),

  // struct
  Click { x: i64, y: i64 },

  // using defined struct
  Move(Point),
}

struct Point {
  x: u8,
  y: u8,
}

fn run(foo: ComplexEnum) {
  // enum usage
  match foo {
    ComplexEnum::Nothing => println!("Nothing..."),
    ComplexEnum::Something(x) => println!("{}", x),
    ComplexEnum::Click {x, y} => println!("x:{}, y: {}", x, y),
    ComplexEnum::Move(p) => println!("{:?}", p),
  }
}