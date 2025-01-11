import { Box } from '@/infrastructure/components/Box'
import { Link } from '@/infrastructure/components/Link'
import { Paragraph } from '@/infrastructure/components/Paragraph'
import { useStyles } from '@/infrastructure/hooks/useStyles'
import { useTranslation } from '@/infrastructure/i18n'
import { colors } from '@/infrastructure/styles'

function Bottom ({ navigation }) {
  const { t } = useTranslation()

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
        <Paragraph>{t('navigation.label.home')}</Paragraph>
      </Link>
      <Link onPress={() => goTo('Profile')}>
        <Paragraph>{t('navigation.label.profile')}</Paragraph>
      </Link>
      <Link onPress={() => goTo('Workout')}>
        <Paragraph>{t('navigation.label.workout')}</Paragraph>
      </Link>
      <Link onPress={() => goTo('Settings')}>
        <Paragraph>{t('navigation.label.settings')}</Paragraph>
      </Link>
    </Box>
  )
}

export { Bottom }
