/**
 * Creates a new Queue.
 *
 * @class Queue
 */
export default class Queue {
  /**
   * A collection of numeric items in the queue.
   *
   * @private
   * @type {number[]}
   * @memberof Queue
   */
  private _items: number[] = []

  /**
   * Adds a new number item to the beginning of a queue.
   *
   * @param {number} item - The number item to be added to the beginning of the queue.
   * @returns {number} The item added to the queue.
   * @memberof Queue
   */
  public enqueue(item: number): number {
    this._items.unshift(item)
    return item
  }

  /**
   * Removes the first item in the queue and returns it.
   *
   * @returns {number} The removed item.
   * @memberof Queue
   */
  public dequeue(): number {
    if (this.isEmpty()) {
      return null
    }
    return this._items.pop()
  }

  /**
   * Returns the first item in the queue.
   *
   * @returns {number} The first item in the queue.
   * @memberof Queue
   */
  public peek(): number {
    return this._items[this.length - 1]
  }

  /**
   * Returns the number of items in the queue.
   *
   * @readonly
   * @type {number}
   * @memberof Queue
   */
  public get length(): number {
    return this._items.length
  }

  /**
   * Returns true if the queue is empty.
   *
   * @returns {boolean} Returns true if queue has zero items.
   * @memberof Queue
   */
  public isEmpty(): boolean {
    return this.length === 0
  }

  /**
   * Returns a string containing all of the items in the queue.
   *
   * @returns {string} A string representation of the queue.
   * @memberof Queue
   */
  public print(): string {
    const items: string[] = []
    for (let i = 0; i < this.length; i++) {
      items.push(`${this._items[this.length - 1 - i]}`)
    }
    return items.join('\n')
  }
}
