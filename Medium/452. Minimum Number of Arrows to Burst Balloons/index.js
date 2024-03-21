/**
 * @param {number[][]} points
 * @return {number}
 */
var findMinArrowShots = function (points) {
  points.sort((a, b) => a[1] - b[1]);
  let increment = 0;
  let arrow = points[0][1];

  for (let i = 0; i < points.length; i++) {
    if (
      points[i + 1] &&
      arrow <= points[i + 1][1] &&
      arrow >= points[i + 1][0]
    ) {
    } else if (points[i + 1]) {
      arrow = points[i + 1][1];
      increment++;
    } else {
      increment++;
    }

    console.log(arrow);
  }

  return increment === 0 ? points.length : increment;
};
