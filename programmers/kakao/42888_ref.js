function solution(record) {
  const name = {};
  const message = {
    Enter: '들어왔습니다.',
    Leave: '나갔습니다.'
  };

  const sRecord = record.map(log => log.split(' '));

  for (let i = 0; i < sRecord.length; i++) {
    if (sRecord[i][0] !== 'Leave') name[sRecord[i][1]] = sRecord[i][2];
  }

  const mapped = sRecord.map(log => {
    if (log[0] === 'Change') return '';
    let userName = name[log[1]];
    return userName + '님이' + ' ' + message[log[0]];
  });

  return mapped.filter(log => log !== '');
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
