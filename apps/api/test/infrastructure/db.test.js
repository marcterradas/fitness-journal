'use strict'

import { describe, it, expect } from 'vitest'

import config from '../../src/infrastructure/config'
import { client } from '../../src/infrastructure/database'

describe('test database connection', () => {
  it('should connect to the database', async () => {
    try {
      await client.connect()
      const response = await client.db(config.database).command({ ping: 1 })
      expect(response).toEqual({ ok: 1 })
    } catch (err) {
      console.error(err)
    } finally {
      await client.close()
    }
  })
})
