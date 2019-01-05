import printNumbers from './../lib/printNumbers';
const unsorted = [7, 10, 2, 5, 3, 1, 6, 4, 9, 8];
const sorted = bubbleSort(unsorted);
console.log('Unsorted array');
printNumbers(unsorted);
console.log('Sorted array');
printNumbers(sorted);
/**
 * Returns a sorted array from a given array of numbers.
 *
 * @param {number[]} unsorted - The array of unsorted numbers.
 * @returns {number[]} An array of sorted numbers.
 */
function bubbleSort(unsorted) {
    // create a copy of the array param so that the original array is not mutated
    let sorted = Array.from(unsorted);
    let isSorted = false;
    while (!isSorted) {
        isSorted = true;
        for (let i = 0; i < sorted.length - 1; i++) {
            if (sorted[i] > sorted[i + 1]) {
                let tmp = sorted[i];
                sorted[i] = sorted[i + 1];
                sorted[i + 1] = tmp;
                isSorted = false;
            }
        }
    }
    return sorted;
}
