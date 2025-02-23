import { describe, it, expect } from 'vitest'

import { User } from '../../../src/domain/models/user'

describe('user', () => {
  it('should return a user', () => {
    const userData = { _id: '1', username: 'test', password: 'test' }
    const user = new User(userData)
    expect(user._id).toBe('1')
    expect(user.username).toBe('test')
    expect(user.password).toBe('test')
  })

  it('should throw an error for invalid _id', () => {
    const userData = { _id: 1, username: 'test', password: 'test' }
    expect(() => new User(userData)).toThrow('Invalid _id.')
  })

  it('should throw an error for invalid username', () => {
    const userData = { _id: '1', username: 1, password: 'test' }
    expect(() => new User(userData)).toThrow('Invalid username.')
  })

  it('should throw an error for invalid password', () => {
    const userData = { _id: '1', username: 'test', password: 1 }
    expect(() => new User(userData)).toThrow('Invalid password.')
  })

  it('should throw an error for missing _id', () => {
    const userData = { username: 'test', password: 'test' }
    expect(() => new User(userData)).toThrow('Invalid _id.')
  })

  it('should throw an error for missing username', () => {
    const userData = { _id: '1', password: 'test' }
    expect(() => new User(userData)).toThrow('Invalid username.')
  })

  it('should throw an error for missing password', () => {
    const userData = { _id: '1', username: 'test' }
    expect(() => new User(userData)).toThrow('Invalid password.')
  })
})
