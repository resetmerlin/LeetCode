/**
 * @param {string[]} arr
 * @return {string[]}
 */
var shortestSubstrings = function (arr) {
  const n = arr.length;
  let answer = new Array(n).fill("");

  function makeSubstrings(str) {
    let strArr = [];
    for (let i = 0; i < str.length; i++) {
      for (let j = i + 1; j <= str.length; j++) {
        strArr.push(str.substring(i, j));
      }
    }

    return strArr;
  }

  function hasSubString(substring, index) {
    for (let i = 0; i < arr.length; i++) {
      if (i !== index && arr[i].includes(substring)) return false;
    }
    return true;
  }

  for (let i = 0; i < arr.length; i++) {
    const substrings = makeSubstrings(arr[i]);
    substrings.sort((a, b) => a.length - b.length || a.localeCompare(b));
    for (const val of substrings) {
      if (hasSubString(val, i)) {
        answer[i] = val;
        break;
      }
    }
  }

  return answer;
};
