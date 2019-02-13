/**
 * Creates a new Node.
 *
 * @class Node
 */
class Node {
  /**
   *Creates an instance of Node.
   * @param {number} key - A unique integer key.
   * @memberof Node
   */
  constructor(key: number) {
    this._key = key
  }

  private _key: number
  private _neighbors: Node[] = []

  /**
   * Adds a node to the list of nodes associated with this node.
   *
   * @param {Node} node - A node instance.
   * @memberof Node
   */
  public addNeighbor(node: Node): void {
    this._neighbors.push(node)
  }

  /**
   * Returns the key property of the node.
   *
   * @readonly
   * @type {number}
   * @memberof Node
   */
  public get key(): number {
    return this._key
  }

  /**
   * Returns a list of connected nodes.
   *
   * @readonly
   * @type {Node[]}
   * @memberof Node
   */
  public get neighbors(): Node[] {
    return this._neighbors
  }

  /**
   * Returns the number of connected nodes.
   *
   * @returns {number} The number of connected nodes.
   * @memberof Node
   */
  public numberOfNeighbors(): number {
    return this._neighbors.length
  }
}

/**
 * Creates a new Graph.
 *
 * @class Graph
 */
class Graph {
  /**
   *Creates an instance of Graph.
   * @param {boolean} [directed=false] - Directed or undirected.
   * @memberof Graph
   */
  constructor(directed: boolean = false) {
    this._directed = directed
  }

  private _directed: boolean
  private _nodes: Node[] = []
  private _edges: string[]

  /**
   * Adds a node to the graph.
   *
   * @param {Node} node - A node to add.
   * @memberof Graph
   */
  public addNode(node: Node): void {
    this._nodes.push(node)
  }

  /**
   * Finds and returns a node by its key property.
   *
   * @param {number} key - The key to search for.
   * @returns {Node} The found node.
   * @memberof Graph
   */
  public getNode(key: number): Node {
    return this._nodes.find(node => node.key === key)
  }

  public addEdge(node1: Node, node2: Node): string {
    const edge: string = `${node1.key}---${node2.key}`
    node1.addNeighbor(node2)
    node2.addNeighbor(node1)
    this._edges.push(edge)
    return edge
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
   * Returns the total number of nodes in the graph.
   *
   * @returns {number} The number of nodes.
   * @memberof Graph
   */
  public size(): number {
    return this._nodes.length
  }
}

export { Node, Graph }
