import { describe, it, expect } from 'vitest'

import { server } from '../src/infrastructure/server.js'
import '../src/application/routes.js'

describe('login', () => {
  const method = 'POST'
  const url = '/login'
  // TODO: Create and more username and password test to .env file.
  const username = 'test'
  const password = 'test'

  it('login without body', async () => {
    const response = await server.inject({ method, url })
    expect(response.statusCode).toBe(400)
  })

  it('login without body', async () => {
    const response = await server.inject({ method, url, payload: {} })
    expect(response.statusCode).toBe(400)
  })

  it('login without username', async () => {
    const response = await server.inject({ method, url, payload: { password } })
    expect(response.statusCode).toBe(400)
  })

  it('login without password', async () => {
    const response = await server.inject({ method, url, payload: { username } })
    expect(response.statusCode).toBe(400)
  })

  it('login correct credentials', async () => {
    const response = await server.inject({ method, url, payload: { username, password } })
    expect(response.statusCode).toBe(200)
  })
})
