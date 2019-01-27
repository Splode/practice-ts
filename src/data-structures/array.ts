/**
 * Reverse and return the elements of a given array.
 *
 * @param {any[]} arr - The array to be reversed.
 * @returns {any[]} The reversed array.
 */
function reverse(arr: any[]): any[] {
  let start: number = 0
  let end: number = arr.length - 1

  while (start < end) {
    let tmp = arr[end]
    arr[end] = arr[start]
    arr[start] = tmp
    start++
    end--
  }
  return arr
}

export { reverse }
