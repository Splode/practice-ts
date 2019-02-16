import Vertex from './Vertex'

describe('The Vertex class', () => {
  test('create a new Vertex', () => {
    expect(new Vertex(1, 'vertex one')).toBeInstanceOf(Vertex)
  })

  test('get the key from a vertex', () => {
    const vertex = new Vertex(1, 'vertex one')
    expect(vertex.key).toBe(1)
  })
})
