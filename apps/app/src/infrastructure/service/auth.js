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

    switch (response.status) {
    case 200: return { status: true, data: await response.json() }
    case 400: return { status: false, error: 'login.error.missingCredentials' }
    case 404: return { status: false, error: 'login.error.userNotFound' }
    case 500: return { status: false, error: 'common.label.internalServerError' }
    }
  } catch (error) {
    return { status: false, error: 'common.label.offline' }
  }
}

export {
  login
}
