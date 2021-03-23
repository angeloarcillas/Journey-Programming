// impl: similar to class

pub fn run() {

  impl Person {

  fn new(first: &str, last: &str) -> Person { // return struct Person
    // struct Person
    Person {
      first_name: first.to_string(), // &str => String
      last_name: last.to_string(),
    }
  }
  // a.full_name(&self) == full_name(a: &self)
  fn full_name(&self) -> String {
    format!("{} {}", self.first_name, self.last_name)
  }


  fn set_last_name(&mut self, last: &str) {
    self.last_name = last.to_string();
  }

  fn to_tuple(self) -> (String, String) {
    (self.first_name, self.last_name)
  }
}

fn main() {
  let mut person = Person::new("John", "Doe");

  // print first and last name of person
  println!("Person: {} {}", person.first_name, person.last_name);

  // change the last name of person
  person.set_last_name("Smith");

  // print the full name of person
  println!("Person: {}", p.full_name());

  // get tuple of person first and last name
  println!("Person Tuple: {:?}", p.to_tuple());
}