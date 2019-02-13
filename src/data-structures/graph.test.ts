import { Node, Graph } from './graph'

test('create a new Node', () => {
  expect(new Node(1)).toBeInstanceOf(Node)
})

test('get the key from a node', () => {
  const node = new Node(1)
  expect(node.key).toBe(1)
})

test('create a new, undirected Graph', () => {
  expect(new Graph()).toBeInstanceOf(Graph)
})

test('create a new, directed Graph', () => {
  expect(new Graph(true)).toBeInstanceOf(Graph)
})

test('add a node to a graph and get graph size', () => {
  const graph = new Graph()
  graph.addNode(new Node(1))
  graph.addNode(new Node(2))
  graph.addNode(new Node(3))
  expect(graph.size()).toBe(3)
})

test('get a node from a graph by key', () => {
  const graph = new Graph()
  graph.addNode(new Node(1))
  graph.addNode(new Node(2))
  graph.addNode(new Node(3))
  const nodeTwo = graph.getNode(2)
  expect(nodeTwo).toBeInstanceOf(Node)
  expect(nodeTwo.key).toBe(2)
})
