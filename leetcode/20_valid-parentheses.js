/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  if (s.length < 2) return false;
  const obj = {
    '(': ')',
    '{': '}',
    '[': ']'
  };
  const opens = [];
  for (let i = 0, len = s.length; i < len; i++) {
    if (obj[s[i]]) opens.push(s[i]);
    else if (obj[opens.pop()] !== s[i]) return false;
  }
  return opens.length === 0;
};

console.log(isValid('()'));
console.log(isValid('()[]{}'));
console.log(isValid('(]'));
console.log(isValid('{[]}'));
console.log(isValid('{[]}{}(]'));
