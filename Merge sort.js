// First divide the array into less than, more than pivot till you get arr size at 1

const mergeSort = (arr) => {
  console.log("Arr is " + arr);
  if (arr.length === 1) {
    return arr;
  } else {
    const mid = Math.floor(arr.length / 2);
    console.log("The length of the array is " + arr.length);
    const left = arr.slice(0, mid);
    const right = arr.slice(mid);
    console.table("left is " + left);
    console.table("righ is " + right);
    return merge(mergeSort(left), mergeSort(right));
  }
  console.log("We have a problem");
};

const merge = (left, right) => {
  const sorted = [];
  const m = left.length;
  const n = right.length;
  let l = 0,
    r = 0,
    k = 0;
  while (m > l && n > r) {
    if (left[l] > right[r]) {
      sorted[k++] = right[r++];
    } else {
      sorted[k++] = left[l++];
    }
  }
  return [...sorted, ...left.slice(l), ...right.slice(r)];
};

// const merge = (arr,less,more)
console.log(mergeSort([4, 1, 2, 7]));
console.log(mergeSort([1, 2, 3, 4, 5, 5, 3]));
console.log(mergeSort([5, 4, 3, 2, 1]));
