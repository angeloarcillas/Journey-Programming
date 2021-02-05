const bubbleSort = (unsorted) => {
  // get unsorted array length
  const len = unsorted.length;
  // declare swapped for do .. while(swapped)
  let swapped;

  do {
    // indicate not swapped
    swapped = false;

    // loop through unsorted array
    for (let i = 0; i < len; i++) {
      // set left & right elements
      let leftElement = unsorted[i];
      let rightElement = unsorted[i + 1];

      // compare elements
      if (leftElement > rightElement) {
        // swap elements
        unsorted[i] = rightElement;
        unsorted[i + 1] = leftElement;

        // indicate swapped
        swapped = true;
      }
    }
  } while (swapped);

  // return sorted array
  return unsorted;
};

bubbleSort([1, 3, 5, 7, 9, 0, 2, 4, 6, 8])
// console.log(bubbleSort([1, 3, 5, 7, 9, 0, 2, 4, 6, 8]));
