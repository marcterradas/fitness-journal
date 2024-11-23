import { describe, it, expect } from 'vitest'

import { server } from '../src/infrastructure/server.js'
import '../src/application/routes.js'

describe('login', () => {
  const method = 'POST'
  const url = '/login'

  it('login without body', async () => {
    const response = await server.inject({ method, url })
    expect(response.statusCode).toBe(400)
  })

  it('login without body', async () => {
    const response = await server.inject({ method, url, payload: {} })
    expect(response.statusCode).toBe(400)
  })

  it('login with body', async () => {
    const response = await server.inject({ method, url, payload: { username: 'test', password: 'test' } })
    expect(response.statusCode).toBe(200)
  })
})
