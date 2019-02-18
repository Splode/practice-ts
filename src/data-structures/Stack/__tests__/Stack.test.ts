import Stack from '../Stack'
import generateStack from '../utils/Stack-mock'

describe('The Stack class', () => {
  test('instantiating a new Stack', () => {
    expect(new Stack()).toBeInstanceOf(Stack)
  })

  test('pushing values to the end of the stack', () => {
    const stack: Stack = new Stack()
    stack.push(1)
    stack.push(2)
    stack.push(3)
    expect(stack.length).toBe(3)
  })

  test('removing and returning the top-most item', () => {
    const stack: Stack = generateStack()
    expect(stack.pop()).toBe(10)
    expect(stack.length).toBe(9)
    expect(stack.peek()).toBe(9)
  })

  test('getting the top-most item', () => {
    const stack: Stack = generateStack()
    expect(stack.peek()).toBe(10)
  })

  test('determining if stack is empty', () => {
    expect(generateStack().isEmpty()).toBeFalsy()
    expect(new Stack()).toBeTruthy()
  })

  test('printing the stack items to a string', () => {
    const stack: Stack = generateStack()
    expect(typeof stack.print()).toBe('string')
  })
})
