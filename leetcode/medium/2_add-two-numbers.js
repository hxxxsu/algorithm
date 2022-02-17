var addTwoNumbers = function (l1, l2) {
  var List = new L(0);
  var head = List;
  var sum = 0;
  var carry = 0;
  while (l1 !== null || l2 !== null || sum > 0) {
    if (l1 !== null) {
      sum = sum + l1.val;
      l1 = l1.next;
    }
    if (l2 !== null) {
      sum = sum + l2.val;
      l2 = l2.next;
    }
    if (sum >= 10) {
      carry = 1;
      sum = sum - 10;
    }
    head.next = new L(sum);
    head = head.next;
    sum = carry;
    carry = 0;
  }
  return List.next;
};

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

const logL = l => {
  let _l = l;
  let arr = [];
  while (_l !== null) {
    arr.push(_l.val);
    _l = _l.next;
  }
  console.log(arr.join(''));
};

// console.log(addTwoNumbers(aToL([2, 4, 3]), aToL([5, 6, 4])));
logL(addTwoNumbers(aToL([9, 9, 9, 9, 9, 9, 9]), aToL([9, 9, 9, 9])));
