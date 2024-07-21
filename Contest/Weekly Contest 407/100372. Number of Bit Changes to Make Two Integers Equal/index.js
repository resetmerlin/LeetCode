/**
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
var minChanges = function (n, k) {
  if (k > n) return -1;
  if (k === n) return 0;
  let answer = 0;
  const nBinary = [...n.toString(2)];
  const kBinary = [...k.toString(2)];

  while (nBinary.length) {
    let popedN = +nBinary.pop();
    let popedK = +kBinary.pop();

    if (popedK === popedN) {
      continue;
    }

    if (popedK === 0 && popedN === 1) {
      answer++;
      continue;
    }

    if (!popedK && popedN === 1) {
      answer++;
      continue;
    }

    if (popedK === 1 && popedN === 0) {
      return -1;
    }
  }

  return answer;
};
