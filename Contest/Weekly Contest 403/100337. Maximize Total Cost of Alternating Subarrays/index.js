/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumTotalCost = function (nums) {
  if (nums.length == 1) return nums[0];
  let result = 0;
  function makeSubarray(arr) {
    let answer = [];

    for (let i = 0; i < arr.length; i++) {
      for (let j = i + 1; j < arr.length + 1; j++) {
        let copiedArr = [...arr];
        let temp = copiedArr.splice(i, j);

        answer.push({
          key: copiedArr,
          value: temp,
        });
      }
    }

    return answer;
  }

  const subArrays = makeSubarray(nums);

  for (const array of subArrays) {
    const absValues = array.value.map((arr) => Math.abs(arr));
    const total = absValues.reduce((prev, curr) => curr + prev, 0);
    const keyTotal = array.key.reduce((prev, curr) => curr + prev, 0);

    result = Math.max(result, keyTotal + total);
  }

  return result;
};
