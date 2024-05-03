/**
 * @param {string} version1
 * @param {string} version2
 * @return {number}
 */
var compareVersion = function (version1, version2) {
  let str1 = version1.split(".");
  let str2 = version2.split(".");

  if (str1.length > str2.length)
    for (let i = 0; i < str1.length; i++) {
      if (!str1[i]) {
        str1[i] = "0";
      }
      if (!str2[i]) {
        str2[i] = "0";
      }
      console.log(str1[i], str2[i]);

      if (+str1[i] > +str2[i]) {
        return 1;
      } else if (+str1[i] < +str2[i]) {
        return -1;
      }
    }
  else
    for (let i = 0; i < str2.length; i++) {
      if (!str1[i]) {
        str1[i] = "0";
      }
      if (!str2[i]) {
        str2[i] = "0";
      }

      if (+str1[i] > +str2[i]) {
        return 1;
      } else if (+str1[i] < +str2[i]) {
        return -1;
      }
    }

  return 0;
};
