import PriorityQueue from '../PriorityQueue'
import generatePriorityQueue from '../utils/PriorityQueue-mock'

describe('The PriorityQueue class', () => {
  test('instantiating a new PriorityQueue', () => {
    const priorityQueue: PriorityQueue = new PriorityQueue()
    expect(priorityQueue).toBeInstanceOf(PriorityQueue)
    expect(priorityQueue.isEmpty()).toBeTruthy()
  })

  test('enqueuing items to the low priority queue', () => {
    const priorityQueue: PriorityQueue = new PriorityQueue()
    expect(priorityQueue.enqueue(1)).toBe(1)
    expect(priorityQueue.enqueue(2)).toBe(2)
    expect(priorityQueue.length).toEqual(2)
  })

  test('enqueuing items to the high priority queue', () => {
    const priorityQueue: PriorityQueue = new PriorityQueue()
    expect(priorityQueue.enqueue(1, true)).toBe(1)
    expect(priorityQueue.enqueue(2, true)).toBe(2)
    expect(priorityQueue.length).toEqual(2)
  })

  test('dequeuing items from the queue, beginning with high priority', () => {
    const priorityQueue: PriorityQueue = generatePriorityQueue()
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

  test('throwing an error when dequeueing from and empty queue', () => {
    const priorityQueue: PriorityQueue = new PriorityQueue()
    expect(priorityQueue.isEmpty()).toBeTruthy()
    expect(priorityQueue.dequeue()).toBeNull()
  })

  test('peeking first from high priority queue, then low priority', () => {
    const priorityQueue: PriorityQueue = new PriorityQueue()
    expect(priorityQueue.peek()).toBeNull()
    priorityQueue.enqueue(1)
    expect(priorityQueue.peek()).toBe(1)
    priorityQueue.enqueue(2, true)
    priorityQueue.enqueue(3)
    expect(priorityQueue.peek()).toBe(2)
  })

  test('printing the items in the queue to a string', () => {
    const priorityQueue: PriorityQueue = generatePriorityQueue()
    expect(typeof priorityQueue.print()).toBe('string')
  })
})
