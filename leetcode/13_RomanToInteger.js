/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function (s) {
  const obj = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000
  };
  let result = 0;

  for (i = 0; i < s.length; i++) {
    const cur = obj[s[i]];
    const next = obj[s[i + 1]];
    if (cur < next) {
      result += next - cur;
      i++;
    } else {
      result += cur;
    }
  }
  return result;
};

console.log(romanToInt('MCMXCIV'));
