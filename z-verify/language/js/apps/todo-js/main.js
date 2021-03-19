// Create a "close" button and append it to each list item
let addCloseBtn = () => {
  let ul = document.querySelector("#target");
  let li = ul.querySelectorAll("li");

  for (let i = 0; i < li.length; i++) {
    li[i].innerHTML += `<button class="text-2xl font-bold"
        onclick="this.parentNode.style.display='none'">&times;</button>`;
  }
};

// add visual for checked todo
let addCheckEvent = () => {
  let list = document.querySelector("#target");
  list.addEventListener("click", function (el) {
    if (el.target.tagName === "LI") {
      el.target.classList.toggle("line-through");
      el.target.classList.toggle("text-gray-700");
      el.target.classList.toggle("bg-gray-200");
    }
  });
};

// Create a todo
function createTodo() {
  let input = document.querySelector(".input");

  if (input.value == '') {
    alert("You must write something.");

  } else {
    let list = document.querySelector("#target");
    let close = `<button class="text-2xl font-bold"
            onclick="this.parentNode.style.display='none'">&times;</button>`;

    list.innerHTML = `<li class="border p-4 flex justify-between">
            <span>${input.value}</span>${close}</li> ${list.innerHTML}`;
  }

  input.value = "";
}

// create todo by pressing  `enter` on keyboard
function createTodoUsingEnter(event) {
    if (event.keyCode === 13) {
        createTodo();
    }
}

addCloseBtn();
addCheckEvent();