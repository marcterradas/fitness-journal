import { describe, it, expect } from 'vitest'

import { encrypt, sanitize } from '../src/domain/utils'

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

describe('sanitize', () => {
  it('should sanitize potentially harmful characters', () => {
    const result = sanitize('<script>alert("XSS")</script>')
    expect(result).toBe('&lt;script&gt;alert(&quot;XSS&quot;)&lt;&#x2F;script&gt;')
  })

  it('should return the same string if there are no harmful characters', () => {
    const result = sanitize('HelloWorld')
    expect(result).toBe('HelloWorld')
  })

  it('should sanitize multiple harmful characters', () => {
    const result = sanitize('<div>Test & "sanitize" = \'function\'</div>')
    expect(result).toBe('&lt;div&gt;Test &amp; &quot;sanitize&quot; &#x3D; &#x27;function&#x27;&lt;&#x2F;div&gt;')
  })

  it('should return an empty string if input is empty', () => {
    const result = sanitize('')
    expect(result).toBe('')
  })
})
