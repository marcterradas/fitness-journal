export class User {
  #_id
  #username
  #password

  constructor ({ _id, username, password }) {
    this._id = _id
    this.username = username
    this.password = password
  }

  get _id () {
    return this.#_id
  }

  get username () {
    return this.#username
  }

  get password () {
    return this.#password
  }

  set _id (value) {
    if (!value) throw new Error('Invalid _id')
    this.#_id = value
  }

  set username (value) {
    if (!value || typeof value !== 'string') throw new Error('Invalid username')
    this.#username = value
  }

  set password (value) {
    if (!value || typeof value !== 'string') throw new Error('Invalid password')
    this.#password = value
  }
}
