/**
 * @param {string} s
 * @return {boolean}
 */
var doesAliceWin = function (s) {
  const players = ["Alice", "Bob"];
  const strings = [...s];

  const { vowelsQuantity } = retrieveLastOddVowel(strings);

  // Validate if there is no vowels
  if (vowelsQuantity === 0) return false;

  // Validate if Alice can win at first time
  if (vowelsQuantity % 2 !== 0) return true;

  let count = 0;

  while (true) {
    const player = players[count % players.length];
    let temp;
    if (player === "Alice") {
      temp = retrieveLastOddVowel(strings);
    } else {
      temp = retrieveLastEvenVowel(strings);
    }

    const { lastVowelLocation, vowelsQuantity } = temp;
    strings.splice(0, lastVowelLocation + 1);

    if (
      !strings.length ||
      vowelsQuantity === strings.length ||
      vowelsQuantity === 0
    ) {
      return player === "Alice" ? true : false;
    }
    count++;
  }
};

function retrieveLastOddVowel(str) {
  const vowels = new Set(["a", "e", "i", "o", "u"]);
  let vowelsQuantity = 0;

  let lastVowelLocation = 0;

  for (let i = 0; i < str.length; i++) {
    if (vowels.has(str[i])) {
      vowelsQuantity++;
      if (vowelsQuantity % 2 !== 0) lastVowelLocation = i;
    }
  }

  return { lastVowelLocation, vowelsQuantity };
}

function retrieveLastEvenVowel(str) {
  const vowels = new Set(["a", "e", "i", "o", "u"]);
  let vowelsQuantity = 0;

  let lastVowelLocation = 0;

  for (let i = 0; i < str.length; i++) {
    if (vowels.has(str[i])) {
      vowelsQuantity++;
      if (vowelsQuantity % 2 === 0) lastVowelLocation = i;
    }
  }

  return { lastVowelLocation, vowelsQuantity };
}

// /**
//  * @param {string} s
//  * @return {boolean}
//  */
// var doesAliceWin = function (s, players = "Alice") {
//   let vowelsQuantity = 0;
//   const strings = [...s];
//   const vowels = ["a", "e", "i", "o", "u"];
//   const vowelsSet = new Set(vowels);
//   let lastVowelLocation = 0;

//   for (let i = 0; i < strings.length; i++) {
//     if (vowelsSet.has(strings[i])) {
//       vowelsQuantity++;
//     }

//     if (players === "Alice" && vowelsQuantity % 2 !== 0) lastVowelLocation = i;

//     if (players === "Bob" && vowelsQuantity % 2 === 0) lastVowelLocation = i;
//   }

//   strings.splice(0, lastVowelLocation + 1);

//   // Validate if Alice can win at first time
//   if (players === "Alice" && vowelsQuantity % 2 !== 0) return true;

//   if (players === "Bob" && vowelsQuantity % 2 === 0) return false;

//   return doesAliceWin(strings.join(""), players === "Alice" ? "Bob" : "Alice");
// };

// 모음이 홀수다 - Alice가 무조건 이김

// leetcoder

// Alice 모음 홀수

// leetco -> 자를 수 있음

// Bob의 차례ㅏㅉ

// d
