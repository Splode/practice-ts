import PriorityQueue from '../PriorityQueue'

/**
 * Generate a populated instance of the Priority Queue class.
 *
 * @returns {PriorityQueue} A populated Priority Queue.
 */
export default function generatePriorityQueue(): PriorityQueue {
  const lowItems: number[] = [1, 2, 3, 4, 5]
  const highItems: number[] = [6, 7, 8, 9, 10]
  const priorityQueue = new PriorityQueue()
  lowItems.map(item => priorityQueue.enqueue(item))
  highItems.map(item => priorityQueue.enqueue(item, true))
  return priorityQueue
}
