import { PriorityQueue } from './priority-queue'

/**
 * Generate a populated instance of the Priority Queue class.
 *
 * @returns {PriorityQueue} A populated Priority Queue.
 */
function generatePriorityQueue(): PriorityQueue {
  const lowItems: number[] = [1, 2, 3, 4, 5]
  const highItems: number[] = [6, 7, 8, 9,10]
  const priorityQueue = new PriorityQueue()
  lowItems.map(item => priorityQueue.enqueue(item))
  highItems.map(item => priorityQueue.enqueue(item, true))
  return priorityQueue
}

test('create a new instance of PriorityQueue', () => {
  const priorityQueue = new PriorityQueue
  expect(priorityQueue).toBeInstanceOf(PriorityQueue)
  expect(priorityQueue.isEmpty()).toBeTruthy()
})

test('enqueue items to low priority queue', () => {
  const priorityQueue = new PriorityQueue()
  expect(priorityQueue.enqueue(1)).toBe(1)
  expect(priorityQueue.enqueue(2)).toBe(2)
  expect(priorityQueue.length).toEqual(2)
})

test('enqueue items to high priority queue', () => {
  const priorityQueue = new PriorityQueue()
  expect(priorityQueue.enqueue(1, true)).toBe(1)
  expect(priorityQueue.enqueue(2, true)).toBe(2)
  expect(priorityQueue.length).toEqual(2)
})

test('generate a priority queue with low and high items', () => {
  const priorityQueue = generatePriorityQueue()
  expect(priorityQueue.isEmpty()).toBeFalsy()
  expect(priorityQueue.length).toEqual(10)
})

test('dequeue items from the queue, beginning with high priority', () => {
  const priorityQueue = generatePriorityQueue()
  expect(priorityQueue.dequeue()).toBe(6)
  expect(priorityQueue.dequeue()).toBe(7)
  expect(priorityQueue.dequeue()).toBe(8)
  expect(priorityQueue.dequeue()).toBe(9)
  expect(priorityQueue.dequeue()).toBe(10)
  expect(priorityQueue.length).toBe(5)
  expect(priorityQueue.dequeue()).toBe(1)
  expect(priorityQueue.dequeue()).toBe(2)
  expect(priorityQueue.dequeue()).toBe(3)
  expect(priorityQueue.dequeue()).toBe(4)
  expect(priorityQueue.dequeue()).toBe(5)
})

test('expect dequeueing empty queue to throw error', () => {
  const priorityQueue = new PriorityQueue()
  expect(priorityQueue.isEmpty()).toBeTruthy()
  expect(priorityQueue.dequeue()).toBeNull()
})

test('peek retrieves item first from high priority queue, then low priority', () => {
  const priorityQueue = new PriorityQueue()
  expect(priorityQueue.peek()).toBeNull()
  priorityQueue.enqueue(1)
  expect(priorityQueue.peek()).toBe(1)
  priorityQueue.enqueue(2, true)
  priorityQueue.enqueue(3)
  expect(priorityQueue.peek()).toBe(2)
})
