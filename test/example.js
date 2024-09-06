import { describe, it, expect } from 'vitest'

function add (a, b) {
  return a + b
}

describe('add function', () => {
  it('should return 2 when adding 1 and 1', () => {
    expect(add(1, 1)).toBe(2)
  })
})
