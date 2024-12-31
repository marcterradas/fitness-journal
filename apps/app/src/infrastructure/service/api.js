import config from '@/infrastructure/config'

async function login ({ username, password }) {
  try {
    const response = await fetch(`${config.apiUrl}/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json'
      },
      body: JSON.stringify({ username, password })
    })
    // TODO: show toast.
    return response
  } catch (error) {
    // TODO: show toast.
    return error
  }
}

export {
  login
}
