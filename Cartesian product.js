// Implementing cartesian product

const cartesianProduct = (arr1, arr2) => {
  const result = [];
  for (i of arr1) {
    for (j of arr2) {
      result.push([i, j]);
    }
  }
  return result;
};

console.log(cartesianProduct([1, 2], [3, 4]));
