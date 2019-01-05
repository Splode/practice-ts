/**
 * A node in a singly-linked list.
 * Each node has a number as its data and a pointer to the next node in the list.
 *
 * @class ListNode
 */
class ListNode {
    /**
     * Creates an instance of ListNode.
     * @constructor
     * @param {number} data - The number value to be stored.
     */
    constructor(data) {
        this.data = data;
    }
}
/**
 * A singly-linked list.
 *
 * @class LinkedList
 */
class LinkedList {
    constructor() {
        this.length = 0;
        this.head = null;
        this.tail = null;
    }
    /**
     * Returns the number of nodes in the linked list.
     *
     * @returns {number} The number of nodes in the linked list.
     * @memberof LinkedList
     */
    getLength() {
        return this.length;
    }
    /**
     * Returns true if there are no nodes in the linked list.
     * Returns false otherwise.
     *
     * @returns {boolean} True or false.
     * @memberof LinkedList
     */
    isEmpty() {
        return this.length === 0;
    }
    // push
    /**
     * Add a list node to the end of the linked list.
     *
     * @param {ListNode} node - The node to be added.
     * @returns {ListNode} The node added to the linked list.
     * @memberof LinkedList
     */
    push(node) {
        // set the node as both head and tail if list is empty
        if (this.isEmpty()) {
            this.head = node;
            this.tail = node;
        }
        else {
            this.tail.next = node;
            this.tail = node;
        }
        // increment the length of the list
        this.length++;
        return node;
    }
    // pop
    // unshift
    // shift
    // get
    // insert
    /**
     * Prints the nodes in the linked list.
     *
     * @memberof LinkedList
     */
    print() {
        let current = this.head;
        while (current) {
            console.log(current.data);
            current = current.next;
        }
    }
}
const values = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const list = new LinkedList();
values.map(val => list.push(new ListNode(val)));
list.print();
