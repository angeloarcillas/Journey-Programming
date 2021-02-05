let insertionSort = (unsorted) => {
  let len = unsorted.length;

  // loop through array
  for (let i = 1; i < len; i++) {
    // set key to compare
    let key = unsorted[i];
    // second iteration value
    let j = i - 1;

    // compare backwards
    while (j >= 0 && unsorted[j] > key) {
      // index of next to lowest value
      unsorted[j + 1] = unsorted[j];
      j -= 1;
    }
    // set currentIndexValue
    unsorted[j + 1] = key;
  }

  // return sorted
  return unsorted;
};

insertionSort([1, 3, 5, 7, 9, 0, 2, 4, 6, 8]);
// console.log(insertionSort([1, 3, 5, 7, 9, 0, 2, 4, 6, 8]));
