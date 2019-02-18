/**
 * Creates a new Vertex.
 *
 * @export
 * @class Vertex
 */
export default class Vertex {
  /**
   *Creates an instance of Vertex.
   * @param {string} key - A unique integer key.
   * @memberof Vertex
   */
  constructor(key: string, data: any) {
    this._key = key
    this._data = data
  }

  /**
   * A unique integer key for each vertex.
   *
   * @private
   * @type {string}
   * @memberof Vertex
   */
  private _key: string


  /**
   * The data contained within a vertex.
   *
   * @private
   * @type {*}
   * @memberof Vertex
   */
  private _data: any


  /**
   * A list of connected vertices.
   *
   * @private
   * @type {Vertex[]}
   * @memberof Vertex
   */
  private _neighbors: Vertex[] = []

  /**
   * Get a vertex's key.
   *
   * @readonly
   * @type {string}
   * @memberof Vertex
   */
  public get key(): string {
    return this._key
  }

  /**
   * Get a vertex's associated data.
   *
   * @type {*}
   * @memberof Vertex
   */
  public get data(): any {
    return this._data
  }

  /**
   * Set a vertex's data to a new value.
   *
   * @memberof Vertex
   */
  public set data(value: any) {
    this._data = value
  }

  /**
   * Get a list of the vertex's connected vertices.
   *
   * @readonly
   * @type {Vertex[]}
   * @memberof Vertex
   */
  public get neighbors(): Vertex[] {
    return this._neighbors
  }

  /**
   * Adds a vertex to the list of vertices associated with a vertex.
   *
   * @param {Vertex} vertex - A vertex.
   * @returns {Vertex} The vertex.
   * @memberof Vertex
   */
  public addNeighbor(vertex: Vertex): Vertex {
    if (!this.getNeighbor(vertex.key)) {
      this._neighbors.push(vertex)
    }
    return this
  }

  /**
   * Finds and returns a vertex's connected vertex by its key.
   * Returns null if vertex is not a neighbor.
   *
   * @param {string} key - The key of the vertex to search for.
   * @returns {Vertex} - The found vertex.
   * @memberof Vertex
   */
  public getNeighbor(key: string): Vertex {
    return this._neighbors.find(vertex => vertex.key === key) || null
  }

  /**
   * Remove and return an associated vertex by its key.
   *
   * @param {string} key - The key of the vertex to remove.
   * @returns {Vertex} The removed vertex.
   * @memberof Vertex
   */
  public removeNeighbor(key: string): Vertex {
    const index: number = this._neighbors.findIndex(vertex => vertex.key === key)
    if (index < 0) {
      return null
    }
    return this._neighbors.splice(index, 1)[0]
  }

  /**
   * Returns the number of connected vertices.
   *
   * @returns {number} The number of connected vertices.
   * @memberof Vertex
   */
  public neighborsCount(): number {
    return this._neighbors.length
  }
}
