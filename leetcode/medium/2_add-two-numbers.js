function L(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

function aToL(a) {
  let n, t;
  for (let i = a.length - 1; i >= 0; i--) {
    if (!n) n = new L(a[i]);
    else {
      t = new L(a[i]);
      t.next = n;
      n = t;
    }
  }
  return n;
}
var addTwoNumbers = function (l1, l2) {
  console.log(l1, l2);
};

console.log(addTwoNumbers(aToL([2, 4, 3]), aToL([5, 6, 4])));
