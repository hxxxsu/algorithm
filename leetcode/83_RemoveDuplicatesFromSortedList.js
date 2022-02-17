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
 * @return {ListNode}
 */
var deleteDuplicates = function (head) {
  let duplObj = {};
  let temp = new ListNode(0, null);
  let current = temp;
  while (head) {
    if (!duplObj[head.val]) {
      duplObj[head.val] = true;
      current.next = new ListNode(head.val, null);
      current = current.next;
    }
    head = head.next;
  }
  return temp.next;
};

console.log(deleteDuplicates(createL([1, 1, 2, 3, 3])));
