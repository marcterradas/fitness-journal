import { Box } from '@/infrastructure/components/Box'
import { Link } from '@/infrastructure/components/Link'
import { Paragraph } from '@/infrastructure/components/Paragraph'
import { useStyles } from '@/infrastructure/hooks/useStyles'
import { useTranslation } from '@/infrastructure/i18n'
import { spacer, colors } from '@/infrastructure/styles'

function SideBar ({ navigation }) {
  const { t } = useTranslation()

  const styles = useStyles({
    SideBar: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'space-between',
      width: 200,
      height: '100%',
      backgroundColor: colors.darkGray,
      paddingVertical: spacer
    },
    link: {
      marginBottom: spacer
    }
  })

  function goTo (route) {
    navigation.navigate(route)
  }

  return (
    <Box style={styles.SideBar}>
      <Box>
        <Link style={styles.link} onPress={() => goTo('Home')}>
          <Paragraph>{t('navigation.label.home')}</Paragraph>
        </Link>
        <Link style={styles.link} onPress={() => goTo('Profile')}>
          <Paragraph>{t('navigation.label.profile')}</Paragraph>
        </Link>
        <Link onPress={() => goTo('Workout')}>
          <Paragraph>{t('navigation.label.workouts')}</Paragraph>
        </Link>
      </Box>
      <Link onPress={() => goTo('Settings')}>
        <Paragraph>{t('navigation.label.settings')}</Paragraph>
      </Link>
    </Box>
  )
}

export { SideBar }
