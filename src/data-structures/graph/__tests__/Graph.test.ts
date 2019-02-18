import Graph from '../Graph'
import Vertex from '../Vertex'

test('create a new, undirected Graph', () => {
  expect(new Graph()).toBeInstanceOf(Graph)
})

test('create a new, directed Graph', () => {
  expect(new Graph(true)).toBeInstanceOf(Graph)
})

test('add a vertex to a graph and get graph size', () => {
  const graph = new Graph()
  graph.addVertex(new Vertex(1, 'vertex one'))
  graph.addVertex(new Vertex(2, 'vertex two'))
  graph.addVertex(new Vertex(3, 'vertex three'))
  expect(graph.size()).toBe(3)
})

test('get a vertex from a graph by key', () => {
  const graph = new Graph()
  graph.addVertex(new Vertex(1, 'vertex one'))
  graph.addVertex(new Vertex(2, 'vertex two'))
  graph.addVertex(new Vertex(3, 'vertex three'))
  const vertexTwo = graph.getVertex(2)
  expect(vertexTwo).toBeInstanceOf(Vertex)
  expect(vertexTwo.key).toBe(2)
})
