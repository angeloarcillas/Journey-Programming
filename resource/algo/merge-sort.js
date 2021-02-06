// TODO: debug
function mergeSort(unsorted) {
  // get half of unsorted array
  // round up the number
  const half = Math.ceil(unsorted.length / 2);

  // if only 1 return
  if (unsorted.length < 2) return unsorted;

  // recursive sort
  return merge(
    mergeSort(unsorted.splice(0, half)), // left
    mergeSort(unsorted) // right
  );
}

function merge(left, right) {
  // array holder
  let sorted = [];

  // if left or right array is empty then return
  while (left.length && right.length) {

    // pick smallest element of left and right sub arrays
    if (left[0] < right[0]) {
      // less
      sorted.push(left.shift());

    } else {
      // greater
      sorted.push(right.shift());
    }
  }

  //concat leftover elements
  return [...sorted, ...left, ...right];
}

mergeSort([1, 3, -5, 7, 9, 0, -2, 4, 6, -8]);
// console.log(mergeSort([1, 3, -5, 7, 9, 0, -2, 4, 6, -8]));
