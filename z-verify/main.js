// fix excessive spaces
let p = `this is
a string`.trim();

let string = `something ${1 + 2 + 3}`;
let string2 = `something ${foo() ? "x" : "y"}`;

// template tags
const Button = styled.button`
  font-size: 1.5em;
  background-color: black;
  color: white;
`;

// apollo template tags
const query = gql`query { }`;

// Destructuring
const a = [1, 2, 3, 4, 5];
const [first, second, , , fifth] = a; // [1,2,5]

// for...of - iterates over the property values
// for...in - iterates the property names

// CLASS
class Person {
  hello() {
    return "Hello, I am a Person.";
  }
}

class Programmer extends Person {
  hello() {
    // access parent
    return `${super.hello()}  I am also a programmer.`;
  }

  // static
  static walk() {
    return `walking...`;
  }

  // getter
  get name(value) {
    this.name = value;
  }

  // setter
  set name() {
    return this.name;
  }
}

const p = new Programmer();
p.hello(); // Hello, I am a Person. I am also a programmer

// # PROMISE

// bad
doSomething((result) => {
  doSomethingElse((anotherResult) => {
    doSomethingElseAgain((yetAnotherResult) => {
      console.log(result);
    });
  });
});

// good
doSomething()
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.log(error);
  });

// better
const doSomething = new Promise((resolve, reject) => {
  resolve(); // .then()
  reject(); // .catch()
});

// # Async & Await
const doSomething = async () => {
  const data = await getData();
  console.log(data);
};

Promise.all([p1, p2]); // resovle all
Promise.race([p1, p2]); // resolve 1st finished promise

// // MODULE
// // uppercase.js
// export default str => str.toUpperCase();

// // https://flaviocopes.com/javascript-async-defer/

// // main.js
// import toUpperCase from './uppercase.js';
// toUpperCase('test'); // TEST

// // multi-export.js
// const a = 1;
// const b = 2;
// const c = 3;

// export { a, b, c };

// // main.js
// import * from './multi-export.js'; // import everything
// // import { a, b as two, c } from './multi-export.js'; // import a, b rename to two, c

// // import React, { Component } from'react' // default and named export

// SET - same as map but set has no key
const s = new Set();
s.add("one"); // add an item
s.delete("one"); // remove an item
s.has("one"); // check if item exists
s.size; // number of all items
s.clear(); // remove all items
s.keys(); // Set() item keys
s.values(); // Set() item values
s.entries(); // convert to iterable

// MAP
const m = new Map();
m.set("key", "value"); // add an item
m.get("key"); // get an item
m.delete("target"); // delete an item
m.clear(); // delete all item
m.has("target"); // check if item exists
m.size; // number of all items
m.keys();
m.values();
m.entries();

//
const person = {
  name: "John",
  age: 55,
};

Object.values(person); // ['john', 55]
Object.entries(person); // [['name','john'], ['age', 55]]

const doSomethingAsync = () => {
  return new Promise((resolve) => {
    setTimeout(() => resolve("I did something"), 3000);
  });
};
const doSomething = async () => {
  console.log(await doSomethingAsync());
};
console.log("Before");
doSomething();
console.log("After");

// #result
// Before
// After
// I did something

// async iterable object as the loop iteration
for await (const line of readLines(filePath)) {
  console.log(line);
}
