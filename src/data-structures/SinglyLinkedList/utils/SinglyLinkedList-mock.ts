import { LinkedList, ListNode } from '../SinglyLinkedList'

/**
 * Populate initial linked list.
 *
 * @returns {LinkedList} A linked list with 10 nodes.
 * @exports
 */
export default function generateLinkedList(): LinkedList {
  const values: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
  const linkedList = new LinkedList()
  values.map(el => linkedList.push(new ListNode(el)))
  return linkedList
}
