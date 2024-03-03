/**
 * @param {number[]} nums
 * @return {number[]}
 */
var resultArray = function (nums) {
  let arr1 = [];
  let arr2 = [];
  arr1.push(nums.shift());
  arr2.push(nums.shift());

  while (nums.length) {
    if (arr1[arr1.length - 1] > arr2[arr2.length - 1]) {
      arr1.push(nums.shift());
    } else {
      arr2.push(nums.shift());
    }
  }

  return [...arr1, ...arr2];
};
