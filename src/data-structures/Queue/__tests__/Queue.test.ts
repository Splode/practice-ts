import Queue from '../Queue'
import generateQueue from '../utils/Queue-mock'

describe('The Queue class', () => {
  test('instantiating a new Queue', () => {
    expect(new Queue()).toBeInstanceOf(Queue)
  })

  test('determining if empty', () => {
    expect(new Queue().isEmpty()).toBeTruthy()
  })

  test('returning null when removing an item from empty queue', () => {
    expect(new Queue().dequeue()).toBeNull()
  })

  test('enqueueing items', () => {
    const queue: Queue = generateQueue()
    expect(queue.length).toBe(10)
    expect(queue.isEmpty()).toBeFalsy()
  })

  test('dequeuing items', () => {
    const queue: Queue = generateQueue()
    expect(queue.dequeue()).toBe(1)
    expect(queue.length).toBe(9)
    expect(queue.dequeue()).toBe(2)
    expect(queue.length).toBe(8)
  })

  test('getting the first item in the queue', () => {
    const queue: Queue = generateQueue()
    expect(queue.peek()).toBe(1)
    queue.dequeue()
    expect(queue.peek()).toBe(2)
  })

  test('printing the queue to a string', () => {
    const queue: Queue = generateQueue()
    expect(typeof queue.print()).toBe('string')
  })
})
