import SinglyLinkedList from '../SinglyLinkedList'
import ListNode from '../ListNode'

/**
 * Populate initial linked list.
 *
 * @returns {LinkedList} A linked list with 10 nodes.
 * @exports
 */
export default function generateLinkedList(): SinglyLinkedList {
  const values: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
  const linkedList = new SinglyLinkedList()
  values.map(el => linkedList.push(new ListNode(el)))
  return linkedList
}
