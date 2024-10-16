import { Box } from '@/infrastructure/components/Box'
import { Paragraph } from '@/infrastructure/components/Paragraph'
import { useStyles } from '@/infrastructure/hooks/useStyles'

function DesktopSideBar () {
  const styles = useStyles({
    desktopSideBar: {
      width: 200,
      height: '100%',
      backgroundColor: 'lightgray'
    }
  })

  return (
    <Box style={styles.desktopSideBar}>
      <Paragraph>DesktopSideBar ...</Paragraph>
    </Box>
  )
}

export { DesktopSideBar }
