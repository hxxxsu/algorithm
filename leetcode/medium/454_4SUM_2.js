/**
 * @param {number[]} A
 * @param {number[]} B
 * @param {number[]} C
 * @param {number[]} D
 * @return {number}
 */
var fourSumCount = function (A, B, C, D) {
  let count = 0;
  const dict = {};

  for (const a of A) {
    for (const b of B) {
      const currSum = a + b;

      if (!dict[currSum]) {
        dict[currSum] = 0;
      }

      dict[currSum]++;
    }
  }

  for (const c of C) {
    for (const d of D) {
      const currSum = c + d;

      if (dict[-currSum]) {
        count += dict[-currSum];
      }
    }
  }

  return count;
};
console.log(fourSumCount([1, 2], [-2, -1], [-1, 2], [0, 2]));
