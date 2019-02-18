import Queue from '../Queue'

/**
 * Generate a populated instance of the Queue class.
 *
 * @export
 * @returns {Queue} A populated Queue.
 */
export default function generateQueue(): Queue {
  const values: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
  const queue: Queue = new Queue()
  values.map(val => queue.enqueue(val))
  return queue
}
