const perf = require("execution-time")();

function addZero(arrNum) {
  for (let i = 0; i <= arrNum.length; i++) {
    console.log(arrNum[i]);
    if (arrNum[i] + arrNum[i] === 0) {
      return true;
    }
    return false;
  }
}
addZero([1, 22, 3, 4, 5]);

function hasUniqueChar() {}

function isPangram() {}

perf.start();
function longestWord(one, two) {
  if (one.length > two.length) {
    return console.log(one.length);
  } else {
    return console.log(two.length);
  }
}
longestWord("Hello", "Abracadabraaaa");
let longestsWordsTime = perf.stop();

console.log("Time:", longestsWordsTime.preciseWords);
