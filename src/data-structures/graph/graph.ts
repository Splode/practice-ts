import Edge from './Edge'
import Vertex from './Vertex'

/**
 * Creates a new Graph.
 *
 * @class Graph
 */
export default class Graph {
  /**
   * Creates an instance of Graph.
   * @param {boolean} [directed=false] - Directed or undirected.
   * @memberof Graph
   */
  constructor(directed: boolean = false) {
    this._directed = directed
  }

  private _directed: boolean
  private _vertices: Vertex[] = []
  private _edges: Edge[]

  /**
   * Adds a vertex to the graph.
   *
   * @param {Vertex} vertex - A vertex to add.
   * @memberof Graph
   */
  public addVertex(vertex: Vertex): void {
    this._vertices.push(vertex)
  }

  /**
   * Finds and returns a vertex by its key property.
   *
   * @param {number} key - The key to search for.
   * @returns {Vertex} The found vertex.
   * @memberof Graph
   */
  public getVertex(key: number): Vertex {
    return this._vertices.find(vertex => vertex.key === key)
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
    this._edges.push(new Edge(vertex1, vertex2))
    return this
  }

  /**
   * Returns true if the graph is directed.
   *
   * @returns {boolean} True if directed, false if undirected.
   * @memberof Graph
   */
  public isDirected(): boolean {
    return this._directed
  }

  /**
   * Returns the total number of vertices in the graph.
   *
   * @returns {number} The number of vertices.
   * @memberof Graph
   */
  public size(): number {
    return this._vertices.length
  }
}
