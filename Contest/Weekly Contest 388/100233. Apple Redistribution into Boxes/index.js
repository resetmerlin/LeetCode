/**
 * @param {number[]} apple
 * @param {number[]} capacity
 * @return {number}
 */
var minimumBoxes = function (apple, capacity) {
  let totalPrice = apple.reduce((prev, val) => {
    return (prev += val);
  }, 0);
  capacity.sort((a, b) => b - a);
  let increment = 0;
  while (capacity.length) {
    totalPrice -= capacity.shift();
    increment++;
    if (totalPrice <= 0) return increment;
  }

  return increment;
};
