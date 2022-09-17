// https://leetcode.com/problems/happy-number/

/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function (n) {
  const track = {};
  let acc = 0;

  // 1. mod and square the result and add it to an accumulator till all digits are done.
  console.log(!track[n]);
  while (!track[n] && acc !== 1) {
    console.log(track);
    if (acc) track[n] = true;
    acc = 0;
    while (n) {
      console.log((n % 10) ** 2);
      acc += (n % 10) ** 2;
      n = Math.floor(n / 10);
      console.log({ n, acc });
    }
    console.log({ n, acc });
    n = acc;
    console.log(track[n]);
  }
  console.log(track, n);
  return n === 1;
};

console.log(isHappy(19));
