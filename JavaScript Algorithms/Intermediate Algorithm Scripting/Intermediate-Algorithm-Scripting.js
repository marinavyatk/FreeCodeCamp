// 1. Sum All Numbers in a Range
function sumAll(arr) {
  let newArray = [];
  arr.sort((a, b) => a - b);
  for (let i = arr[0]; i <= arr[1]; i++) {
    newArray.push(i);
  }
  return newArray.reduce((prev, curr) => prev + curr);
}
sumAll([1, 4]);

// 2. Diff Two Arrays
function diffArray(arr1, arr2) {
  const newArr = [];
  for (let i = 0; i < arr1.length; i++) {
    if (arr2.indexOf(arr1[i]) < 0) {
      newArr.push(arr1[i]);
    }
  }
  for (let j = 0; j < arr2.length; j++) {
    if (arr1.indexOf(arr2[j]) < 0) {
      newArr.push(arr2[j]);
    }
  }
  return newArr;
}

diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]);

// 3. Seek and Destroy
function destroyer(arr, ...needToDelete) {
  let removed = [...needToDelete];
  let copiedArr = arr.slice();
  for (let i = 0; i < removed.length; i++) {
    if (copiedArr.indexOf(removed[i]) !== -1) {
      while (copiedArr.indexOf(removed[i]) !== -1) {
        copiedArr.splice(copiedArr.indexOf(removed[i]), 1);
      }
    }
  }
  return copiedArr;
}

destroyer([1, 2, 3, 1, 2, 3], 2, 3);

// 4. Wherefore art thou
function whatIsInAName(collection, source) {
  let property = Object.keys(source);
  return collection.filter((el) => {
    for (let i = 0; i < property.length; i++) {
      if (
        !el.hasOwnProperty(property[i]) ||
        el[property[i]] !== source[property[i]]
      ) {
        return false;
      }
    }
    return true;
  });
}

whatIsInAName(
  [
    { first: "Romeo", last: "Montague" },
    { first: "Mercutio", last: null },
    { first: "Tybalt", last: "Capulet" },
  ],
  { last: "Capulet" }
);

// 5. Spinal Tap Case
