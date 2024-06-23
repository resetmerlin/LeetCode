// /**
//  * @param {number[]} nums
//  * @return {number}
//  */
// var minimumAverage = function (nums) {
//   let left = 0;
//   let right = nums.length - 1;
//   let middle = Math.floor(nums.length / 2);
//   const answer = [];
//   let min = Infinity;
//   let max = -Infinity;
//   let length = nums.length;

//   while (answer.length !== length / 2) {
//     while (left < right) {
//       if (left < middle) {
//         min = Math.min(min, nums[left]);
//         max = Math.max(max, nums[left]);
//         left++;
//       }

//       if (middle <= right) {
//         min = Math.min(min, nums[right]);
//         max = Math.max(max, nums[right]);
//         right--;
//       }
//     }

//     answer.push((min + max) / 2);
//     min = Infinity;
//     max = -Infinity;
//     left = 0;
//     right = nums.length - 1;
//   }

//   console.log(answer);

//   return Math.min(...answer);
// };

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

  return Math.min(...answer);
};
