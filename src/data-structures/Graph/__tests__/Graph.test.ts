import * as faker from 'faker'
import Edge from '../Edge'
import Graph from '../Graph'
import Vertex from '../Vertex'
import { generateVertexLs, generateVertex } from '../utils/Vertex-mock'

describe('The Graph class', () => {
  let graph: Graph

  beforeEach(() => {
    graph = new Graph()
  })

  test('create a new, undirected Graph', () => {
    expect(graph).toBeInstanceOf(Graph)
    expect(graph.isDirected).toBeFalsy()
  })

  test('create a new, directed Graph', () => {
    const graph: Graph = new Graph(true)
    expect(graph).toBeInstanceOf(Graph)
    expect(graph.isDirected).toBeTruthy()
  })

  test('add a vertex to a graph and get its verticesCount', () => {
    const vertices: Vertex[] = generateVertexLs(10)
    vertices.map(vertex => graph.addVertex(vertex))
    expect(graph.verticesCount()).toBe(10)
  })

  test('get the vertices from a graph', () => {
    const vertices: Vertex[] = generateVertexLs(10)
    vertices.map(vertex => graph.addVertex(vertex))
    expect(graph.vertices[3]).toBeInstanceOf(Vertex)
  })

  test('avoid adding duplicate vertices', () => {
    const vertex: Vertex = generateVertex()
    graph.addVertex(vertex)
    expect(graph.addVertex(vertex)).toBeInstanceOf(Graph)
    expect(graph.verticesCount()).toBe(1)
  })

  test('get a vertex from a graph by key', () => {
    const vertices: Vertex[] = generateVertexLs(10)
    const key: string = faker.random.uuid()

    expect(graph.getVertex(faker.random.word())).toBeNull()

    vertices.map(vertex => graph.addVertex(vertex))
    graph.addVertex(new Vertex(key, faker.helpers.userCard()))

    const vertexTwo: Vertex = graph.getVertex(key)
    expect(vertexTwo).toBeInstanceOf(Vertex)
    expect(vertexTwo.key).toBe(key)

    expect(graph.getVertex(faker.random.word())).toBeNull()
  })

  test('remove a vertex from a graph by key', () => {
    const key: string = faker.random.uuid()
    expect(graph.removeVertex(faker.random.word())).toBeNull()

    graph.addVertex(new Vertex(key, faker.helpers.userCard()))
    expect(graph.removeVertex(faker.random.word())).toBeNull()
    expect(graph.removeVertex(key)).toBeInstanceOf(Vertex)
    expect(graph.verticesCount()).toBe(0)
  })

  test('remove the vertex from neighboring vertices on removal', () => {
    const vertex1: Vertex = generateVertex()
    const vertex2: Vertex = generateVertex()
    const vertex3: Vertex = generateVertex()

    graph.addEdge(vertex1, vertex2)
    graph.addEdge(vertex1, vertex3)

    expect(graph.edgesCount()).toBe(2)
    expect(vertex1.neighborsCount()).toBe(2)

    graph.removeVertex(vertex3.key)

    // expect(graph.edgesCount()).toBe(1)
    expect(vertex1.neighborsCount()).toBe(1)
  })

  test('add an edge to a graph', () => {
    const vertex1: Vertex = generateVertex()
    const vertex2: Vertex = generateVertex()
    const vertex3: Vertex = generateVertex()

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

  test('do not add duplicate edges to a graph', () => {
    const vertex1: Vertex = generateVertex()
    const vertex2: Vertex = generateVertex()

    graph.addEdge(vertex1, vertex2)
    graph.addEdge(vertex1, vertex2)

    expect(graph.edgesCount()).toBe(1)
  })

  test('get the edges from a graph', () => {
    graph.addEdge(generateVertex(), generateVertex())
    expect(graph.edges[0]).toBeInstanceOf(Edge)
  })

  test('get an edge from a pair of vertex keys', () => {
    const vertex1: Vertex = generateVertex()
    const vertex2: Vertex = generateVertex()
    graph.addEdge(vertex1, vertex2)
    expect(graph.getEdge(vertex1.key, vertex2.key)).toBeInstanceOf(Edge)
    expect(graph.getEdge(faker.random.word(), faker.random.word())).toBeNull()
  })

  test('remove an edge from a graph by a vertex key pair', () => {
    const vertices: Vertex[] = generateVertexLs(10)
    const vertex1: Vertex = vertices[0]
    const vertex2: Vertex = vertices[1]

    vertices.map(vertex => graph.addVertex(vertex))

    graph.addEdge(vertex1, vertex2)
    graph.addEdge(graph.vertices[2], graph.vertices[3])
    expect(graph.edgesCount()).toBe(2)
    expect(vertex1.neighborsCount()).toBe(1)
    expect(vertex2.neighborsCount()).toBe(1)

    graph.removeEdge(graph.vertices[0].key, graph.vertices[1].key)
    expect(graph.edgesCount()).toBe(1)
    expect(vertex1.neighborsCount()).toBe(0)
    expect(vertex2.neighborsCount()).toBe(0)

    expect(
      graph.removeEdge(faker.random.word(), faker.random.word())
    ).toBeNull()
  })

  test('printing the edges of a graph to the console', () => {
    expect(typeof graph.print()).toBe('string')
  })
})
