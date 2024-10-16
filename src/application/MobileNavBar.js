import { Box } from '@/infrastructure/components/Box'
import { Paragraph } from '@/infrastructure/components/Paragraph'
import { useStyles } from '@/infrastructure/hooks/useStyles'

function MobileNavBar () {
  const style = useStyles({
    mobileNavBar: {
      width: '100%',
      height: 50,
      backgroundColor: 'lightgray'
    }
  })
  return (
    <Box style={style.mobileNavBar}>
      <Paragraph>MobileNavBar ...</Paragraph>
    </Box>
  )
}

export { MobileNavBar }
