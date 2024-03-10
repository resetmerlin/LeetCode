/**
 * @param {number[]} happiness
 * @param {number} k
 * @return {number}
 */
var maximumHappinessSum = function (happiness, k) {
  happiness.sort((a, b) => b - a);
  let sum = 0;
  let decrement = 0;

  for (let i = 0; i < k; i++) {
    let child = happiness[i] + decrement;
    if (child <= 0) return sum;
    sum += child;
    decrement--;
  }

  return sum;
};
