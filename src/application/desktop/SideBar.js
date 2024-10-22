import { Box } from '@/infrastructure/components/Box'
import { Link } from '@/infrastructure/components/Link'
import { Paragraph } from '@/infrastructure/components/Paragraph'
import { useStyles } from '@/infrastructure/hooks/useStyles'

function SideBar ({ navigation }) {
  const styles = useStyles({
    SideBar: {
      width: 200,
      height: '100%',
      backgroundColor: 'lightgray'
    }
  })

  function goTo (route) {
    navigation.navigate(route)
  }

  return (
    <Box style={styles.SideBar}>
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

export { SideBar }
