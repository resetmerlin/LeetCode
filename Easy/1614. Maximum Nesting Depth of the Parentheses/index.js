/**
 * @param {string} s
 * @return {number}
 */
var maxDepth = function (s) {
  let counter = 0;
  let maxCounter = 0;

  for (const val of s) {
    if (val === "(") {
      counter++;
    } else if (val === ")") {
      counter--;
    }

    maxCounter = Math.max(maxCounter, counter);
  }

  return maxCounter;
};
