/**
 * @param {number[]} nums
 * @param {number[][]} queries
 * @return {boolean[]}
 */
var isArraySpecial = function (nums, queries) {
  let answer = new Array(queries.length).fill(true);
  let hash = new Map();

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] % 2 === nums[i + 1] % 2) {
      hash.set([nums[i], nums[i + 1]], false);
    } else hash.set([nums[i], nums[i + 1]], true);
  }

  for (let i = 0; i < nums.length - 1; i++) {
    if (!hash.get([nums[i], nums[i + 1]])) {
      console.log(nums[i], nums[i + 1]);
      for (let j = 0; j < queries.length; j++) {
        if (queries[j][0] <= i <= queries[j][1]) {
          answer[j] = false;
        }
      }
    }
  }

  return !answer.length ? [true] : answer;
};

/// [4,3,1] -> 4외 1이 둘다 짝수이거나 홀수여야 true
// [3,4,1,2,6]

// 짝수 더하기 홀수 1 +2, 5+2 3+2 -> 홀수
// 홀 , 짝 ,홀, 짝,짝 -> 짝
// 짝, 홀, 홀 -> 짝
// 짝, 짝 , 홀 -> 홀
