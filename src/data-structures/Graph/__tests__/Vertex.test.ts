import * as faker from 'faker'
import Vertex from '../Vertex'
import { generateVertex, generateVertexLs } from '../utils/Vertex-mock'

describe('The Vertex class', () => {
  test('create a new Vertex', () => {
    expect(generateVertex()).toBeInstanceOf(Vertex)
  })

  test('get the key from a vertex', () => {
    const vertex = generateVertex()
    expect(typeof vertex.key).toBe('string')
  })

  test('get the data from a vertex', () => {
    const vertex = generateVertex()
    expect(vertex.data).toBeDefined()
  })

  test('set the data of a vertex', () => {
    const vertex = generateVertex()
    const newData = 'new vertex data'
    vertex.data = newData
    expect(vertex.data).toBe(newData)
  })

  test('add neighbor to vertex', () => {
    const vertex = generateVertex()
    expect(vertex.neighborsCount()).toBe(0)
    expect(vertex.addNeighbor(generateVertex())).toBeInstanceOf(Vertex)
    expect(vertex.neighborsCount()).toBe(1)
  })

  test('do not add duplicate vertices as neighbors', () => {
    const vertex = generateVertex()
    const neighbor = generateVertex()
    vertex.addNeighbor(neighbor).addNeighbor(neighbor)
    expect(vertex.neighborsCount()).toBe(1)
  })

  test('get neighbors from a vertex', () => {
    const vertex = generateVertex()
    const vertices = generateVertexLs(10)
    vertices.map(el => vertex.addNeighbor(el))
    expect(vertex.neighborsCount()).toBe(10)
    expect(vertex.neighbors[6]).toBeInstanceOf(Vertex)
  })

  test('get a neighbor from a vertex by key', () => {
    const vertex = generateVertex()
    const key = faker.random.uuid()
    vertex.addNeighbor(new Vertex(key, faker.helpers.userCard()))
    expect(vertex.getNeighbor(key)).toBeInstanceOf(Vertex)
    expect(vertex.getNeighbor(faker.random.word())).toBeNull()
  })

  test('remove a neighboring vertex by', () => {
    const vertex = generateVertex()
    const vertices = generateVertexLs(10)
    const key = faker.random.uuid()

    vertex.addNeighbor(new Vertex(key, faker.helpers.userCard()))
    vertices.map(el => vertex.addNeighbor(el))

    expect(vertex.neighborsCount()).toBe(11)
    expect(vertex.removeNeighbor(key)).toBeInstanceOf(Vertex)
    expect(vertex.neighborsCount()).toBe(10)
  })
})
