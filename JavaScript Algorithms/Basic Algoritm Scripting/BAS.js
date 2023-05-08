// 1. Convert Celsius to Fahrenheit
function convertCtoF(celsius) {
  let fahrenheit = (celsius * 9) / 5 + 32;
  return fahrenheit;
}

convertCtoF(30);

// 2. Reverse a String
function reverseString(str) {
  return str.split("").reverse().join("");
}

reverseString("hello");

// 3. Factorialize a Number
function factorialize(num) {
  let result = 1;
  for (let i = 1; i <= num; i++) {
    result *= i;
  }
  return result;
}

factorialize(5);

// 4. Find the Longest Word in a String
function findLongestWordLength(str) {
  return Math.max(...str.split(" ").map((el) => (el = el.length)));
}
findLongestWordLength("The quick brown fox jumped over the lazy dog");

// 5. Return Largest Numbers in Arrays
function largestOfFour(arr) {
  let newArr = [];
  arr.forEach((el) => {
    newArr.push(Math.max(...el));
  });
  return newArr;
}

largestOfFour([
  [4, 5, 1, 3],
  [13, 27, 18, 26],
  [32, 35, 37, 39],
  [1000, 1001, 857, 1],
]);

// 6. Confirm the Ending
function confirmEnding(str, target) {
  return str.slice(-target.length) === target;
}

confirmEnding("Bastian", "n");

// 7. Repeat a String Repeat a String
function repeatStringNumTimes(str, num) {
  let repeatedString = "";
  for (let i = 1; i <= num; i++) {
    repeatedString += str;
  }
  return repeatedString;
}

repeatStringNumTimes("abc", 3);

// 8. Truncate a String
function truncateString(str, num) {
  if (num >= str.length) {
    return str.slice(0, num);
  }
  return str.slice(0, num) + "...";
}

truncateString("A-tisket a-tasket A green and yellow basket", 8);

// 9. Finders Keepers
function findElement(arr, func) {
  return arr.filter(func)[0];
}

findElement([1, 2, 3, 4], (num) => num % 2 === 0);

// 10. Boo who
function booWho(bool) {
  return typeof bool === "boolean";
}

booWho(null);

// 11. Title Case a Sentence
function titleCase(str) {
  return str
    .split(" ")
    .map((el) => {
      return el[0].toUpperCase() + el.slice(1).toLowerCase();
    })
    .join(" ");
}

titleCase("I'm a little tea pot");

// 12. Slice and Splice
function frankenSplice(arr1, arr2, n) {
  let copyArr = arr2.slice();
  copyArr.splice(n, 0, ...arr1);
  return copyArr;
}

frankenSplice([1, 2, 3], [4, 5, 6], 1);

// 13. Falsy Bouncer
function bouncer(arr) {
  const trueArr = [];
  arr.forEach((el) => {
    if (Boolean(el) == true) {
      trueArr.push(el);
    }
  });
  return trueArr;
}

bouncer([7, "ate", "", false, 9]);

// 14. Where do I Belong
function getIndexToIns(arr, num) {
  const sortedArray = arr.sort((a, b) => a - b);
  if (arr.length === 0) {
    return 0;
  }
  for (let i = 0; i < sortedArray.length; i++) {
    if (num > sortedArray[sortedArray.length - 1]) {
      return sortedArray.length;
    }
    if (sortedArray[i] >= num) {
      return i;
    }
  }
}

getIndexToIns([40, 60], 50);

//  15. Mutations
function mutation(arr) {
  let count = 0;
  for (let i = 0; i < arr[1].length; i++) {
    if (arr[0].toLowerCase().includes(arr[1][i].toLowerCase())) {
      count += 1;
    }
  }
  return count === arr[1].length;
}

mutation(["hello", "hey"]);

// 16. Chunky Monkey
function chunkArrayInGroups(arr, size) {
  let newArr = [];
  while (arr.length >= size) {
    newArr.push(arr.splice(0, size));
  }
  if (arr.length !== 0) {
    newArr.push(arr);
  }
  return newArr;
}

chunkArrayInGroups(["a", "b", "c", "d"], 2);
