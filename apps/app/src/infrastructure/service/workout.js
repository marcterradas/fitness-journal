import config from '@/infrastructure/config'

async function getWorkouts (userId) {
  try {
    const response = await fetch(`${config.apiUrl}/workouts?userId=${userId}`, {
      method: 'GET',
      headers: {
        Accept: 'application/json'
      }
    })

    switch (response.status) {
    case 200: return { status: true, data: await response.json() }
    case 400: return { status: false, error: 'workouts.error.missingUserId' }
    case 500: return { status: false, error: 'common.label.internalServerError' }
    }
  } catch (error) {
    return { status: false, error: 'common.label.offline' }
  }
}

export {
  getWorkouts
}
