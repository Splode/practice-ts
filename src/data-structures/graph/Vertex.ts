/**
 * Creates a new Vertex.
 *
 * @export
 * @class Vertex
 */
export default class Vertex {
  /**
   *Creates an instance of Vertex.
   * @param {number} key - A unique integer key.
   * @memberof Vertex
   */
  constructor(key: number, data: any) {
    this._key = key
    this._data = data
  }

  /**
   * A unique integer key for each vertex.
   *
   * @private
   * @type {number}
   * @memberof Vertex
   */
  private _key: number


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
   * @type {number}
   * @memberof Vertex
   */
  public get key(): number {
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
   * @param {Vertex} vertex - A vertex instance.
   * @memberof Vertex
   */
  public addNeighbor(vertex: Vertex): Vertex {
    this._neighbors.push(vertex)
    return this
  }

  /**
   * Finds and returns a vertex's connected vertex by its key.
   * Returns null if vertex is not a neighbor.
   *
   * @param {number} key - The key of the vertex to search for.
   * @returns {Vertex} - The found vertex.
   * @memberof Vertex
   */
  public getNeighbor(key: number): Vertex {
    return this._neighbors.find(vertex => vertex.key === key) || null
  }

  /**
   * Remove and return an associated vertex by its key.
   *
   * @param {number} key - The key of the vertex to remove.
   * @returns {Vertex} The removed vertex.
   * @memberof Vertex
   */
  public removeNeighbor(key: number): Vertex {
    const index = this._neighbors.findIndex(vertex => vertex.key === key)
    if (index < 0) {
      throw `Cannot find relationship between vertices with key ${this._key} and ${key}.`
    }
    return this._neighbors.splice(index, 0)[0]
  }

  /**
   * Returns the number of connected vertices.
   *
   * @returns {number} The number of connected vertices.
   * @memberof Vertex
   */
  public neighborsLength(): number {
    return this._neighbors.length
  }
}
