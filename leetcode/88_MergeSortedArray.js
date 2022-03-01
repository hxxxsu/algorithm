/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 * 주의사항: 변수 nums1에 저장된 데이터를 수정해야하므로
 *         새로운 주소값을 가진 데이터를 대입하면 안됨
 */
var merge = function (nums1, m, nums2, n) {
  [...nums1.slice(0, m), ...nums2]
    .sort((a, b) => a - b)
    .forEach((item, i) => {
      nums1[i] = item;
    });
};

merge([1, 2, 3, 0, 0, 0], 3, [2, 5, 6], 3);
merge([1], 1, [], 0);
merge([0], 0, [1], 1);
