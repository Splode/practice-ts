import ListNode from '../ListNode'

describe('The ListNode class', () => {
  test('creating a new ListNode', () => {
    const node: ListNode = new ListNode(1)
    expect(node).toEqual({ _data: 1 })
    expect(node).toBeInstanceOf(ListNode)
  })
})
