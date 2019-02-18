import ListNode from '../ListNode'

describe('The ListNode class', () => {
  test('creates a new node', () => {
    const node = new ListNode(1)
    expect(node).toEqual({ _data: 1 })
    expect(node).toBeInstanceOf(ListNode)
  })
})
