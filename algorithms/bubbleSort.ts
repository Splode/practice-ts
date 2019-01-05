const unsorted = [7, 10, 2, 5, 3, 1, 6, 4, 9, 8]
const sorted = bubbleSort(unsorted)

console.log('Unsorted array')
printArray(unsorted)

console.log('Sorted array')
printArray(sorted)

/**
 * Return a sorted array from a given array of numbers
 *
 * @param {number[]} unsorted the array of unsorted numbers
 * @returns {number[]} the array of sorted numbers
 */
function bubbleSort (unsorted: number[]) {
  // create a copy of the array param so that the original array is not mutated
  let sorted: number[] = Array.from(unsorted)
  let isSorted: boolean = false

  while (!isSorted) {
    isSorted = true
    for (let i: number = 0; i < sorted.length - 1; i++) {
      if (sorted[i] > sorted[i + 1]) {
        let tmp: number = sorted[i]
        sorted[i] = sorted[i + 1]
        sorted[i + 1] = tmp
        isSorted = false
      }
    }
  }

  return sorted
}

/**
 * Prints each element in an array of numbers
 *
 * @param {number[]} arr
 */
function printArray (arr: number[]): void {
  for (let i: number = 0; i < arr.length; i++) {
    console.log(`[${i}]:  ${arr[i]}`)
  }
}
