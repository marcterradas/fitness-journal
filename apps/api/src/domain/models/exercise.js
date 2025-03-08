'use strict'

import config from '../../infrastructure/config.js'

const exercisesNames = config.exercises.map(exercise => exercise.name)
const exercisesTypes = config.exercises.map(exercise => exercise.type)

class Exercise {
  #_id
  #name
  #type
  #reps
  #sets
  #weight
  #duration

  constructor ({ _id, name, type, reps, sets, weight, duration }) {
    this._id = _id
    this.name = name
    this.type = type
    this.reps = reps
    this.sets = sets
    this.weight = weight
    this.duration = duration
  }

  get _id () {
    return this.#_id
  }

  get name () {
    return this.#name
  }

  get type () {
    return this.#type
  }

  get reps () {
    return this.#reps
  }

  get sets () {
    return this.#sets
  }

  get weight () {
    return this.#weight
  }

  get duration () {
    return this.#duration
  }

  set _id (value) {
    if (!value || typeof value !== 'string') throw new Error('Invalid _id.')
    this.#_id = value
  }

  set name (value) {
    console.log(value)
    console.log(exercisesNames)
    if (!value || typeof value !== 'string' || !exercisesNames.includes(value)) throw new Error('Invalid name.')
    this.#name = value
  }

  set type (value) {
    if (!value || typeof value !== 'string' || !exercisesTypes.includes(value)) throw new Error('Invalid type.')
    this.#type = value
  }

  set reps (value) {
    if (!value || typeof value !== 'number' || value < 1) throw new Error('Invalid reps.')
    this.#reps = value
  }

  set sets (value) {
    if (!value || typeof value !== 'number' || value < 1) throw new Error('Invalid sets.')
    this.#sets = value
  }

  set weight (value) {
    // Weight can be 0 if the exercise is bodyweight only.
    if (typeof value !== 'number' || value < 0) throw new Error('Invalid weight.')
    this.#weight = value
  }

  set duration (value) {
    // Duration can be 0 if the exercise is strength only.
    if (typeof value !== 'number' || value < 0) throw new Error('Invalid duration.')
    this.#duration = value
  }
}

export {
  Exercise
}
