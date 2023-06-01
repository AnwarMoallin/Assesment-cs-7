const perf = require("execution-time")();

function doublerAppend(nums) {
  let new_nums = [];

  for (let i = 0; i < nums.length; i++) {
    let num = nums[i] * 2;
    new_nums.push(num);
  }
}

function doublerInsert(nums) {
  let new_nums = [];

  for (let i = 0; i < nums.length; i++) {
    let num = nums[i] * 2;
    new_nums.unshift(num);
  }
}

function getSizedArray(size) {
  let array = [];
  for (let i = 0; i < size; i++) {
    array.push(i);
  }
  return array;
}

const tinyArray = getSizedArray(10);
const smallArray = getSizedArray(100);
const mediumArray = getSizedArray(1000);
const largeArray = getSizedArray(10000);
const extraLargeArray = getSizedArray(100000);

// How long does it take to double every number in a given
// array?

/* extraLargeArray */
// Try it with first function
perf.start(); // Starts timer
doublerAppend(extraLargeArray);
let resultsAppend = perf.stop(); // Stops timer and save time results

// Try it with second function
perf.start();
doublerInsert(extraLargeArray);
let resultsInsert = perf.stop();

/* tinyArray */
perf.start(); // Starts timer
doublerAppend(tinyArray);
let resultsAppendTinyArray = perf.stop(); // Stops timer and save time results

perf.start();
doublerInsert(tinyArray);
let resultsInsertTinyArray = perf.stop();

/* smallArray */
perf.start(); // Starts timer
doublerAppend(smallArray);
let resultsAppendSmallArray = perf.stop(); // Stops timer and save time results

perf.start();
doublerInsert(smallArray);
let resultsInsertSmallArray = perf.stop();

/* mediumArray */
perf.start(); // Starts timer
doublerAppend(mediumArray);
let resultsAppendMediumArray = perf.stop(); // Stops timer and save time results

perf.start();
doublerInsert(mediumArray);
let resultsInsertMediumArray = perf.stop();

/* largeArray */
perf.start(); // Starts timer
doublerAppend(largeArray);
let resultsAppendLargeArray = perf.stop(); // Stops timer and save time results

perf.start();
doublerInsert(largeArray);
let resultsInsertLargeArray = perf.stop();

console.log("Results for the extraLargeArray");

console.log("insert extraLargeArray", resultsInsert.preciseWords);
console.log("append extraLargeArray", resultsAppend.preciseWords);

console.log("insert tinyArray", resultsInsertTinyArray.preciseWords);
console.log("append tinyArray", resultsAppendTinyArray.preciseWords);

console.log("insert smallArray", resultsInsertSmallArray.preciseWords);
console.log("append smallArray", resultsAppendSmallArray.preciseWords);

console.log("insert mediumArray", resultsInsertMediumArray.preciseWords);
console.log("append mediumArray", resultsAppendMediumArray.preciseWords);

console.log("insert largeArray", resultsInsertLargeArray.preciseWords);
console.log("append largeArray", resultsAppendLargeArray.preciseWords);
