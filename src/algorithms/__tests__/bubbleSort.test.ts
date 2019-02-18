import bubbleSort from '../bubbleSort'

describe('The bubbleSort algorithm', () => {
  test('sorting an array of numbers into ascending order', () => {
    const unsorted: number[] = [7, 10, 2, 5, 3, 1, 6, 4, 9, 8]
    expect(bubbleSort(unsorted)).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])
  })
})
