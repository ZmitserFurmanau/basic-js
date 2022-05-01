const { NotImplementedError } = require("../extensions/index.js");

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  let res = "";
  let count = 1;
  for (let i = 0; i < str.length; i++) {
    let char = str[i];
    if (char === str[i + 1]) {
      count++;
    } else if (count === 1) {
      res += `${char}`;
      count = 1;
    } else {
      res += `${count}${char}`;
      count = 1;
    }
  }
  return res;
}

module.exports = {
  encodeLine,
};
