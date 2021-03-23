// inline module
mod my_module {
  // create a public function
  pub fn run() {
    println!("Module is Working...")
  }
}

// import module
mod file;

// change path
#[path = "foo.rs"] // file
mod c;

fn main() {
  // call public function run from module
  my_module::run();
  file::run();
}