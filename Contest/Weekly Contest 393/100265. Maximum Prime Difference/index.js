/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumPrimeDifference = function (nums) {
  let arr = [];
  for (let i = 0; i < nums.length; i++) {
    if (isPrime(nums[i])) {
      console.log(nums[i]);
      arr.push(i);
    }
  }
  arr.sort((a, b) => b - a);

  return isNaN(arr[0] - arr[arr.length - 1]) ? 0 : arr[0] - arr[arr.length - 1];
};

function isPrime(num) {
  var sqrtnum = Math.floor(Math.sqrt(num));
  var prime = num != 1;
  for (var i = 2; i < sqrtnum + 1; i++) {
    if (num % i == 0) {
      prime = false;
      break;
    }
  }
  return prime;
}
