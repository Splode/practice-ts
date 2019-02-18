import Queue from '../Queue'
import generateQueue from '../utils/Queue-mock'

test('create a new instance of Queue', () => {
  expect(new Queue()).toBeInstanceOf(Queue)
})

test('determine if queue is empty', () => {
  expect(new Queue().isEmpty()).toBeTruthy()
})

test('attempting to remove an item from queue should return null', () => {
  expect(new Queue().dequeue()).toBeNull()
})

test('test enqueueing items to a queue', () => {
  const queue = generateQueue()
  expect(queue.length).toBe(10)
  expect(queue.isEmpty()).toBeFalsy()
})

test('dequeue items from the queue', () => {
  const queue = generateQueue()
  expect(queue.dequeue()).toBe(1)
  expect(queue.length).toBe(9)
  expect(queue.dequeue()).toBe(2)
  expect(queue.length).toBe(8)
})

test('get the first item in the queue', () => {
  const queue = generateQueue()
  expect(queue.peek()).toBe(1)
  queue.dequeue()
  expect(queue.peek()).toBe(2)
})
