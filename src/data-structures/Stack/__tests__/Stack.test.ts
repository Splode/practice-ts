import Stack from '../Stack'
import generateStack from '../utils/Stack-mock'

describe('The Stack class', () => {
  test('create an instance of the Stack class', () => {
    expect(new Stack()).toBeInstanceOf(Stack)
  })

  test('push values to the end of a stack', () => {
    const stack: Stack = new Stack()
    stack.push(1)
    stack.push(2)
    stack.push(3)
    expect(stack.length).toBe(3)
  })

  test('remove and return the top-most item of a stack', () => {
    const stack: Stack = generateStack()
    expect(stack.pop()).toBe(10)
    expect(stack.length).toBe(9)
    expect(stack.peek()).toBe(9)
  })

  test('retrieve the top-most item on the stack', () => {
    const stack: Stack = generateStack()
    expect(stack.peek()).toBe(10)
  })

  test('determine if stack is empty', () => {
    expect(generateStack().isEmpty()).toBeFalsy()
    expect(new Stack()).toBeTruthy()
  })
})
