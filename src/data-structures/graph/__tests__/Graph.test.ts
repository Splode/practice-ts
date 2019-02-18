import * as faker from 'faker'
import Graph from '../Graph'
import Vertex from '../Vertex'
import { generateVertexLs, generateVertex } from '../utils/Vertex-mock'

describe('The Graph class', () => {
  let graph

  beforeEach(() => {
    graph = new Graph()
  })

  test('create a new, undirected Graph', () => {
    expect(graph).toBeInstanceOf(Graph)
    expect(graph.isDirected).toBeFalsy()
  })

  test('create a new, directed Graph', () => {
    const graph = new Graph(true)
    expect(graph).toBeInstanceOf(Graph)
    expect(graph.isDirected).toBeTruthy()
  })

  test('add a vertex to a graph and get its verticesCount', () => {
    const vertices = generateVertexLs(10)
    vertices.map(vertex => graph.addVertex(vertex))
    expect(graph.verticesCount()).toBe(10)
  })

  test('avoid adding duplicate vertices', () => {
    const vertex = generateVertex()
    graph.addVertex(vertex)
    expect(graph.addVertex(vertex)).toBeInstanceOf(Graph)
    expect(graph.verticesCount()).toBe(1)
  })

  test('get a vertex from a graph by key', () => {
    const vertices = generateVertexLs(10)

    expect(graph.getVertex(13)).toBeNull()

    vertices.map(vertex => graph.addVertex(vertex))
    graph.addVertex(new Vertex(2, faker.random.objectElement()))

    const vertexTwo = graph.getVertex(2)
    expect(vertexTwo).toBeInstanceOf(Vertex)
    expect(vertexTwo.key).toBe(2)

    expect(graph.getVertex(13)).toBeNull()
  })

  test('remove a vertex from a graph by key', () => {
    expect(graph.removeVertex(7)).toBeNull()

    graph.addVertex(new Vertex(1, faker.random.objectElement()))
    expect(graph.removeVertex(7)).toBeNull()
    expect(graph.removeVertex(1)).toBeInstanceOf(Vertex)
    expect(graph.verticesCount()).toBe(0)
  })

  test('add an edge to a graph', () => {
    const vertex1 = generateVertex()
    const vertex2 = generateVertex()
    const vertex3 = generateVertex()

    expect(graph.addEdge(vertex1, vertex2)).toBeInstanceOf(Graph)
    expect(graph.verticesCount()).toBe(2)
    expect(graph.edgesCount()).toBe(1)
    expect(vertex1.neighborsCount()).toBe(1)
    expect(vertex2.neighborsCount()).toBe(1)

    expect(graph.addEdge(vertex1, vertex3)).toBeInstanceOf(Graph)
    expect(graph.verticesCount()).toBe(3)
    expect(graph.edgesCount()).toBe(2)
    expect(vertex1.neighborsCount()).toBe(2)
    expect(vertex3.neighborsCount()).toBe(1)
  })
})
