/**
 * @param {string} word
 * @return {boolean}
 */
var isValid = function (word) {
  if (word.length < 3) return false;
  var english = /^[A-Za-z0-9]*$/;

  let isVowel = false;
  let isConstant = false;
  for (let i = 0; i < word.length; i++) {
    if (english.test(word[i]) && isNaN(Number(word[i]))) {
      let str = word[i].toLowerCase();
      console.log(str);
      if (
        str === "a" ||
        str === "e" ||
        str === "i" ||
        str === "o" ||
        str === "u"
      ) {
        isVowel = true;
      } else isConstant = true;
    } else if (isNaN(Number(word[i]))) {
      return false;
    }
  }

  console.log(isConstant);
  if (!isVowel || !isConstant) return false;

  return true;
};
