/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseString = function (s) {
  //   for (let i = 1; i < s.length; i++) {
  //     s.unshift(...s.splice(i, 1));
  //   }
  s.reverse();
  console.log(s);
};

var reverseStringWithOutLibrary = function (s) {
  let ret = new Array();
  for (let i = s.length - 1; i >= 0; i--) {
    ret.push(s[i]);
  }
  s = ret;
  console.log(s);
};

var reverseStringWithOutLibrary2 = function (s) {
  let i = 0,
    j = s.length - 1;
  while (i < j) {
    // ES6 destructuring assignment
    [s[i], s[j]] = [s[j], s[i]];
    i++;
    j--;
  }
  console.log(s);
};

reverseString(['h', 'e', 'l', 'l', 'o']);
reverseStringWithOutLibrary(['h', 'e', 'l', 'l', 'o']);
reverseStringWithOutLibrary2(['h', 'e', 'l', 'l', 'o']);
