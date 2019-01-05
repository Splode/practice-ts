import { bubbleSort, unsorted } from './bubbleSort'

test('sorts an array of numbers into ascending order', () => {
  expect(bubbleSort(unsorted)).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])
})
