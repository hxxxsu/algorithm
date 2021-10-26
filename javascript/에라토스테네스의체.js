// 참고: https://blog.naver.com/PostView.naver?blogId=ndb796&logNo=221233595886&redirect=Dlog&widgetTypeCall=true&directAccess=false
// 에라토스테네스의 체는 가장 대표적인 소수(prime num) 판별 알고리즘이다.

/**
 * 일반적으로 생각할 수 있는 아래 알고리즘은
 * 반복문으로 모든 경우의 수를 돌며 약수 여부를 검증하므로
 * 비효율적이며, 시간 복잡도는 o(n)이다.
 */

const isPrimeNumber = x => {
  if (x === 1) return false;
  for (let i = 2; i < x; i++) {
    if (x % i === 0) return false;
  }
  return true;
};

console.log(isPrimeNumber(11));

/**
 * 아래 알고리즘을 사용하면 시간 복잡도를 o(n^(1/2))로 단축할 수 있다.
 * 왜냐하면, 특정 숫자의 제곱근까지만 약수 여부를 검증하면 되기 때문이다.
 * (제곱근: 실수 및 복소수 a에 대해, a의 제곱근은 제곱해서 a가 되는 모든 수를 의미함.)
 */
const isPrimeNumber2 = x => {
  if (x === 1) return false;
  for (let i = 2; i <= Math.sqrt(x); i++) {
    if (x % i === 0) return false;
  }
  return true;
};

console.log(isPrimeNumber2(11));

/**
 * 위 알고리즘들은 x라는 특정 수가 소수인지 아닌지를 판별하는 함수이다.
 * 하지만, 여러 수 (ex: 1~100) 를 한꺼번에 판별하고자 하는 경우에는
 * [에라토스테네스의 체]를 사용하는것이 효율적이다.
 */

const eratos = (x, y) => {
  let arr = [];
  for (let i = 2; i <= y; i++) {
    arr[i] = i;
  }
  for (let i = 2; i <= y; i++) {
    if (arr[i] === 0) continue;
    for (let j = i + i; j <= y; j += i) {
      arr[j] = 0;
    }
  }
  return arr.filter(n => n > 0);
};

console.log(eratos(1, 100));
