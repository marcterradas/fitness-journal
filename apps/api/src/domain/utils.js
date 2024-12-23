/**
 * Encodes a string using Base64 encoding.
 *
 * @param {string} string - The string to encode.
 * @returns {string} The Base64 encoded string.
 */
function encrypt (string = '') {
  // TODO: Implement encryption.
  return Buffer.from(string).toString('base64')
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
