import { describe, it, expect } from 'vitest'

import { encrypt } from '../src/domain/utils'

describe('encrypt', () => {
  it('should return false for an empty string', () => {
    const result = encrypt('')
    expect(result).toBe(false)
  })

  it('should return different encrypted strings for the same input', () => {
    const result = encrypt('test')
    expect(result).not.toBe('88237efb2a8683cfcf323a40fb84a4c7')
  })
})
