const selectionSort = (unsorted) => {
  // get unsorted array length
  const len = unsorted.length;

  // begin sorting
  for (let i = 0; i < len - 1; i++) {
    // set the smallest value
    let smallest = unsorted[i];
    // set the to swap index
    let swapIndex = i;

    // loop to get smallest
    for (let j = i + 1; j < len; j++) {
      // if next element < smallest
      if (unsorted[j] < smallest) {
        // set new smallest value
        smallest = unsorted[j];
        // set new swap index
        swapIndex = j;
      }
    }

    // check if not the same index
    if (i !== swapIndex) {
      // swap
      [unsorted[i], unsorted[swapIndex]] = [smallest, unsorted[i]];
    }
  }

  // return sorted array
  return unsorted;
};

selectionSort([1, 3, 5, 7, 9, 0, 2, 4, 6, 8]);
// console.log(selectionSort([1, 3, 5, 7, 9, 0, 2, 4, 6, 8]));
