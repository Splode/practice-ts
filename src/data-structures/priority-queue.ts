import { Queue } from './queue'

/**
 * Creates a new Priority Queue.
 * The Priority Queue is composed using two Queues, one to track
 * low priority items and to track high priority items.
 *
 * @class PriorityQueue
 */
class PriorityQueue {
  private _lowPriorityQueue: Queue = new Queue()
  private _highPriorityQueue: Queue = new Queue()

  /**
   * Adds a new number item to the beginning of a queue.
   * The item is added to the low priority queue by default.
   *
   * @param {number} item - The item to be added to the beginning of the queue.
   * @param {boolean} [priority] - Optionally add item to high priority queue.
   * @returns {number} The item added to the queue.
   * @memberof PriorityQueue
   */
  public enqueue(item: number, priority?: boolean): number {
    priority
      ? this._highPriorityQueue.enqueue(item)
      : this._lowPriorityQueue.enqueue(item)
    return item
  }

  /**
   * Removes the first item in the queue, beginning
   * with high priority and returns it.
   *
   * @returns {number} The removed item.
   * @memberof PriorityQueue
   */
  public dequeue(): number {
    // guard against attempting to dequeue from an empty queue
    if (this.isEmpty()) {
      return null
    } else if (!this._highPriorityQueue.isEmpty()) {
      return this._highPriorityQueue.dequeue()
    }
    return this._lowPriorityQueue.dequeue()
  }

  /**
   * Return the first item in the queue, starting first
   * with items in the high-priority queue.
   *
   * @returns {number} - The first item in the queue.
   * @memberof PriorityQueue
   */
  public peek(): number {
    if (this.isEmpty()) {
      return null
    } else if (!this._highPriorityQueue.isEmpty()) {
      return this._highPriorityQueue.peek()
    }
    return this._lowPriorityQueue.peek()
  }

  /**
   * Returns the total number of items in the priority queue.
   *
   * @readonly
   * @type {number}
   * @memberof PriorityQueue
   */
  public get length(): number {
    return this._highPriorityQueue.length + this._lowPriorityQueue.length
  }

  /**
   * Returns true if both the high and low priority queues are empty.
   *
   * @returns {boolean} Returns true if queue has zero items.
   * @memberof PriorityQueue
   */
  public isEmpty(): boolean {
    return this._highPriorityQueue.isEmpty() && this._lowPriorityQueue.isEmpty()
  }

  /**
   * Print the queue to the console in ascending order, beginning with
   * the high-priority queue.
   *
   * @memberof PriorityQueue
   */
  public print(): void {
    this._highPriorityQueue.print()
    this._lowPriorityQueue.print()
  }
}

export { PriorityQueue }
