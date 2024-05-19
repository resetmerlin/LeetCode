/**
 * @param {number[]} nums
 * @param {number[][]} queries
 * @return {boolean[]}
 */
var isArraySpecial = function (nums, queries) {
  const n = nums.length;
  const lastSameParity = new Array(n).fill(-1);
  for (let i = 1; i < n; i++) {
    if (nums[i - 1] % 2 === nums[i] % 2) {
      lastSameParity[i] = i - 1;
    } else if (i > 1 && lastSameParity[i - 1] !== -1) {
      lastSameParity[i] = lastSameParity[i - 1];
    }
  }

  let results = [];
  for (let [from, to] of queries) {
    if (from === to) {
      results.push(true);
    } else {
      let invalidIndex = lastSameParity[to];
      results.push(invalidIndex < from);
    }
  }

  return results;
};

/// [4,3,1] -> 4외 1이 둘다 짝수이거나 홀수여야 true
// [3,4,1,2,6]

// 짝수 더하기 홀수 1 +2, 5+2 3+2 -> 홀수
// 홀 , 짝 ,홀, 짝,짝 -> 짝
// 짝, 홀, 홀 -> 짝
// 짝, 짝 , 홀 -> 홀
