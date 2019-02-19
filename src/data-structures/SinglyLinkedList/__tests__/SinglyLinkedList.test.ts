import SinglyLinkedList from '../SinglyLinkedList'
import ListNode from '../ListNode'
import generateLinkedList from '../utils/SinglyLinkedList-mock'

describe('The SinglyLinkedList class', () => {
  test('creating a new SinglyLinkedList', () => {
    const linkedList: SinglyLinkedList = new SinglyLinkedList()
    expect(linkedList).toBeInstanceOf(SinglyLinkedList)
    expect(linkedList.isEmpty()).toBe(true)
  })

  test('pushing a new node to the end of the list', () => {
    const linkedList: SinglyLinkedList = generateLinkedList()
    expect(linkedList.length).toBe(10)
  })

  test('getting the head node', () => {
    const linkedList: SinglyLinkedList = generateLinkedList()
    expect(linkedList.head.data).toBe(1)
  })

  test('getting the tail node', () => {
    const linkedList: SinglyLinkedList = generateLinkedList()
    expect(linkedList.tail.data).toBe(10)
  })

  test('getting the node at nth index of the list', () => {
    const linkedList: SinglyLinkedList = generateLinkedList()
    expect(linkedList.getNode(3).data).toBe(4)
    expect(linkedList.getNode(3)).toBeInstanceOf(ListNode)
    expect(linkedList.getNode(6).data).toBe(7)
    expect(linkedList.getNode(-1)).toBeFalsy()
    expect(linkedList.getNode(11)).toBeFalsy()
  })

  test('removing the last node', () => {
    const linkedList: SinglyLinkedList = generateLinkedList()
    expect(linkedList.pop()).toBeInstanceOf(ListNode)
    expect(linkedList.length).toBe(9)
    expect(linkedList.tail.data).toBe(9)
  })

  test('adding a node to the beginning of the list', () => {
    const linkedList: SinglyLinkedList = new SinglyLinkedList()
    linkedList.unshift(new ListNode(1))
    linkedList.unshift(new ListNode(2))
    expect(linkedList.head.data).toBe(2)
    expect(linkedList.length).toBe(2)
  })

  test('returning null when removing a node from an empty list', () => {
    const linkedList: SinglyLinkedList = new SinglyLinkedList()
    expect(linkedList.shift()).toBe(null)
  })

  test('removing the head', () => {
    const linkedList: SinglyLinkedList = generateLinkedList()
    expect(linkedList.shift()).toBeInstanceOf(ListNode)
    expect(linkedList.length).toBe(9)
    expect(linkedList.head.data).toBe(2)
  })

  test('inserting a node after a given node', () => {
    const linkedList: SinglyLinkedList = generateLinkedList()
    // insert new node after head
    linkedList.insert(new ListNode(11), linkedList.head)
    expect(linkedList.length).toBe(11)
    expect(linkedList.head.next.data).toBe(11)
    // insert new node after tail
    linkedList.insert(new ListNode(12), linkedList.tail)
    expect(linkedList.length).toBe(12)
    expect(linkedList.tail.data).toBe(12)
  })

  test('removing a given node from the list', () => {
    const linkedList: SinglyLinkedList = generateLinkedList()
    const node: ListNode = new ListNode(11)
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

  test('printing the list items to a string', () => {
    const linkedList: SinglyLinkedList = generateLinkedList()
    const output = linkedList.print()
    expect(typeof output).toBe('string')
    expect(output.length).toBeGreaterThan(0)
  })
})
