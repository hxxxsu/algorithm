function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

function createL(a) {
  let node, temp;
  for (let i = a.length - 1; i >= 0; i--) {
    if (!node) node = new ListNode(a[i]);
    else {
      temp = new ListNode(a[i]);
      temp.next = node;
      node = temp;
    }
  }
  return node;
}

/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function (head, n) {
  let temp = new ListNode(0, null);
  let current = temp;

  current.next = head;

  while (true) {
    let cNext = current;
    for (let i = 0; i < n; i++) {
      cNext = cNext.next;
    }
    if (cNext.next === null) {
      current.next = current.next.next;
      return temp.next;
    }
    current = current.next;
  }
};

console.log('return', removeNthFromEnd(createL([1, 2, 3, 4, 5]), 4));
