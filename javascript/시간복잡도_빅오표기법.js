/**
 * @description
 * 시간복잡도: 함수인 알고리즘을 특정 크기의 input을 받아 실행할 때 걸리는 시간의 양
 * 빅오 표기법: 대문자 오(O) 를 사용하여 알고리즘에서 input의 크기 n이 증가할 때,
 *             연산 수가 어떤 형태로 증가하는지 파악하기 위해 사용하는 표기법이다.
 *
 * 시간복잡도 비교: O(1) < O(log n) < O(n^2) < O(n^3) < O(2^n)
 */

// O(1) : n이 커질 때 연산수가 증가하지 않고 일정함.
function func(input) {
  // input에서 0번째 인덱스 값을 return 하는 함수.
  // 즉, input의 크기에 관계없이 1번 연산.
  return input[0];
}

// O(n) : n이 커질 떄 연산수가 n에 비례하여 증가.
function func2(input) {
  let output = 0;
  for (let i = 0; i < input.length; i++) {
    output += input[i];
  }
  return output;
}

// func3 는 func2의 연산을 두번 반복하는 함수이다.
// 따라서 연산수는 2n이다. 하지만 빅오 표기법에서는
// 상수를 생략하므로 func2와 동일하게 O(n)로 표현한다.
function func3(input) {
  let output = 0;
  for (let i = 0; i < input.length; i++) {
    output += input[i];
  }
  for (let i = 0; i < input.length; i++) {
    output += input[i];
  }
  return output;
}

// O(n^2) : n이 커지면 연산수는 n^2(n의 2승)에 비례해서 증가한다.
// ex) n = 10 일때 연산수 = 10^2 = 100
function func4(input) {
  let output = 0;
  for (let i = 0; i < input.length; i++) {
    for (let j = 0; j < input.length; j++) {
      output += input[i];
    }
  }
  return output;
}

// O(log n) : n이 커지면 연산수는 logn에 비례해서 증가한다.
function func(num, arr, sIdx, eIdx) {
  if (sIdx > eIdx) {
    return -1;
  }
  let idx = parseInt((sIdx + eIdx) / 2);
  if (arr[idx] === num) {
    return idx;
  } else if (arr[idx] > num) {
    return func(num, arr, sIdx, idx - 1);
  } else {
    return func(num, arr, idx + 1, eIdx);
  }
}
