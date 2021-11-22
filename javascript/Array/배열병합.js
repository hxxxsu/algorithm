const arr1 = [1, 2, 3];
const arr2 = [3, 4, 5];

// 1. Array.concat() 사용.
console.log(arr1.concat(arr2));
// => [1,2,3,3,4,5]

// 2. Array.push.apply() 사용.
arr1.push.apply(arr1, arr2);
console.log(arr1);
// => [1,2,3,3,4,5]

// 1번 방법의 경우, 병합하려는 배열의 크기가 크면 새 배열을 생성하는 과정에서 메모리 낭비가 발생한다.
// 따라서, 2번 방법을 사용하여 두번째 배열을 첫번째 배열 (arr1)에 병합하여 메모리 사용을 절감한다.
