/**
 * Sorts a given array of numbers and returns a new, sorted array.
 *
 * @export
 * @param {number[]} unsorted - The unsorted array.
 * @returns {number []} The sorted array.
 */
export default function insertionSort(unsorted: number[]): number[] {
  // create a copy of the given array so that the original array is not mutated
  let sorted: number[] = Array.from(unsorted)

  for (let i = 1; i < sorted.length; i++) {
    for (let j = 0; j < i; j++) {
      if (sorted[i] < sorted[j]) {
        const item: number = sorted.splice(i, 1)[0]
        sorted.splice(j, 0, item)
      }
    }
  }

  return sorted
}
