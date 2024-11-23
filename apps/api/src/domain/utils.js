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

/**
 * Sanitizes a string by removing potentially harmful characters.
 *
 * @param {string} string - The string to sanitize.
 * @returns {string} The sanitized string.
 */
function sanitize (string = '') {
  return string.replace(/[&<>"'`=/]/g, function (char) {
    return {
      '&': '&amp;',
      '<': '&lt;',
      '>': '&gt;',
      '"': '&quot;',
      "'": '&#x27;',
      '`': '&#x60;',
      '=': '&#x3D;',
      '/': '&#x2F;'
    }[char]
  })
}

export { encrypt, sanitize }
