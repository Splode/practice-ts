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
   * Returns a list of the vertices in the graph.
   *
   * @readonly
   * @type {Vertex[]}
   * @memberof Graph
   */
  public get vertices(): Vertex[] {
    return this._vertices
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
   * @param {string} key - The key to search for.
   * @returns {Vertex} The found vertex.
   * @memberof Graph
   */
  public getVertex(key: string): Vertex {
    if (this._vertices.length <= 0) {
      return null
    }
    return this._vertices.find(vertex => vertex.key === key) || null
  }

  /**
   * Removes and returns a vertex from a graph.
   *
   * @param {string} key - The key of the vertex.
   * @returns {Vertex} The removed vertex.
   * @memberof Graph
   */
  public removeVertex(key: string): Vertex {
    const index = this._vertices.findIndex(vertex => vertex.key === key)
    if (this._vertices.length <= 0 || index < 0) {
      return null
    }
    const currentVertex = this._vertices[index]

    // TODO: check for existence of vertex in edge

    // remove this vertex from the neighbors list of each associated vertex
    if (currentVertex.neighborsCount() > 0) {
      currentVertex.neighbors.map(vertex =>
        vertex.removeNeighbor(currentVertex.key)
      )
    }

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
   * Returns a list of the edges in the graph.
   *
   * @readonly
   * @type {Edge[]}
   * @memberof Graph
   */
  public get edges(): Edge[] {
    return this._edges
  }

  /**
   * Retrieve an edge from a pair of a vertex keys.
   *
   * @param {string} vertexKey1 - The first vertex key.
   * @param {string} vertexKey2 - The second vertex key.
   * @returns {Edge} The edge.
   * @memberof Graph
   */
  public getEdge(vertexKey1: string, vertexKey2: string): Edge {
    const index: number = this.__getEdgeIndex(vertexKey1, vertexKey2)

    if (index < 0) {
      return null
    }

    return this._edges[index]
  }

  /**
   * Get the array index of an edge by a vertex key pair.
   *
   * @private
   * @param {string} vertexKey1 - The first vertex key.
   * @param {string} vertexKey2 - The second vertex key.
   * @returns {number} The edge index.
   * @memberof Graph
   */
  private __getEdgeIndex(vertexKey1: string, vertexKey2: string): number {
    return this._edges.findIndex(edge => {
      return (
        edge.vertices[0].key === vertexKey1 &&
        edge.vertices[1].key === vertexKey2
      )
    })
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

    this.addVertex(vertex1)
    this.addVertex(vertex2)

    // check for existence of edge before adding
    const existingIndex: number = this.__getEdgeIndex(vertex1.key, vertex2.key)
    if (existingIndex < 0) {
      this._edges.push(new Edge(vertex1, vertex2))
    }

    return this
  }

  /**
   * Removes an edge from a graph by a vertex key pair.
   * Also removes each vertex association.
   *
   * @param {string} vertexKey1 - The first vertex key.
   * @param {string} vertexKey2 - The second vertex key.
   * @returns {Graph} - The graph.
   * @memberof Graph
   */
  public removeEdge(vertexKey1: string, vertexKey2: string): Graph {
    const index: number = this.__getEdgeIndex(vertexKey1, vertexKey2)

    if (index < 0) {
      return null
    }

    this._edges.splice(index, 1)

    const vertex1: Vertex = this.getVertex(vertexKey1)
    const vertex2: Vertex = this.getVertex(vertexKey2)

    vertex1.removeNeighbor(vertexKey2)
    vertex2.removeNeighbor(vertexKey1)

    return this
  }

  /**
   * Returns the total number of edges in the graph.
   *
   * @returns {number} The number of edges.
   * @memberof Graph
   */
  public edgesCount(): number {
    return this._edges.length
  }

  /**
   * Prints the edges of a graph to the console.
   *
   * @memberof Graph
   */
  public print(): string {
    const edges: string[] = []
    this._edges.map(edge => {
      edges.push(`${edge.vertices[0].key}, ${edge.vertices[1].key}`)
    })
    return edges.join('\n')
  }
}
