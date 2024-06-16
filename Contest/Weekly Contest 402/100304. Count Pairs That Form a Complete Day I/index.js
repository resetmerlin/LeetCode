/**
 * @param {number[]} hours
 * @return {number}
 */
var countCompleteDayPairs = function (hours) {
  const day = 24;

  let answer = 0;

  for (let i = 0; i < hours.length; i++) {
    for (let j = i + 1; j < hours.length; j++) {
      if (Number.isInteger((hours[j] + hours[i]) / day)) {
        answer++;
      }
    }
  }

  return answer;
};
