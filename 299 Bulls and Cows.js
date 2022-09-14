// https://leetcode.com/problems/bulls-and-cows/

/**
 * @param {string} secret
 * @param {string} guess
 * @return {string}
 */
var getHint = function (secret, guess) {
  // convert it to strings to it is referable;
  secret = secret.toString();
  guess = guess.toString();
  let bulls = 0;
  let cows = 0;
  const obj = {};
  const length = secret.length;
  for (let i of secret) {
    obj[i] = (obj[i] || 0) + 1;
    console.log(i);
  }
  /*
    const map = new Map();
    for (let i of secret) {
        map.set(i,(map.get(i) || 0) + 1)
        console.log(i);
    }
    */

  console.log(obj);
  for (let i = 0; i < length; i++) {
    if (guess[i] === secret[i]) {
      if (obj[guess[i]] === 0) {
        cows--;
        bulls++;
      } else {
        obj[guess[i]]--;
        bulls++;
      }
    } else if (obj[guess[i]] > 0) {
      obj[guess[i]]--;
      cows++;
    }
  }
  return `${bulls}A${cows}B`;
  // go through the secret, and construct a map/obj to count all digits;
  // Iterate through the guess, one by one
  // if guess[i] matches secret[i],
  // if map[guess[i]]===0,
  // cows--
  // bull++
  // bull++, map[guess[i]]--
  // else, if map[guess[i]] >0,
  // decrement map[guess[i]]--
  // cows++
};

console.log(getHint(1807, 7810)); // 1A3B
