pub fn run() {
  // create a immutable variable
  let foo;

  // crate a mutable variable
  let mut bar;

  // create a constant variable | always immutable
  const USER_ID:i32 = 55;

  // assign multiple variable values
  let (foo, bar) = ("John", 55)

  // array destructing | same as above
  let [foo, bar, baz] = [1, 2, 3];
}