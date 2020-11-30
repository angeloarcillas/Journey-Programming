let maxSpecials = document.querySelector("#maxSpecials");
maxSpecials.addEventListener("input", function () {
  maxSpecials.parentNode.querySelector("span").innerHTML = maxSpecials.value;
});

let maxNumbers = document.querySelector("#maxNumbers");
maxNumbers.addEventListener("input", function () {
  maxNumbers.parentNode.querySelector("span").innerHTML = maxNumbers.value;
});

let length = document.querySelector("#length");
length.addEventListener("input", function () {
  length.parentNode.querySelector("span").innerHTML = length.value;
});

let input = document.querySelector("#input");

function generate() {
  let specials = ["!", "@", "#", "$", "%", "^", "&", "*", "|", "-"],
    letters = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ".split(""),
    numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
    pattern = [];

  if (length.value <= 39) {
    if (maxSpecials.value > 0) {
      pattern.push(shuffle(specials).splice(-maxSpecials.value));
    }

    if (maxNumbers.value > 0) {
      pattern.push(shuffle(numbers).splice(-maxNumbers.value));
    }

    let counter =
      parseInt(length.value) -
      (parseInt(maxSpecials.value) + parseInt(maxNumbers.value));
    if (counter < 0) {
      alert(
        "Please increase the password length or reduce the special characters or numbers"
      );
    } else {
      pattern.push(shuffle(letters).splice(-counter));
      input.value = pattern.toString().replace(/,/g, "");
    }
  } else {
    let pattern2 = pattern.concat(specials, numbers, letters);

    if (length.value > 210) {
      let pattern3 = pattern.concat(specials, numbers, letters);
      let pattern4 = pattern.concat(specials, numbers, letters);
      let pattern5 = pattern.concat(specials, numbers, letters);
      pattern2.push(pattern3, pattern4, pattern5);

      input.value = shuffle(pattern2.toString().split(","))
        .splice(-length.value)
        .toString()
        .replace(/,/g, "");
    } else if (length.value > 130) {
      let pattern3 = pattern.concat(specials, numbers, letters);
      let pattern4 = pattern.concat(specials, numbers, letters);
      pattern2.push(pattern3, pattern4);

      input.value = shuffle(pattern2.toString().split(","))
        .splice(-length.value)
        .toString()
        .replace(/,/g, "");
    } else {
      let pattern3 = pattern.concat(specials, numbers, letters);
      pattern2.push(pattern3);

      input.value = shuffle(pattern2.toString().split(","))
        .splice(-length.value)
        .toString()
        .replace(/,/g, "");
    }
  }
}

function copy() {
  input.select();
  input.setSelectionRange(0, 99999);
  document.execCommand("copy");
  alert("Copied: " + input.value);
}

// Fisher-Yates shuffle
function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}
