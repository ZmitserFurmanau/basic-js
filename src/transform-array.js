const { NotImplementedError } = require("../extensions/index.js");

/**
 * Create transformed array based on the control sequences that original
 * array contains
 *
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 *
 * @example
 *
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 *
 */
function transform(arr) {
  if (!Array.isArray(arr)) {
    throw new Error("'arr' parameter must be an instance of the Array!");
  }
  const RES = [...arr];
  RES.forEach((e, i) => {
    if (e === "--discard-next") {
      RES[i] = undefined;
      RES[i + 1] = undefined;
    }
    if (e === "--discard-prev") {
      RES[i] = undefined;
      RES[i - 1] = undefined;
    }
    if (e === "--double-next") RES[i] = RES[i + 1];
    if (e === "--double-prev") RES[i] = RES[i - 1];
  });
  return RES.filter((e) => e !== undefined);
}

module.exports = {
  transform,
};
