/**
 * @param {number[]} nums
 * @return {number}
 */
var minimumAverage = function (nums) {
  nums.sort((a, b) => b - a);

  const answer = [];
  let length = nums.length;

  while (answer.length !== length / 2) {
    answer.push((nums.pop() + nums.shift()) / 2);
  }

  console.log(answer);

  return Math.min(...answer);
};
