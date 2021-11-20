// 1. array.length 를 반목문에 캐싱
const array = [1, 2, 3];

// 배열을 순회하는 반복문은 일반적으로 아래 코드와 같이 작성한다.
for (let i = 0; i < array.length; i++) {
  console.log(array[i]);
}

// 하지만 위 형태의 코드는 매 루프가 시잘할 때마다 배열의 크기를 계산하기 때문에 효율이 떨어진다.
// 따라서, 불필요한 계산을 방지하기 위해 다음과 같이 작성할 수 있다.
const len = array.length;
for (let i = 0; i < len; i++) {
  console.log(array[i]);
}

//혹은 더 간단하게 다음처럼 작성할 수 있다.
for (let i = 0; i < 0; len = array.length; i++) {
  console.log(array[i]);
}
