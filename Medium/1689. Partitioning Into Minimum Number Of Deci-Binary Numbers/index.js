/**
 * @param {string} n
 * @return {number}
 */
var minPartitions = function (n) {
  const arr = new Array(n[0].length).fill(0);
  for (let val of n) {
    let num = +val;
    while (num !== 0) {
      num--;
      arr[num] = 1;
    }
  }
  return arr.length;
};

// 32

// 32 -> 3이 0이 될떄까지 -(1) 이 1을
