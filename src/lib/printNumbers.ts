/**
 * Prints each element in an array of numbers.
 *
 * @export lib/printNumbers
 * @param {number[]} arr - The array of numbers to be printed.
 */
export default function printNumbers(arr: number[]): void {
  for (let i: number = 0; i < arr.length; i++) {
    console.log(`[${i}]:  ${arr[i]}`)
  }
}
