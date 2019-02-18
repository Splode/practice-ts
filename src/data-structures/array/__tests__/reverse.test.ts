import reverse from '../reverse'

describe('The reverse array function', () => {
  test('reversing an array of integers', () => {
    let array: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    expect(reverse(array)).toEqual([10, 9, 8, 7, 6, 5, 4, 3, 2, 1])
  })
})
