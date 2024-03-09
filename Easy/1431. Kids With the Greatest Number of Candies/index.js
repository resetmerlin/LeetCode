/**
 * @param {number[]} candies
 * @param {number} extraCandies
 * @return {boolean[]}
 */
var kidsWithCandies = function (candies, extraCandies) {
  let c = Math.max(...candies);
  let answer = new Array(candies.length);

  for (let i = 0; i < candies.length; i++) {
    if (candies[i] + extraCandies >= c) {
      answer[i] = true;
    } else {
      answer[i] = false;
    }
  }

  return answer;
};
