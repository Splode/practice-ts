import * as faker from 'faker'
import Vertex from '../Vertex'

/**
 * Generate a single vertex with random data for testing purposes.
 *
 * @returns {Vertex} A randomly generated vertex.
 */
const generateVertex = function(): Vertex {
  return new Vertex(faker.random.number(), faker.helpers.userCard())
}

/**
 * Generate an array of randomly generated vertices.
 *
 * @param {number} num - The number of vertices to generate.
 * @returns {Vertex[]} Array of vertices.
 */
const generateVertexLs = function(num: number): Vertex[] {
  let vertices = []
  for (let i = 0; i < num; i++) {
    vertices.push(generateVertex())
  }
  return vertices
}

export {
  generateVertex,
  generateVertexLs
}
