import Edge from './Edge'
import Vertex from './Vertex'

describe('The Edge class', () => {
  test('Create a new Edge', () => {
    const vertex1 = new Vertex(1, 'vertex one')
    const vertex2 = new Vertex(2, 'vertex two')
    const edge = new Edge(vertex1, vertex2)
    expect(edge).toBeInstanceOf(Edge)
  })
})
