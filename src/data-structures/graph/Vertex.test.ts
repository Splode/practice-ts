import * as faker from 'faker'
import Vertex from './Vertex'

describe('The Vertex class', () => {
  test('create a new Vertex', () => {
    expect(new Vertex(1, faker.random.objectElement())).toBeInstanceOf(Vertex)
  })

  test('get the key from a vertex', () => {
    const vertex = new Vertex(faker.random.number(), faker.random.objectElement())
    expect(typeof vertex.key).toBe('number')
  })

  test('get the data from a vertex', () => {
    const vertex = new Vertex(1, faker.random.objectElement())
    expect(vertex.data).toBeDefined()
  })
})
