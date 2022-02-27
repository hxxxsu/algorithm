/**
 * @param {string[]} strs
 * @return {string}
 * 매개변수로 주어진 strs의 요소들 중
 * 가장 긴 공통 접두사를 찾기
 * 접두사: 단어의 앞에 붙는 말
 */
var longestCommonPrefix = function (strs) {
  if (!strs.length) return '';
  for (let i = 0; i < strs[0].length; i++) {
    for (let s of strs) {
      if (strs[0][i] !== s[i]) return s.slice(0, i);
    }
  }
  return strs[0];
};

console.log(longestCommonPrefix(['flower', 'flow', 'flight']));
console.log(longestCommonPrefix(['a']));
