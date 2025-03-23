import { Box } from '@/infrastructure/components/Box'
import { Paragraph } from '@/infrastructure/components/Paragraph'
import { useCallback } from '@/infrastructure/hooks/useCallback'
import { useEffect } from '@/infrastructure/hooks/useEffect'
import { getWorkouts } from '@/infrastructure/service/workout'
import { useNavigationStore } from '@/infrastructure/stores/navigation'
import { useUserStore } from '@/infrastructure/stores/user'

function Workout () {
  const currentRoute = useNavigationStore((state) => state.currentRoute)
  const user = useUserStore((state) => state.user)

  const fetchWorkouts = useCallback(async () => {
    const workouts = await getWorkouts(user._id)
    return workouts
  }, [user._id])

  useEffect(() => {
    if (currentRoute === 'workout') fetchWorkouts()
  }, [currentRoute, fetchWorkouts])

  return (
    <Box>
      <Paragraph>Workout Screen</Paragraph>
    </Box>
  )
}

export default Workout
