function validate(event) {
  // prevent events default actions
  event.preventDefault();

  // create form object containing inputs
  const form = {
    username: document.forms[0]["username"],
    email: document.forms[0]["email"],
    password: document.forms[0]["password"],
    password_confirmation: document.forms[0]["password_confirmation"],
  };

  // validate username
  validateUsername(form.username);

  // validate email
  validateEmail(form.email);

  // validate password and confirm password
  validatePassword(form.password, form.password_confirmation);
}

function validateUsername(username) {
  let error = false; // set error variable

  // if username is empty; error = true
  if (isEmpty(username, "indicator")) {
    error = true;

    // if username is less than 5; error = true
  } else if (min(username, 5, "indicator")) {
    error = true;

    // if username is greater then 55; error = true
  } else if (max(username, 55, "indicator")) {
    error = true;

    // if username has invalid character; error = true
  } else if (invalidChar(username, "indicator")) {
    error = true;
  }

  // add or remove error visual
  if (error) {
    username.classList.add("border-red-400");
    username.classList.remove("border-green-400");
  } else {
    username.classList.add("border-green-400");
    username.classList.remove("border-red-400");
  }
}

function validateEmail(email) {
  let error = false; // set error variable

  // if email is empty; error = true
  if (isEmpty(email, "indicator")) {
    error = true;

    // if email is less than 5; error = true
  } else if (min(email, 5, "indicator")) {
    error = true;

    // if email is greater than 55; error = true
  } else if (max(email, 55, "indicator")) {
    error = true;

    // if email is not in email format; error = true
  } else if (!isEmail(email, "indicator")) {
    error = true;
  }

  // add or remove error visual
  if (error) {
    email.classList.add("border-red-400");
    email.classList.remove("border-green-400");
  } else {
    email.classList.add("border-green-400");
    email.classList.remove("border-red-400");
  }
}

function validatePassword(password, password_confirmation) {
  let errorA = false, // set error variable
    errorB = false;

  // if email is empty; error = true
  if (isEmpty(password, "indicator")) {
    errorA = true;

    // if password is less than 55; error = true
  } else if (min(password, 5, "indicator")) {
    errorA = true;

    // if password is greater than 55; error = true
  } else if (max(password, 55, "indicator")) {
    errorA = true;

    // if password & confirm password didnt match; error = true
  } else if (!match(password, password_confirmation, "indicator")) {
    errorA = true;
    errorB = true;
  }

  // add or remove error visual
  if (errorA) {
    password.classList.add("border-red-400");
    password.classList.remove("border-green-400");
  } else {
    password.classList.add("border-green-400");
    password.classList.remove("border-red-400");
  }

  if (errorA && !errorB) {
    password_confirmation.classList.remove("border-red-400");
    password_confirmation.classList.remove("border-green-400");
  } else if (errorB) {
    password_confirmation.classList.add("border-red-400");
    password_confirmation.classList.remove("border-green-400");
  } else {
    password_confirmation.classList.add("border-green-400");
    password_confirmation.classList.remove("border-red-400");
  }
}

function pwd() {
  // select .meter class
  let indicator = document.querySelector(".meter");
  // select password input
  let password = document.forms[0]["password"];

  // if password is empty
  if (password.value != "") {
    indicator.classList.remove("hidden");
    indicator.classList.add("block");

    // if password is less then 8
    if (password.value.length < 8) {
      indicator.innerText = `Weak Password`;
      indicator.classList.remove("text-green-500");
      indicator.classList.add("text-red-500");
    } else {
      indicator.innerText = `Strong Password`;
      indicator.classList.remove("text-red-500");
      indicator.classList.add("text-green-500");
    }
  } else {
    indicator.classList.remove("block");
    indicator.classList.add("hidden");
  }
}

// check if input is empty
function isEmpty(input, errorTag) {
  let indicator = input.parentNode.querySelector(`.${errorTag}`);
  if (input.value == "") {
    indicator.innerText = `${input.name} is required.`;
    indicator.classList.add("block");
    indicator.classList.remove("hidden");

    return true;
  }

  indicator.classList.remove("block");
  indicator.classList.add("hidden");
  return false;
}

// check if input has invalid character
function invalidChar(input, errorTag) {
  let indicator = input.parentNode.querySelector(`.${errorTag}`);

  if (!input.value.match(/^[\w\d]*$/)) {
    indicator.innerText = `Invalid ${input.name}.`;
    indicator.classList.add("block");
    indicator.classList.remove("hidden");

    return true;
  }

  indicator.classList.remove("block");
  indicator.classList.add("hidden");
  return false;
}

// check if input is less than value
function min(input, value, errorTag) {
  let indicator = input.parentNode.querySelector(`.${errorTag}`);

  if (input.value.length < value) {
    indicator.innerText = `Too short, min is ${value}.`;
    indicator.classList.add("block");
    indicator.classList.remove("hidden");

    return true;
  }

  indicator.classList.remove("block");
  indicator.classList.add("hidden");
  return false;
}

// check if input is greater than value
function max(input, value, errorTag) {
  let indicator = input.parentNode.querySelector(`.${errorTag}`);

  if (input.value.length > value) {
    indicator.innerText = `Too long, max is ${value}.`;
    indicator.classList.add("block");
    indicator.classList.remove("hidden");

    return true;
  }

  indicator.classList.remove("block");
  indicator.classList.add("hidden");
  return false;
}

// match two inputs
function match(a, b, errorTag) {
  let indicator1 = a.parentNode.querySelector(`.${errorTag}`);
  let indicator2 = b.parentNode.querySelector(`.${errorTag}`);

  // if input 1 and input 2 is equals
  if (a.value == b.value) {
    indicator1.classList.remove("block");
    indicator1.classList.add("hidden");
    indicator2.classList.add("block");
    indicator2.classList.remove("hidden");

    return true;
  }

  indicator1.innerText = `${a.name} and ${b.name} didnt match.`;
  indicator1.classList.add("block");
  indicator1.classList.remove("hidden");
  indicator2.classList.add("block");
  indicator2.classList.remove("hidden");
  return false;
}

// check if email is valid email format
function isEmail(input, errorTag) {
  let indicator = input.parentNode.querySelector(`.${errorTag}`);

  // match email format regex
  if (input.value.match(/\S+@\S+\.\S{2,3}/)) {
    indicator.classList.remove("block");
    indicator.classList.add("hidden");
    return true;
  }

  indicator.innerText = `Invalid ${input.name}.`;
  indicator.classList.add("block");
  indicator.classList.remove("hidden");

  return false;
}
