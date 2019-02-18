import * as faker from 'faker'
import Vertex from '../Vertex'
import { generateVertex, generateVertexLs } from '../utils/Vertex-mock'

describe('The Vertex class', () => {
  test('instantiating a new Vertex', () => {
    expect(generateVertex()).toBeInstanceOf(Vertex)
  })

  test('getting its key', () => {
    const vertex: Vertex = generateVertex()
    expect(typeof vertex.key).toBe('string')
  })

  test('getting its data', () => {
    const vertex: Vertex = generateVertex()
    expect(vertex.data).toBeDefined()
  })

  test('setting its data', () => {
    const vertex: Vertex = generateVertex()
    const newData: object = faker.helpers.userCard()
    vertex.data = newData
    expect(vertex.data).toBe(newData)
  })

  test('adding a neighboring vertex', () => {
    const vertex: Vertex = generateVertex()
    expect(vertex.neighborsCount()).toBe(0)
    expect(vertex.addNeighbor(generateVertex())).toBeInstanceOf(Vertex)
    expect(vertex.neighborsCount()).toBe(1)
  })

  test('preventing duplicate vertices from being added as neighbors', () => {
    const vertex: Vertex = generateVertex()
    const neighbor: Vertex = generateVertex()
    vertex.addNeighbor(neighbor).addNeighbor(neighbor)
    expect(vertex.neighborsCount()).toBe(1)
  })

  test('getting all neighbors', () => {
    const vertex: Vertex = generateVertex()
    const vertices: Vertex[] = generateVertexLs(10)
    vertices.map(el => vertex.addNeighbor(el))
    expect(vertex.neighborsCount()).toBe(10)
    expect(vertex.neighbors[6]).toBeInstanceOf(Vertex)
  })

  test('getting a neighboring vertex by key', () => {
    const vertex: Vertex = generateVertex()
    const key: string = faker.random.uuid()
    vertex.addNeighbor(new Vertex(key, faker.helpers.userCard()))
    expect(vertex.getNeighbor(key)).toBeInstanceOf(Vertex)
    expect(vertex.getNeighbor(faker.random.word())).toBeNull()
  })

  test('removing a neighboring vertex by', () => {
    const vertex: Vertex = generateVertex()
    const vertices: Vertex[] = generateVertexLs(10)
    const key: string = faker.random.uuid()

    vertex.addNeighbor(new Vertex(key, faker.helpers.userCard()))
    vertices.map(el => vertex.addNeighbor(el))

    expect(vertex.neighborsCount()).toBe(11)
    expect(vertex.removeNeighbor(key)).toBeInstanceOf(Vertex)
    expect(vertex.neighborsCount()).toBe(10)
  })
})
