const quickSort = (arr) => {
  if (arr.length <= 1) return arr

  const pivot = arr.shift();
  let left = [];
  let right = [];
  left = arr.filter(val => val < pivot);
  right = arr.filter(val => val >= pivot);

  return quickSort(left).concat(pivot).concat(quickSort(right));
};

const sortMe = [5, -10, 20, 100, 0.1, 1, 20, 30, -100, 10000, 400, 20, 45, -74];

console.log(quickSort(sortMe));
