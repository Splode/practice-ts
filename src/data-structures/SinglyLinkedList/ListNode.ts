/**
 * A node in a singly-linked list.
 * Each node has a number as its data and a pointer to the next node in the list.
 *
 * @class ListNode
 * @exports
 */
export default class ListNode {
  /**
   * The associated data for a list node.
   *
   * @private
   * @type {number}
   * @memberof ListNode
   */
  private _data: number

  /**
   * The next, adjacent list node.
   *
   * @private
   * @type {ListNode}
   * @memberof ListNode
   */
  private _next: ListNode
  /**
   * Creates an instance of ListNode.
   * @constructor
   * @param {number} data - The number value to be stored.
   */
  constructor(data: number) {
    this._data = data
  }
  /**
   * Get the value of the data property from the node.
   *
   * @readonly
   * @type {number}
   * @memberof ListNode
   */
  public get data(): number {
    return this._data
  }
  /**
   * Get the next linked node from this node.
   *
   * @type {ListNode}
   * @memberof ListNode
   */
  public get next(): ListNode {
    return this._next
  }
  /**
   * Set the next node property to a given node.
   *
   * @memberof ListNode
   */
  public set next(node: ListNode) {
    this._next = node
  }
}
