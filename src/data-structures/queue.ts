/**
 * Creates a new Queue.
 *
 * @class Queue
 */
class Queue {
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
    // TODO: guard against dequeueing empty queue
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
   * Print the queue to the console in ascending order.
   *
   * @memberof Queue
   */
  public print(): void {
    for (let i = 0; i < this.length; i++) {
      console.log(`[${i}]: ${this._items[(this.length - 1) - i]}`)
    }
  }
}

export {
  Queue
}
