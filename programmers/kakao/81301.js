https://programmers.co.kr/learn/courses/30/lessons/81301
function solution(s) {
    const arr = [
        'zero',
        'one',
        'two',
        'three',
        'four',
        'five',
        'six',
        'seven',
        'eight',
        'nine'
    ]
    arr.forEach((item,i)=>{
        s=s.replace(new RegExp(`${item}`,'g'),i)    
    })
    return +s;
}

const testCases = ['one4seveneightone', '23four5six7']
testCases.forEach(testCase => {
    console.log('FINISH=>', solution(testCase));
});