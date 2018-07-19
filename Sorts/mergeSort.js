const sort = (arr1, arr2) => {
  let tempArr = [];
  while ( arr1.length > 0 && arr2.length > 0 ) {
    if ( arr1[0] < arr2[0] ) {
      tempArr.push(arr1.shift());
    }
    else {
      tempArr.push(arr2.shift());
    }
  }
  return tempArr.concat(arr1).concat(arr2);
};

const mergeSort = (arr) => {
  if ( arr.length <= 1 ) return arr;

  const mid = Math.floor(arr.length / 2);
  const left = arr.slice(0,mid);
  const right = arr.slice(mid,arr.length);

  return sort( mergeSort(left), mergeSort(right) );
};

const sortMe = [5, -10, 20, 100, 0.1, 1, 20, 30, -100, 10000, 400, 20, 45, -74];

console.log(mergeSort(sortMe));
