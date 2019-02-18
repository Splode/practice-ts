import Graph from '../Graph'
import Vertex from '../Vertex'
import { generateVertexLs } from './Vertex-mock'

/**
 * Generates a graph pre-populated with random vertices for testing.
 *
 * @export
 * @returns {Graph} A pre-populate graph.
 */
export default function generateGraph(): Graph {
  const graph: Graph = new Graph()
  const vertices: Vertex[] = generateVertexLs(20)

  vertices.map(vertex => graph.addVertex(vertex))

  for (let i = 0; i < (graph.verticesCount() * 2); i++) {
    const random1: number = getRandomNumber(graph.verticesCount())
    const random2: number = getRandomNumber(graph.verticesCount())
    graph.addEdge(graph.vertices[random1], graph.vertices[random2])
  }

  return graph
}

/**
 * Generate a random integer between 0 and the given upper limit.
 *
 * @param {number} upperLimit - The upper limit.
 * @returns {number} A random number.
 */
function getRandomNumber(upperLimit: number): number {
  return Math.floor(Math.random() * upperLimit)
}
