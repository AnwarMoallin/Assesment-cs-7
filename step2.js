// 1. write func takes in array of nums, should return true of any two nums sum up to zero, false otherwise.
const addToZero = function (arr) {
  // loops through each array value
  for (let i = 0; i < arr.length; i++) {
    // another loop to compare another value
    for (let n = 0; n < arr.length; n++) {
      if (arr[i] + arr[n] === 0) {
        return console.log("this is true");
      }
    }
  }
  return console.log("this isfalse");
};

addToZero([1, 2, 3, -2]);
addToZero(1, 2, 3);
addToZero([1]);

console.log("======= Unique Characters ========");

// 2. takes in a single word, returns true if word contains unique chars, false otherwise.
function hasUniqueChars(str) {
  const isUnique = new Set(str).size == str.length;
  console.log(isUnique);
}

hasUniqueChars("Monday");
hasUniqueChars("Moonday");

console.log("======= Pangrams ========");

// 3. write func to check if a string is a pangram or now
const isPangram = function (str) {
  for (let i = 0; i < str.length; i++) {
    console.log(i);
    for (let s = 0; s < str.length; s++) {
      if (!(i === s)) {
        return console.log(true);
      }
    }
  }
  return console.log(false);
};
isPangram("The quick brown fox jumps over the lazy dog");
isPangram("I like cats, but not mice");

console.log("======= Longests Word ========");

// 4. Longest word takes a list of words, returns the longest one
function find_longest_word(arr) {
  let word = "";

  for (let i = 0; i < arr.length; i++) {
    if (word.length < arr[i].length) {
      word = arr[i];
    }
  }

  return console.log(word.length);
}
find_longest_word(["HelloWorld", "Hi"]);
