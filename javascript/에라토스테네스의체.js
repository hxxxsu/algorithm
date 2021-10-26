// 에라토스테네스의 체는 가장 대표적인 소수(prime num) 판별 알고리즘이다.

/** 
일반적으로 생각할 수 있는 아래 알고리즘은 
반복문으로 모든 경우의 수를 돌며 약수 여부를 검증하므로 
비효율적이며, 시간복잡도는 o(n)이다.  */

const isPrimeNumber = x => {
  if (x === 1) return false;
  for (let i = 2; i < x; i++) {
    if (x % i === 0) return false;
  }
  return true;
};

console.log(isPrimeNumber(11));

/** 
아래 알고리즘을 사용하면 시간 복잡도를 o(n^(1/2))로 단축할 수 있다. */
const isPrimeNumber2 = x => {
  if (x === 1) return false;
  for (let i = 2; i <= Math.sqrt(x); i++) {
    if (x % i === 0) return false;
  }
  return true;
};

console.log(isPrimeNumber2(11));
