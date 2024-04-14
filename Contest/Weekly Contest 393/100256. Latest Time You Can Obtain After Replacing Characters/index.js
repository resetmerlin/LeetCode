/**
 * @param {string} s
 * @return {string}
 */
var findLatestTime = function (s) {

  let hash = new Map();
  for (let i = 0; i < s.length; i++) {
    hash.set(i, s[i]);
  }

  for (const key of hash.keys()) {
    const idx = hash.get(key);
    if (idx === "?") {
      if (key === 0) {
        if (hash.get(key + 1) >= 2) {
          hash.set(key, "0");
        } else hash.set(key, "1");
      } else if (key === 3) {
        hash.set(key, "5");
      } else if (key === 4) {
        hash.set(key, "9");
      } else if (key === 1) {
        if (hash.get(key - 1) === "0") {
          hash.set(key, "9");
        } else {
          hash.set(key, "1");
        }
      }
    }
  }

  let result = "";

  for (const val of hash.values()) {
    result += val;
  }

  return result;
};
