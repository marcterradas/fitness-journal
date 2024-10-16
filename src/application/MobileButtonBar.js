import { Box } from '@/infrastructure/components/Box'
import { Paragraph } from '@/infrastructure/components/Paragraph'
import { useStyles } from '@/infrastructure/hooks/useStyles'

function MobileButtonBar () {
  const style = useStyles({
    mobileButtonBar: {
      width: '100%',
      height: 50,
      backgroundColor: 'lightgray'
    }
  })
  return (
    <Box style={style.mobileButtonBar}>
      <Paragraph>MobileButtonBar ...</Paragraph>
    </Box>
  )
}

export { MobileButtonBar }
