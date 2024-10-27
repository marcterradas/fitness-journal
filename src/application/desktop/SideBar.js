import { Box } from '@/infrastructure/components/Box'
import { Link } from '@/infrastructure/components/Link'
import { Paragraph } from '@/infrastructure/components/Paragraph'
import { useStyles } from '@/infrastructure/hooks/useStyles'
import { spacer } from '@/infrastructure/styles'

function SideBar ({ navigation }) {
  const styles = useStyles({
    SideBar: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'space-between',
      width: 200,
      height: '100%',
      backgroundColor: 'lightgray',
      paddingVertical: spacer
    }
  })

  function goTo (route) {
    navigation.navigate(route)
  }

  return (
    <Box style={styles.SideBar}>
      <Box>
        <Link onPress={() => goTo('Home')}>
          <Paragraph>Home</Paragraph>
        </Link>
        <Link onPress={() => goTo('Profile')}>
          <Paragraph>Profile</Paragraph>
        </Link>
        <Link onPress={() => goTo('Workout')}>
          <Paragraph>Workout</Paragraph>
        </Link>
      </Box>
      <Link onPress={() => goTo('Settings')}>
        <Paragraph>Settings</Paragraph>
      </Link>
    </Box>
  )
}

export { SideBar }
