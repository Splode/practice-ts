import { ListNode, LinkedList } from './singly-linked-list'

/**
 * Populate initial linked list.
 *
 * @returns {LinkedList} A linked list with 10 nodes.
 */
function generateLinkedList(): LinkedList {
  const values: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
  const linkedList = new LinkedList()
  values.map(el => linkedList.push(new ListNode(el)))
  return linkedList
}

test('creates a new node', () => {
  const node = new ListNode(1)
  expect(node).toEqual({ _data: 1 })
  expect(node).toBeInstanceOf(ListNode)
})

test('creates a new singly-linked list', () => {
  const linkedList = new LinkedList()
  expect(linkedList).toBeInstanceOf(LinkedList)
  expect(linkedList.isEmpty()).toBe(true)
})

test('push new node to the end of a linked list', () => {
  const linkedList = generateLinkedList()
  expect(linkedList.length).toBe(10)
})

test('get the head node from the linked list', () => {
  const linkedList = generateLinkedList()
  expect(linkedList.head.data).toBe(1)
})

test('get the tail node from the linked list', () => {
  const linkedList = generateLinkedList()
  expect(linkedList.tail.data).toBe(10)
})

test('get the node at nth index of a linked list', () => {
  const linkedList = generateLinkedList()
  expect(linkedList.getNode(3).data).toBe(4)
  expect(linkedList.getNode(3)).toBeInstanceOf(ListNode)
  expect(linkedList.getNode(6).data).toBe(7)
  expect(linkedList.getNode(-1)).toBeFalsy()
  expect(linkedList.getNode(11)).toBeFalsy()
})

test('remove the last node from a linked list', () => {
  const linkedList = generateLinkedList()
  expect(linkedList.pop()).toBeInstanceOf(ListNode)
  expect(linkedList.length).toBe(9)
  expect(linkedList.tail.data).toBe(9)
})

test('adds a node to the beginning of a linked list', () => {
  const linkedList = new LinkedList()
  linkedList.unshift(new ListNode(1))
  linkedList.unshift(new ListNode(2))
  expect(linkedList.head.data).toBe(2)
  expect(linkedList.length).toBe(2)
})

test('guards against shifting node from an empty list', () => {
  const linkedList = new LinkedList()
  expect(linkedList.shift()).toBe(null)
})

test('removes the head from a linked list', () => {
  const linkedList = generateLinkedList()
  expect(linkedList.shift()).toBeInstanceOf(ListNode)
  expect(linkedList.length).toBe(9)
  expect(linkedList.head.data).toBe(2)
})

test('insert a node after a given node', () => {
  const linkedList = generateLinkedList()
  // insert new node after head
  linkedList.insert(new ListNode(11), linkedList.head)
  expect(linkedList.length).toBe(11)
  expect(linkedList.head.next.data).toBe(11)
  // insert new node after tail
  linkedList.insert(new ListNode(12), linkedList.tail)
  expect(linkedList.length).toBe(12)
  expect(linkedList.tail.data).toBe(12)
})

test('remove a given node from the linked list', () => {
  const linkedList = generateLinkedList()
  const node = new ListNode(11)
  linkedList.insert(node, linkedList.head)
  // remove node
  expect(linkedList.delete(node)).toBeInstanceOf(ListNode)
  expect(linkedList.length).toBe(10)
  // remove head
  linkedList.delete(linkedList.head)
  expect(linkedList.head.data).toBe(2)
  expect(linkedList.length).toBe(9)
  // remove tail
  linkedList.delete(linkedList.tail)
  expect(linkedList.tail.data).toBe(9)
  expect(linkedList.length).toBe(8)
})
