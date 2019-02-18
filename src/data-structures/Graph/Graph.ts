import Edge from './Edge'
import Vertex from './Vertex'

/**
 * Creates a new Graph.
 *
 * @export
 * @class Graph
 */
export default class Graph {
  /**
   * Creates an instance of Graph.
   * @param {boolean} [directed=false] - Directed or undirected.
   * @memberof Graph
   */
  constructor(directed: boolean = false) {
    this._isDirected = directed
  }

  /**
   * Determines whether or not the graph is directed.
   * Set to false (undirected) by default.
   *
   * @private
   * @type {boolean}
   * @memberof Graph
   */
  private _isDirected: boolean

  /**
   * A list of vertices contained within the graph.
   *
   * @private
   * @type {Vertex[]}
   * @memberof Graph
   */
  private _vertices: Vertex[] = []

  /**
   * A list of edges contained within the graph.
   *
   * @private
   * @type {Edge[]}
   * @memberof Graph
   */
  private _edges: Edge[] = []

  /**
   * Returns true if the graph is directed.
   *
   * @readonly
   * @type {boolean}
   * @memberof Graph
   */
  public get isDirected(): boolean {
    return this._isDirected
  }

  /**
   * Adds a vertex to the graph.
   * Avoids adding a duplicate vertex.
   *
   * @param {Vertex} vertex - A vertex to add.
   * @memberof Graph
   */
  public addVertex(vertex: Vertex): Graph {
    if (!this.getVertex(vertex.key)) {
      this._vertices.push(vertex)
    }
    return this
  }

  /**
   * Finds and returns a vertex by its key property.
   *
   * @param {number} key - The key to search for.
   * @returns {Vertex} The found vertex.
   * @memberof Graph
   */
  public getVertex(key: number): Vertex {
    if (this._vertices.length <= 0) {
      return null
    }
    return this._vertices.find(vertex => vertex.key === key) || null
  }

  /**
   * Removes and returns a vertex from a graph.
   *
   * @param {number} key - The key of the vertex.
   * @returns {Vertex} The removed vertex.
   * @memberof Graph
   */
  public removeVertex(key: number): Vertex {
    const index = this._vertices.findIndex(vertex => vertex.key === key)
    if (this._vertices.length <= 0 || index < 0) {
      return null
    }
    // TODO: check for existence of vertex in edge
    return this._vertices.splice(index, 1)[0]
  }

  /**
   * Returns the total number of vertices in the graph.
   *
   * @returns {number} The number of vertices.
   * @memberof Graph
   */
  public verticesCount(): number {
    return this._vertices.length
  }

  /**
   * Adds a connection between two vertices.
   * If either vertex does not exist, it will be created.
   *
   * @param {Vertex} vertex1 - The first vertex.
   * @param {Vertex} vertex2 - The second vertex.
   * @returns {Graph} The graph.
   * @memberof Graph
   */
  public addEdge(vertex1: Vertex, vertex2: Vertex): Graph {
    vertex1.addNeighbor(vertex2)
    vertex2.addNeighbor(vertex1)
    this.addVertex(vertex1).addVertex(vertex2)
    this._edges.push(new Edge(vertex1, vertex2))
    return this
  }

  // TODO: get edge

  // TODO: remove edge

  /**
   * Returns the total number of edges in the graph.
   *
   * @returns {number} The number of edges.
   * @memberof Graph
   */
  public edgesCount(): number {
    return this._edges.length
  }
}
