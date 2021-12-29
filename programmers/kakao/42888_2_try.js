function solution(records) {
  let arr = []; // 메시지 obj를 담을 배열
  let users = []; // uid와 lastNick 쌍의 Object Array
  records.forEach(record => {
    const [type, uid, nick = null] = record.split(' ');
    if (nick) {
      const idx = users.findIndex(item => item.uid === uid);
      if (idx === -1) users.push({ uid, nick });
      else users[idx].nick = nick;
    }
    if (type === 'Enter' || type === 'Leave') arr.push({ type, uid, nick });
  });

  return arr.map(item => {
    return `${users.find(user => user.uid === item.uid).nick}님이 ${
      item.type === 'Enter' ? '들어왔' : '나갔'
    }습니다.`;
  });
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
