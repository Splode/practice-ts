/**
 * Creates a new stack.
 *
 * @class Stack
 * @exports
 */
export default class Stack {
  /**
   * The collection of numeric items in the stack.
   *
   * @private
   * @type {number[]}
   * @memberof Stack
   */
  private _items: number[] = []

  /**
   * Adds an number item to the end of a stack.
   *
   * @param {number} number - The number item to be added to the end of the stack.
   * @memberof Stack
   */
  public push(number: number): void {
    this._items.push(number)
  }

  /**
   * Removes the last item from the stack and returns it.
   *
   * @returns {number} The last and removed item.
   * @memberof Stack
   */
  public pop(): number {
    return this._items.pop()
  }

  /**
   * Returns the top-most item in the stack.
   *
   * @returns {number} The top-most item in the stack.
   * @memberof Stack
   */
  public peek(): number {
    return this._items[this.length - 1]
  }

  /**
   * Returns the length of the stack.
   *
   * @readonly
   * @type {number} The length of the stack.
   * @memberof Stack
   */
  public get length(): number {
    return this._items.length
  }

  /**
   * Returns true if the stack has zero items.
   *
   * @returns {boolean} Returns true if stack has zero items.
   * @memberof Stack
   */
  public isEmpty(): boolean {
    return this.length === 0
  }

  /**
   * Prints the stack to the console.
   *
   * @memberof Stack
   */
  public print(): void {
    for (let i = 0; i < this.length; i++) {
      console.log(`[${i}]:  ${this._items[i]}`)
    }
  }
}
