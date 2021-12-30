function solution(recode) {
  let recodeArr = recode.map(r => r.split(' '));
  let userArr = {};
  recodeArr.forEach(r => {
    if (r[2]) userArr[r[1]] = r[2];
  });

  return recodeArr
    .map(r => {
      if (r[0] != 'Change')
        return `${userArr[r[1]]}님이 ${r[0] === 'Enter' ? '들어왔' : '나갔'}습니다.`;
      else return null;
    })
    .filter(item => item);
}

console.log(
  solution([
    'Enter 현수 Muzi',
    'Enter 채연 Prodo',
    'Leave 현수',
    'Enter 현수 Prodo',
    'Change 채연 Ryan',
    'Leave 현수'
  ])
);
