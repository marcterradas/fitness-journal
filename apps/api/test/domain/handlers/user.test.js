import { describe, it, expect } from 'vitest'

import config from '../../../src/infrastructure/config.js'
import { server } from '../../../src/infrastructure/server.js'
import '../../../src/application/routes.js'

describe('user', () => {
  it('get user without userId', async () => {
    const response = await server.inject({ method: 'GET', url: '/user/' })
    expect(response.statusCode).toBe(400)
  })

  it('get user not found', async () => {
    const response = await server.inject({ method: 'GET', url: '/user/603d2f9f8b3b9a1d4c8e4e2a' })
    expect(response.statusCode).toBe(404)
  })

  it('get user', async () => {
    const response = await server.inject({ method: 'GET', url: `/user/${config.testUserId}` })
    expect(response.statusCode).toBe(200)
  })

  it('get user not found', async () => {
    const response = await server.inject({ method: 'GET', url: '/user/1' })
    expect(response.statusCode).toBe(500)
  })
})
