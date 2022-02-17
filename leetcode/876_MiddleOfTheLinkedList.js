// Definition for singly-linked list.
function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

function createListNode(a) {
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
var middleNode = function (head) {
  let hi = head,
    cnt = 1;

  while (hi.next) {
    hi = hi.next;
    cnt++;
  }
  cnt = parseInt(cnt / 2);
  while (cnt--) {
    head = head.next;
  }
  return head;
};

console.log(middleNode(createListNode([1, 2, 3, 4, 5])));
