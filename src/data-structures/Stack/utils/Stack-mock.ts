import Stack from '../Stack'

/**
 * Generate a populated instance of the Stack class.
 * 
 * @export
 * @returns {Stack} A populated Stack.
 */
export default function generateStack(): Stack {
  const values: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
  const stack: Stack = new Stack()
  values.map(val => stack.push(val))
  return stack
}
