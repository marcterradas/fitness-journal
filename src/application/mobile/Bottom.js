import { Box } from '@/infrastructure/components/Box'
import { Link } from '@/infrastructure/components/Link'
import { Paragraph } from '@/infrastructure/components/Paragraph'
import { useStyles } from '@/infrastructure/hooks/useStyles'
import { colors } from '@/infrastructure/styles'

function Bottom ({ navigation }) {
  const style = useStyles({
    Bottom: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-around',
      alignItems: 'center',
      width: '100%',
      height: 50,
      backgroundColor: colors.darkGray
    }
  })

  function goTo (route) {
    navigation.navigate(route)
  }

  return (
    <Box style={style.Bottom}>
      <Link onPress={() => goTo('Home')}>
        <Paragraph>Home</Paragraph>
      </Link>
      <Link onPress={() => goTo('Profile')}>
        <Paragraph>Profile</Paragraph>
      </Link>
      <Link onPress={() => goTo('Workout')}>
        <Paragraph>Workout</Paragraph>
      </Link>
      <Link onPress={() => goTo('Settings')}>
        <Paragraph>Settings</Paragraph>
      </Link>
    </Box>
  )
}

export { Bottom }
