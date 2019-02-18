import ListNode from './ListNode'

/**
 * A singly-linked list.
 *
 * @class LinkedList
 * @exports
 */
export default class SinglyLinkedList {
  private _length: number = 0
  private _head: ListNode = null
  private _tail: ListNode = null

  /**
   * Returns the number of nodes in the linked list.
   *
   * @readonly
   * @type {number} The number of nodes in the linked list.
   * @memberof LinkedList
   */
  public get length(): number {
    return this._length
  }

  /**
   * Returns the head node of the linked list.
   *
   * @readonly
   * @type {ListNode} The head node of the linked list.
   * @memberof LinkedList
   */
  public get head(): ListNode {
    return this._head
  }

  /**
   * Returns the tail node of the linked list.
   *
   * @readonly
   * @type {ListNode} The tail node of the linked list.
   * @memberof LinkedList
   */
  public get tail(): ListNode {
    return this._tail
  }

  /**
   * Returns a node at the zero-based index given from a linked list.
   *
   * @param {number} index - The zero-based index of the desired node.
   * @returns {ListNode} The node at the given index.
   * @memberof LinkedList
   */
  public getNode(index: number): ListNode {
    // guard against out-of-bounds index reference
    if (index < 0 || index > this.length) {
      return null
    }
    let count: number = 0
    let current: ListNode = this.head
    while (current) {
      if (count === index) {
        return current
      }
      current = current.next
      count++
    }
  }

  /**
   * Returns true if there are no nodes in the linked list.
   * Returns false otherwise.
   *
   * @returns {boolean} True or false.
   * @memberof LinkedList
   */
  public isEmpty(): boolean {
    return this.length === 0
  }

  /**
   * Add a list node to the end of the linked list.
   *
   * @param {ListNode} node - The node to be added.
   * @returns {ListNode} The node added to the linked list.
   * @memberof LinkedList
   */
  public push(node: ListNode): ListNode {
    // set the node as both head and tail if list is empty
    if (this.isEmpty()) {
      this._head = node
      this._tail = node
    } else {
      this._tail.next = node
      this._tail = node
    }
    // increment the length of the list
    this._length++
    return node
  }

  /**
   * Removes the last node in the linked list.
   *
   * @returns {ListNode} The removed node.
   * @memberof LinkedList
   */
  public pop(): ListNode {
    const removed = this.tail
    let current = this.head

    while (current) {
      if (current.next === this.tail) {
        current.next = null
        this._tail = current
      }
      current = current.next
    }
    this._length--
    return removed
  }

  /**
   * Adds a node to the head of a linked list.
   *
   * @param {ListNode} node - The node to be added to the linked list.
   * @returns {ListNode} The newly added node.
   * @memberof LinkedList
   */
  public unshift(node: ListNode): ListNode {
    if (this.isEmpty()) {
      this._head = node
      this._tail = node
    } else {
      node.next = this.head
      this._head = node
    }
    this._length++
    return node
  }

  /**
   * Removes the head of a linked list.
   *
   * @returns {(void | ListNode)} The removed head node.
   * @memberof LinkedList
   */
  public shift(): void | ListNode {
    if (this.isEmpty()) {
      return null
    }
    const removed = this.head
    this._head = this.head.next
    this._length--
    return removed
  }

  /**
   * Insert a node into the linked list after the given node.
   *
   * @param {ListNode} newNode - The node to be added.
   * @param {ListNode} existingNode - The existing node.
   * @returns {ListNode} The newly added node.
   * @memberof LinkedList
   */
  public insert(newNode: ListNode, existingNode: ListNode): ListNode {
    const rightNode = existingNode.next
    if (existingNode === this.tail) {
      this._tail = newNode
    }
    existingNode.next = newNode
    newNode.next = rightNode
    this._length++
    return newNode
  }

  /**
   * Removes a given node from the linked list.
   *
   * @param {ListNode} node - The node to be removed.
   * @returns {ListNode} The removed node.
   * @memberof LinkedList
   */
  public delete(node: ListNode): ListNode {
    if (node === this.head) {
      this._head = node.next
    } else {
      let current: ListNode = this.head
      while (current) {
        if (current.next === node) {
          current.next = node.next
          if (node === this.tail) {
            this._tail = current
          }
          break
        }
        current = current.next
      }
    }
    this._length--
    return node
  }

  /**
   * Prints each node's data in the linked list.
   *
   * @memberof LinkedList
   */
  public print(): void {
    let current: ListNode = this.head
    let values: number[] = []
    while (current) {
      values.push(current.data)
      current = current.next
    }
    console.log(values.join(' => '))
  }
}
