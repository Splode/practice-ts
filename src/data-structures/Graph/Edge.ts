import Vertex from './Vertex'

/**
 * Creates an instance of an Edge.
 *
 * @export
 * @class Edge
 */
export default class Edge {
  /**
   *Creates an instance of Edge.
   * @param {Vertex} vertex1 - The first vertex.
   * @param {Vertex} vertex2 - The second vertex.
   * @memberof Edge
   */
  constructor(vertex1: Vertex, vertex2: Vertex) {
    this._vertices.push(vertex1)
    this._vertices.push(vertex2)
  }

  /**
   * An array of two connected vertices.
   *
   * @private
   * @type {Vertex[]}
   * @memberof Edge
   */
  private _vertices: Vertex[] = []

  /**
   * Get the connected nodes comprising an edge.
   *
   * @readonly
   * @type {Vertex[]}
   * @memberof Edge
   */
  public get vertices(): Vertex[] {
    return this._vertices
  }
}
