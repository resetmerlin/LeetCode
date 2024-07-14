/**
 * @param {number} n
 * @return {string[]}
 */
var validStrings = function (n) {
  const binaryStrings = new Array(n * 2)
    .fill("0")
    .map((val, i) => {
      if (i % 2 === 0) {
        return "1";
      } else return "0";
    })
    .join("");

  // 1010101

  const secondsBinaryStrings =
    new Array(n).fill("0").join("") + new Array(n).fill("1").join("");

  // 0001111

  const thirdBinaryStrings =
    new Array(n).fill("1").join("") + new Array(n).fill("0").join("");

  // 111000

  let origin = [
    ...generateSubstrings(binaryStrings),
    ...generateSubstrings(secondsBinaryStrings),
    ...generateSubstrings(thirdBinaryStrings),
  ];

  origin = origin.filter((x) => {
    let status = true;

    for (const val of generateSubstring(x)) {
      if (val.length === 2 && !val.includes("1")) status = false;
    }

    return status;
  });

  const answer = new Set(origin);

  return [...answer].sort();
};
function generateSubstrings(str) {
  let arr = [];

  for (let i = 0; i < str.length; i++) {
    for (let j = i + 1; j < str.length + 1; j++) {
      let temp = str.substring(i, j);

      if (temp.length === n) arr.push(temp);
    }
  }

  return arr;
}
function generateSubstring(str) {
  let arr = [];

  for (let i = 0; i < str.length; i++) {
    for (let j = i + 1; j < str.length + 1; j++) {
      let temp = str.substring(i, j);

      arr.push(temp);
    }
  }

  return arr;
}
