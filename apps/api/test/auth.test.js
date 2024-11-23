import { describe, it, expect } from 'vitest'

import { server } from '../src/infrastructure/server.js'
import '../src/application/routes.js'

describe('login', () => {
  it('login without body', async () => {
    const response = await server.inject({ method: 'POST', url: '/login' })
    expect(response.statusCode).toBe(400)
  })
  it('login without body', async () => {
    const response = await server.inject({ method: 'POST', url: '/login', payload: {} })
    expect(response.statusCode).toBe(400)
  })
})

describe('login', () => {
  it('login with body', async () => {
    const response = await server.inject({ method: 'POST', url: '/login', payload: { username: 'test', password: 'test' } })
    expect(response.statusCode).toBe(200)
  })
})
