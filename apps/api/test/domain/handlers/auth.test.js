'use strict'

import { describe, it, expect } from 'vitest'

import config from '../../../src/infrastructure/config.js'
import { server } from '../../../src/infrastructure/server.js'
import '../../../src/application/routes.js'

describe('login', () => {
  it('login without body', async () => {
    const response = await server.inject({ method: 'POST', url: '/login' })
    expect(response.statusCode).toBe(400)
  })

  it('login without body', async () => {
    const response = await server.inject({ method: 'POST', url: '/login', payload: {} })
    expect(response.statusCode).toBe(400)
  })

  it('login without username', async () => {
    const response = await server.inject({ method: 'POST', url: '/login', payload: { password: config.testUserPassword } })
    expect(response.statusCode).toBe(400)
  })

  it('login without password', async () => {
    const response = await server.inject({ method: 'POST', url: '/login', payload: { username: config.testUserUsername } })
    expect(response.statusCode).toBe(400)
  })

  it('login wrong credentials', async () => {
    const response = await server.inject({ method: 'POST', url: '/login', payload: { username: 'test', password: 'test' } })
    expect(response.statusCode).toBe(404)
  })

  it('login correct credentials', async () => {
    const response = await server.inject({ method: 'POST', url: '/login', payload: { username: config.testUserUsername, password: config.testUserPassword } })
    expect(response.statusCode).toBe(200)
  })
})
