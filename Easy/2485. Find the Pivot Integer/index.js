/**
 * @param {number} n
 * @return {number}
 */
var pivotInteger = function (n) {
  let increment1 = 0;
  for (let i = 0; i <= n; i++) {
    increment1 += i;
    let increment2 = 0;
    for (let j = i; j <= n; j++) {
      increment2 += j;
    }
    if (increment2 === increment1) return i;
  }

  return -1;
};
