import Edge from '../Edge'
import Vertex from '../Vertex'
import { generateVertex } from '../utils/Vertex-mock'

describe('The Edge class', () => {
  test('instantiating a new Edge', () => {
    const edge: Edge = new Edge(generateVertex(), generateVertex())
    expect(edge).toBeInstanceOf(Edge)
  })

  test('getting the vertices comprising an edge', () => {
    const edge: Edge = new Edge(generateVertex(), generateVertex())
    expect(edge.vertices.length).toBe(2)
    expect(edge.vertices[1]).toBeInstanceOf(Vertex)
  })
})
