/**
 * A node in a singly-linked list.
 * Each node has a number as its data and a pointer to the next node in the list.
 *
 * @class ListNode
 */
class ListNode {
  data: number
  next: ListNode

  /**
   * Creates an instance of ListNode.
   * @constructor
   * @param {number} data - The number value to be stored.
   */
  constructor(data: number) {
    this.data = data
  }
}

/**
 * A singly-linked list.
 *
 * @class LinkedList
 */
class LinkedList {
  private length: number = 0
  private head: ListNode = null
  private tail: ListNode = null

  /**
   * Returns the number of nodes in the linked list.
   *
   * @returns {number} The number of nodes in the linked list.
   * @memberof LinkedList
   */
  getLength(): number {
    return this.length
  }

  /**
   * Returns the head node of the linked list.
   *
   * @returns {ListNode} The head node of the linked list.
   * @memberof LinkedList
   */
  getHead(): ListNode {
    return this.head
  }

  /**
   * Returns the tail node of the linked list.
   *
   * @returns {ListNode} The tail node of the linked list.
   * @memberof LinkedList
   */
  getTail(): ListNode {
    return this.tail
  }

  /**
   * Returns true if there are no nodes in the linked list.
   * Returns false otherwise.
   *
   * @returns {boolean} True or false.
   * @memberof LinkedList
   */
  isEmpty(): boolean {
    return this.length === 0
  }

  /**
   * Add a list node to the end of the linked list.
   *
   * @param {ListNode} node - The node to be added.
   * @returns {ListNode} The node added to the linked list.
   * @memberof LinkedList
   */
  push(node: ListNode): ListNode {
    // set the node as both head and tail if list is empty
    if (this.isEmpty()) {
      this.head = node
      this.tail = node
    } else {
      this.tail.next = node
      this.tail = node
    }
    // increment the length of the list
    this.length++
    return node
  }

  /**
   * Removes the last node in the linked list.
   *
   * @returns {ListNode} The removed node.
   * @memberof LinkedList
   */
  pop(): ListNode {
    const removed = this.tail
    let current = this.head

    while (current) {
      if (current.next === this.tail) {
        current.next = null
        this.tail = current
      }
      current = current.next
    }
    this.length--
    return removed
  }

  /**
   * Adds a node to the head of a linked list.
   *
   * @param {ListNode} node - The node to be added to the linked list.
   * @returns {ListNode} The newly added node.
   * @memberof LinkedList
   */
  unshift(node: ListNode): ListNode {
    if (this.isEmpty()) {
      this.head = node
      this.tail = node
    } else {
      node.next = this.head
      this.head = node
    }
    this.length++
    return node
  }

  /**
   * Removes the head of a linked list.
   *
   * @returns {(void | ListNode)} The removed head node.
   * @memberof LinkedList
   */
  shift(): void | ListNode {
    if (this.isEmpty()) {
      return null
    }
    const removed = this.head
    this.head = this.head.next
    this.length--
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
  insert(newNode: ListNode, existingNode: ListNode): ListNode {
    const rightNode = existingNode.next
    if (existingNode === this.tail) {
      this.tail = newNode
    }
    existingNode.next = newNode
    newNode.next = rightNode
    this.length++
    return newNode
  }

  /**
   * Removes a given node from the linked list.
   *
   * @param {ListNode} node - The node to be removed.
   * @returns {ListNode} The removed node.
   * @memberof LinkedList
   */
  delete(node: ListNode): ListNode {
    if (node === this.head) {
      this.head = node.next
    } else {
      let current: ListNode = this.head
      while (current) {
        if (current.next === node) {
          current.next = node.next
          if (node === this.tail) {
            this.tail = current
          }
          break
        }
        current = current.next
      }
    }
    this.length--
    return node
  }

  /**
   * Prints each node's data in the linked list.
   *
   * @memberof LinkedList
   */
  print(): void {
    let current: ListNode = this.head
    let values: number[] = []
    while (current) {
      values.push(current.data)
      current = current.next
    }
    console.log(values.join(' => '))
  }
}

export { ListNode, LinkedList }
