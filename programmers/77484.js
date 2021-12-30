function solution(lottos, win_nums) {
  var answer = [];
  let min = lottos.filter(lotto => win_nums.includes(lotto)).length;
  answer[1] = min > 1 ? 7 - min : 6;
  answer[0] = answer[1] - lottos.filter(lotto => !lotto).length || 1;
  return answer;
}

console.log(solution([44, 1, 0, 0, 31, 25], [31, 10, 45, 1, 6, 19]));
console.log(solution([0, 0, 0, 0, 0, 0], [38, 19, 20, 40, 15, 25]));
