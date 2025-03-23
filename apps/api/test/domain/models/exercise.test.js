import { describe, it, expect } from 'vitest'

import { Exercise } from '../../../src/domain/models/exercise'

describe('exercise', () => {
  it('should return an exercise', () => {
    const exerciseData = { _id: '1', name: 'Bench press', type: 'push', reps: 8, sets: 4, weight: 100, duration: 0 }
    const exercise = new Exercise(exerciseData)
    expect(exercise._id).toBe(exerciseData._id)
    expect(exercise.name).toBe(exerciseData.name)
    expect(exercise.type).toBe(exerciseData.type)
    expect(exercise.reps).toBe(exerciseData.reps)
    expect(exercise.sets).toBe(exerciseData.sets)
    expect(exercise.weight).toBe(exerciseData.weight)
    expect(exercise.duration).toBe(exerciseData.duration)
  })

  it('should throw an error for invalid _id', () => {
    const exerciseData = { _id: 1, name: 'Bench press', type: 'push', reps: 8, sets: 4, weight: 100, duration: 0 }
    expect(() => new Exercise(exerciseData)).toThrow('Invalid _id.')
  })

  it('should throw an error for invalid name', () => {
    const exerciseData = { _id: '1', name: 1, type: 'push', reps: 8, sets: 4, weight: 100, duration: 0 }
    expect(() => new Exercise(exerciseData)).toThrow('Invalid name.')
  })

  it('should throw an error for invalid type', () => {
    const exerciseData = { _id: '1', name: 'Bench press', type: 1, reps: 8, sets: 4, weight: 100, duration: 0 }
    expect(() => new Exercise(exerciseData)).toThrow('Invalid type.')
  })

  it('should throw an error for invalid reps', () => {
    const exerciseData = { _id: '1', name: 'Bench press', type: 'push', reps: -1, sets: 4, weight: 100, duration: 0 }
    expect(() => new Exercise(exerciseData)).toThrow('Invalid reps.')
  })

  it('should throw an error for invalid sets', () => {
    const exerciseData = { _id: '1', name: 'Bench press', type: 'push', reps: 8, sets: -1, weight: 100, duration: 0 }
    expect(() => new Exercise(exerciseData)).toThrow('Invalid sets.')
  })

  it('should throw an error for invalid weight', () => {
    const exerciseData = { _id: '1', name: 'Bench press', type: 'push', reps: 8, sets: 4, weight: -1, duration: 0 }
    expect(() => new Exercise(exerciseData)).toThrow('Invalid weight.')
  })

  it('should throw an error for invalid duration', () => {
    const exerciseData = { _id: '1', name: 'Bench press', type: 'push', reps: 8, sets: 4, weight: 100, duration: -1 }
    expect(() => new Exercise(exerciseData)).toThrow('Invalid duration.')
  })
})
