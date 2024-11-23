import { randomBytes, createCipheriv } from 'crypto'

/**
 * Encrypts a string using AES-256-CBC algorithm.
 *
 * @param {string} string - The string to encrypt.
 * @returns {string|boolean} The encrypted string in hex format, or false if the input is empty.
 */
function encrypt (string = '') {
  if (!string) return false

  const algorithm = 'aes-256-cbc'
  const key = randomBytes(32)
  const iv = randomBytes(16)

  const cipher = createCipheriv(algorithm, key, iv)
  let encrypted = cipher.update(string, 'utf8', 'hex')
  encrypted += cipher.final('hex')

  return encrypted
}

export { encrypt }
