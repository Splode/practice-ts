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
  expect(node).toEqual({ data: 1 })
  expect(node).toBeInstanceOf(ListNode)
})

test('creates a new singly-linked list', () => {
  const linkedList = new LinkedList()
  expect(linkedList).toBeInstanceOf(LinkedList)
  expect(linkedList.isEmpty()).toBe(true)
})

test('push new node to the end of a linked list', () => {
  const linkedList = generateLinkedList()
  expect(linkedList.getLength()).toBe(10)
})

test('get the head node from the linked list', () => {
  const linkedList = generateLinkedList()
  expect(linkedList.getHead().data).toBe(1)
})

test('get the tail node from the linked list', () => {
  const linkedList = generateLinkedList()
  expect(linkedList.getTail().data).toBe(10)
})

test('remove the last node from a linked list', () => {
  const linkedList = generateLinkedList()
  expect(linkedList.pop()).toBeInstanceOf(ListNode)
  expect(linkedList.getLength()).toBe(9)
  expect(linkedList.getTail().data).toBe(9)
})

test('adds a node to the beginning of a linked list', () => {
  const linkedList = new LinkedList()
  linkedList.unshift(new ListNode(1))
  linkedList.unshift(new ListNode(2))
  expect(linkedList.getHead().data).toBe(2)
  expect(linkedList.getLength()).toBe(2)
})

test('guards against shifting node from an empty list', () => {
  const linkedList = new LinkedList()
  expect(linkedList.shift()).toBe(null)
})

test('removes the head from a linked list', () => {
  const linkedList = generateLinkedList()
  expect(linkedList.shift()).toBeInstanceOf(ListNode)
  expect(linkedList.getLength()).toBe(9)
  expect(linkedList.getHead().data).toBe(2)
})

test('insert a node after a given node', () => {
  const linkedList = generateLinkedList()
  // insert new node after head
  linkedList.insert(new ListNode(11), linkedList.getHead())
  expect(linkedList.getLength()).toBe(11)
  expect(linkedList.getHead().next.data).toBe(11)
  // insert new node after tail
  linkedList.insert(new ListNode(12), linkedList.getTail())
  expect(linkedList.getLength()).toBe(12)
  expect(linkedList.getTail().data).toBe(12)
})

test('remove a given node from the linked list', () => {
  const linkedList = generateLinkedList()
  const node = new ListNode(11)
  linkedList.insert(node, linkedList.getHead())
  // remove node
  expect(linkedList.delete(node)).toBeInstanceOf(ListNode)
  expect(linkedList.getLength()).toBe(10)
  // remove head
  linkedList.delete(linkedList.getHead())
  expect(linkedList.getHead().data).toBe(2)
  expect(linkedList.getLength()).toBe(9)
  // remove tail
  linkedList.delete(linkedList.getTail())
  expect(linkedList.getTail().data).toBe(9)
  expect(linkedList.getLength()).toBe(8)
})
