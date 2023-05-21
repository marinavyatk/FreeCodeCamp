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
function spinalCase(str) {
  let newStr =  str.replace(/([a-z])([A-Z])/g, "$1 $2");
  return newStr.replace(/\s+|_+/g, "-").toLowerCase();
  }
  
  spinalCase("thisIsSpinalTap");

// 6. Pig Latin
function translatePigLatin(str) {
  if(/[aeiou]/.test(str[0])){
    return str+"way";
  }
  let indexFirstVowel = str.search(/[aeiou]/)
  if(indexFirstVowel === -1){
    return str +"ay"
    }
return str.slice(indexFirstVowel)+str.slice(0, indexFirstVowel) + "ay";
}

translatePigLatin("consonant");

// 7. Search and Replace
function myReplace(str, before, after) {
  if(before[0] === before[0].toUpperCase()){
    return str.replace(before, after.slice(0,1).toUpperCase()+after.slice(1));
  }
  else{
    return str.replace(before, after.slice(0,1).toLowerCase()+after.slice(1));
  }
}

myReplace("A quick brown fox jumped over the lazy dog", "jumped", "leaped");

// 8. DNA Pairing
function pairElement(str) {
  let DNAstrand = [];
  let withoutPair = str.split("");
  withoutPair.forEach((el)=>{
  switch(el){
      case "A": DNAstrand.push([el, "T"]); break;
      case "T": DNAstrand.push([el, "A"]); break;
      case "C": DNAstrand.push([el, "G"]); break;
      case "G": DNAstrand.push([el, "C"]); break;
    }
  })
  return DNAstrand;
}

pairElement("GCG");

// 9. Missing letters
function fearNotLetter(str) {
  let alphabet = "abcdefghijklmnopqrstuvwxyz";
  let index = alphabet.indexOf(str[0]);
  for(let i = 0; i<str.length; i++){
    if(str[i] !== alphabet[index+i]){
      return alphabet[index+i];
    }
  }
}

fearNotLetter("abce");

// 10. Sorted Union
function uniteUnique(...arr) {
  let unitedArray =  arr.flat();
  let answerArray = [];
  for(let i = 0; i<unitedArray.length; i++){
    // if(unitedArray[i] === unitedArray.indexOf(unitedArray[i])){}
    if(!answerArray.includes(unitedArray[i])){
answerArray.push(unitedArray[i]);
    }
  }
  return answerArray;
}

uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]);

// 11. Convert HTML Entities
